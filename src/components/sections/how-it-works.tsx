"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Enable",
    description:
      "Run partio enable in any Git repo. It installs lightweight hooks and creates a checkpoint branch — zero config needed.",
    code: "$ partio enable\npartio enabled successfully!\n  - Installed git hooks\n  - Ready to capture AI sessions",
  },
  {
    number: "02",
    title: "Commit",
    description:
      "Work with your AI agent as usual. When you commit, partio detects the active session and captures everything automatically.",
    code: '$ git commit -m "Add auth"\n  checkpoint created\n  id=a3f8c2d14e9b agent_pct=87',
  },
  {
    number: "03",
    title: "Explore",
    description:
      "Browse checkpoints to understand past decisions. Rewind to any point to see the full AI conversation that produced the code.",
    code: "$ partio rewind --list\n  a3f8c2d14e9b  agent=87%\n  bb12340092ac  agent=100%",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted">
            Three steps. No configuration files. No workflow changes.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div className="absolute top-12 left-[16.7%] right-[16.7%] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Step number */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-accent-light">
                {step.number}
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {step.description}
              </p>

              {/* Code snippet */}
              <div className="rounded-lg border border-border bg-[#0d0d0f] p-4 font-mono text-xs leading-relaxed text-zinc-400">
                <pre className="whitespace-pre-wrap">{step.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
