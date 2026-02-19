"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function OpenSource() {
  return (
    <section id="get-started" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 text-center md:p-16"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />
          </div>

          <div className="relative">
            <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
              MIT Licensed
            </span>

            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Free and open source
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              partio is open source under the MIT license. Contribute, fork, or
              just use it — no strings attached.
            </p>

            {/* Install commands */}
            <div className="mx-auto mt-8 max-w-md space-y-3">
              <div className="rounded-lg border border-border bg-[#0d0d0f] px-4 py-3 font-mono text-sm text-zinc-300">
                <span className="text-accent-light">$</span> brew install
                partio-io/tap/partio
              </div>
              <div className="text-xs text-zinc-500">or</div>
              <div className="rounded-lg border border-border bg-[#0d0d0f] px-4 py-3 font-mono text-sm text-zinc-300">
                <span className="text-accent-light">$</span> curl -fsSL
                https://partio.io/install.sh | sh
              </div>
              <div className="text-xs text-zinc-500">or</div>
              <div className="rounded-lg border border-border bg-[#0d0d0f] px-4 py-3 font-mono text-sm text-zinc-300">
                <span className="text-accent-light">$</span> go install
                github.com/partio-io/cli/cmd/partio@latest
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="https://docs.partio.io/quickstart" size="lg">
                Read the Docs
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
                Star on GitHub
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
