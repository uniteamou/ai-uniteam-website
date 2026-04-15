"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  Mail,
  FileText,
  Database,
  Zap,
  CheckCircle,
  Bell,
  BarChart2,
} from "lucide-react";

interface NodeProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  accent?: string;
  pulse?: boolean;
  nodeRef?: React.RefObject<HTMLDivElement | null>;
}

function Node({ icon, label, sublabel, accent = "bg-zinc-800", pulse = false, nodeRef }: NodeProps) {
  return (
    <div
      ref={nodeRef}
      className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-700/60 ${accent} backdrop-blur-sm`}
      style={{ minWidth: 160 }}
    >
      {pulse && (
        <span className="absolute inset-0 rounded-xl animate-ping opacity-20 bg-violet-500 pointer-events-none" />
      )}
      <div className="w-8 h-8 rounded-lg bg-zinc-700/80 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white" style={{ fontSize: "0.82rem", fontWeight: 600 }}>{label}</p>
        {sublabel && <p className="text-zinc-500" style={{ fontSize: "0.72rem" }}>{sublabel}</p>}
      </div>
    </div>
  );
}

interface Line {
  x1: number; y1: number;
  x2: number; y2: number;
  animated: boolean;
  delay?: number;
}

function getBottom(el: HTMLElement, container: HTMLElement) {
  const r = el.getBoundingClientRect();
  const c = container.getBoundingClientRect();
  return {
    x: r.left - c.left + r.width / 2,
    y: r.bottom - c.top,
  };
}

function getTop(el: HTMLElement, container: HTMLElement) {
  const r = el.getBoundingClientRect();
  const c = container.getBoundingClientRect();
  return {
    x: r.left - c.left + r.width / 2,
    y: r.top - c.top,
  };
}

export function WorkflowDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  const inputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const outputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const taskClosedRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<Line[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    function recalc() {
      const container = containerRef.current;
      const ai = aiRef.current;
      if (!container || !ai) return;

      const cr = container.getBoundingClientRect();
      setSize({ w: cr.width, h: cr.height });

      const newLines: Line[] = [];

      const aiTop = getTop(ai, container);
      const aiBottom = getBottom(ai, container);

      // Input nodes → AI Engine
      inputRefs.forEach((ref, i) => {
        if (!ref.current) return;
        const bottom = getBottom(ref.current, container);
        newLines.push({ x1: bottom.x, y1: bottom.y, x2: aiTop.x, y2: aiTop.y, animated: true, delay: i * 0.6 });
      });

      // AI Engine → Output nodes (first 3)
      outputRefs.slice(0, 3).forEach((ref, i) => {
        if (!ref.current) return;
        const top = getTop(ref.current, container);
        newLines.push({ x1: aiBottom.x, y1: aiBottom.y, x2: top.x, y2: top.y, animated: true, delay: 0.3 + i * 0.4 });
      });

      // First 3 output nodes → Task Closed
      if (taskClosedRef.current) {
        const taskTop = getTop(taskClosedRef.current, container);
        outputRefs.slice(0, 3).forEach((ref, i) => {
          if (!ref.current) return;
          const bottom = getBottom(ref.current, container);
          newLines.push({ x1: bottom.x, y1: bottom.y, x2: taskTop.x, y2: taskTop.y, animated: true, delay: 0.9 + i * 0.35 });
        });
      }

      setLines(newLines);
    }

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden select-none py-4">
      <style>{`
        @keyframes flowDot {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(139, 92, 246, 0); }
        }
      `}</style>

      {/* SVG lines layer */}
      {size.w > 0 && (
        <svg
          className="absolute inset-0 pointer-events-none"
          width={size.w}
          height={size.h}
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(139,92,246)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(82,82,91)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {lines.map((l, i) => {
            const pathD = `M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`;
            return (
              <g key={i}>
                {/* Static line */}
                <path
                  d={pathD}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                />
                {/* Animated dot */}
                <circle r="3" fill="rgb(167,139,250)" opacity="0">
                  <animateMotion
                    dur="1.8s"
                    begin={`${l.delay ?? 0}s`}
                    repeatCount="indefinite"
                    path={pathD}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.9;1"
                    dur="1.8s"
                    begin={`${l.delay ?? 0}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      )}

      {/* Content layer */}
      <div className="relative flex flex-col items-center gap-14" style={{ zIndex: 1 }}>

        {/* Row 1: Inputs */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {[
            { icon: <MessageSquare className="w-4 h-4 text-blue-400" />, label: "Chat Message", sublabel: "User input" },
            { icon: <Mail className="w-4 h-4 text-emerald-400" />, label: "Inbound Email", sublabel: "Email trigger" },
            { icon: <FileText className="w-4 h-4 text-amber-400" />, label: "Form Submit", sublabel: "Web form" },
          ].map((n, i) => (
            <Node key={n.label} icon={n.icon} label={n.label} sublabel={n.sublabel} nodeRef={inputRefs[i]} />
          ))}
        </div>

        {/* Row 2: AI Engine */}
        <div
          ref={aiRef}
          className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-violet-500/40 bg-gradient-to-br from-violet-900/40 to-blue-900/30"
          style={{ animation: "glowPulse 3s ease-in-out infinite", minWidth: 220 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div>
            <p className="text-white" style={{ fontSize: "0.95rem", fontWeight: 700 }}>AI Engine</p>
            <p className="text-violet-300" style={{ fontSize: "0.75rem" }}>Processing & routing</p>
          </div>
          <div
            className="ml-2 w-2.5 h-2.5 rounded-full bg-emerald-400"
            style={{ animation: "pulseSlow 2s ease-in-out infinite" }}
          />
        </div>

        {/* Row 3: Outputs (top 3) */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {[
            { icon: <Database className="w-4 h-4 text-blue-400" />, label: "CRM Updated", sublabel: "Salesforce / HubSpot" },
            { icon: <Bell className="w-4 h-4 text-violet-400" />, label: "Slack Notified", sublabel: "Team alert sent" },
            { icon: <BarChart2 className="w-4 h-4 text-emerald-400" />, label: "Report Ready", sublabel: "Auto-generated" },
          ].map((n, i) => (
            <Node key={n.label} icon={n.icon} label={n.label} sublabel={n.sublabel} nodeRef={outputRefs[i]} />
          ))}
        </div>

        {/* Row 4: Task Closed */}
        <Node
          icon={<CheckCircle className="w-4 h-4 text-amber-400" />}
          label="Task Closed"
          sublabel="Ticket resolved"
          nodeRef={taskClosedRef}
        />
      </div>
    </div>
  );
}
