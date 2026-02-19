"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/ui/terminal";

const terminalLines = [
  { text: "partio enable", type: "command" as const, delay: 0 },
  { text: "partio enabled successfully!", type: "success" as const, delay: 1 },
  { text: "  - Created .partio/ config directory", type: "output" as const, delay: 2 },
  { text: "  - Installed git hooks (pre-commit, post-commit, pre-push)", type: "output" as const, delay: 3 },
  { text: "  - Ready to capture AI sessions on commit", type: "output" as const, delay: 4 },
  { text: "", type: "output" as const, delay: 5 },
  { text: 'git commit -m "Add user authentication"', type: "command" as const, delay: 6 },
  { text: "  checkpoint created id=a3f8c2d14e9b agent_pct=87", type: "accent" as const, delay: 7 },
  { text: "", type: "output" as const, delay: 8 },
  { text: "partio rewind --list", type: "command" as const, delay: 9 },
  { text: "Checkpoints:", type: "output" as const, delay: 10 },
  { text: "  a3f8c2d14e9b  branch=main  agent=87%  created=2026-02-17T14:30:00Z", type: "output" as const, delay: 11 },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <Image
              src="/squirrel-mascot.png"
              alt="partio mascot"
              width={180}
              height={180}
              className="drop-shadow-lg"
              priority
            />
          </motion.div>

          <motion.div variants={item}>
            <Badge>Open Source</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight"
          >
            Capture the{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              why
            </span>{" "}
            behind your code changes
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
          >
            partio hooks into Git to automatically capture AI agent sessions
            alongside every commit. Know why every line was written, not just
            what changed.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#get-started" size="lg">
              Get Started
            </Button>
            <Button
              href="https://github.com/partio-io/cli"
              variant="secondary"
              size="lg"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 w-full max-w-3xl"
          >
            <Terminal lines={terminalLines} title="~/my-project" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
