"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TerminalLine {
  text: string;
  type?: "command" | "output" | "success" | "warning" | "muted" | "accent";
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
}

const typeColors: Record<string, string> = {
  command: "text-white",
  output: "text-zinc-400",
  success: "text-success",
  warning: "text-warning",
  muted: "text-zinc-500",
  accent: "text-accent-light",
};

export function Terminal({ lines, title = "Terminal", className }: TerminalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-[#0d0d0f] shadow-2xl",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-xs text-zinc-500 font-mono">{title}</span>
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: (line.delay ?? i) * 0.15,
            }}
            className={cn("whitespace-pre", typeColors[line.type ?? "output"])}
          >
            {line.type === "command" ? (
              <>
                <span className="text-accent-light">$</span> {line.text}
              </>
            ) : (
              line.text
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
