"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Terminal } from "@/components/ui/terminal";

const demos = [
  {
    tab: "status",
    title: "partio status",
    lines: [
      { text: "partio status", type: "command" as const },
      { text: "Repository: /home/user/my-project", type: "output" as const },
      { text: "Branch:     main", type: "output" as const },
      { text: "Status:     enabled", type: "success" as const },
      { text: "Strategy:   manual-commit", type: "output" as const },
      { text: "Agent:      claude-code", type: "output" as const },
      { text: "Hooks:      installed", type: "success" as const },
      { text: "Checkpoints: branch exists", type: "success" as const },
    ],
  },
  {
    tab: "rewind",
    title: "partio rewind",
    lines: [
      { text: "partio rewind --list", type: "command" as const },
      { text: "Checkpoints:", type: "output" as const },
      { text: "", type: "output" as const },
      { text: "  a3f8c2d14e9b  branch=main           agent=87%   created=2026-02-17T14:30:00Z", type: "output" as const },
      { text: "  bb12340092ac  branch=feature/auth    agent=100%  created=2026-02-16T09:15:22Z", type: "output" as const },
      { text: "  c9e71a2b3f04  branch=main           agent=42%   created=2026-02-15T16:45:00Z", type: "output" as const },
      { text: "", type: "output" as const },
      { text: "partio rewind --to a3f8c2d14e9b", type: "command" as const },
      { text: "Rewinding to checkpoint a3f8c2d14e9b", type: "accent" as const },
      { text: "  Commit: 4f9a2c...", type: "output" as const },
      { text: "  Branch: main", type: "output" as const },
      { text: "  Created branch: partio/rewind/a3f8c2d14e9b", type: "success" as const },
    ],
  },
  {
    tab: "doctor",
    title: "partio doctor",
    lines: [
      { text: "partio doctor", type: "command" as const },
      { text: "[OK]   .partio/ directory exists", type: "success" as const },
      { text: "[OK]   pre-commit hook installed", type: "success" as const },
      { text: "[OK]   post-commit hook installed", type: "success" as const },
      { text: "[OK]   pre-push hook installed", type: "success" as const },
      { text: "[OK]   checkpoint branch exists", type: "success" as const },
      { text: "[OK]   partio binary found (you're running it!)", type: "success" as const },
      { text: "", type: "output" as const },
      { text: "All checks passed!", type: "success" as const },
    ],
  },
];

export function CliDemo() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cli-demo" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Powerful CLI, simple interface
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything you need in a handful of intuitive commands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 mx-auto max-w-3xl"
        >
          {/* Tab buttons */}
          <div className="mb-4 flex gap-2">
            {demos.map((demo, i) => (
              <button
                key={demo.tab}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium font-mono transition-all",
                  activeTab === i
                    ? "bg-accent/15 text-accent-light border border-accent/30"
                    : "text-muted hover:text-foreground border border-transparent"
                )}
              >
                {demo.tab}
              </button>
            ))}
          </div>

          {/* Terminal display */}
          <Terminal
            key={activeTab}
            lines={demos[activeTab].lines}
            title={demos[activeTab].title}
          />
        </motion.div>
      </div>
    </section>
  );
}
