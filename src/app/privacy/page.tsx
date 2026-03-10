import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — partio",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-muted">Last updated: March 10, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              What the Extension Does
            </h2>
            <p>
              The Partio browser extension reads checkpoint data from GitHub
              repositories and displays it alongside pull requests and commits.
              It connects to <strong className="text-foreground">app.partio.io</strong> to
              fetch and render checkpoint information so you can understand the
              reasoning behind code changes directly in your browser.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Permissions and Why We Need Them
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">activeTab</strong> — Used to
                read the current GitHub page URL and inject the checkpoint
                overlay on pull request and commit pages you visit.
              </li>
              <li>
                <strong className="text-foreground">storage</strong> — Used to
                store your GitHub authentication token and cache checkpoint data
                locally for faster loading.
              </li>
              <li>
                <strong className="text-foreground">cookies</strong> — Used to
                authenticate with app.partio.io so the extension can fetch
                checkpoint data on your behalf.
              </li>
              <li>
                <strong className="text-foreground">Host permissions</strong>{" "}
                (app.partio.io) — Required to communicate with the Partio API
                to retrieve checkpoint information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Data Storage
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Your GitHub token is stored in{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-foreground">
                  chrome.storage.sync
                </code>{" "}
                so it syncs across your signed-in Chrome browsers.
              </li>
              <li>
                Cached checkpoint data is stored in{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-foreground">
                  chrome.storage.local
                </code>{" "}
                on your device only.
              </li>
            </ul>
            <p className="mt-3">
              All data stays on your device or within your Chrome sync account.
              No data is sent to any server other than app.partio.io.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              No Data Selling or Sharing
            </h2>
            <p>
              We do not sell, trade, or share your personal data with any third
              parties. Your authentication tokens and cached data are used solely
              to provide the extension&apos;s functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              No Analytics or Tracking
            </h2>
            <p>
              The extension does not include any analytics, telemetry, or
              tracking code. We do not collect usage statistics, browsing
              history, or any behavioral data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, reach out via{" "}
              <a
                href="https://github.com/partio-io/cli/discussions"
                className="text-foreground underline underline-offset-4 hover:text-white"
              >
                GitHub Discussions
              </a>{" "}
              or email{" "}
              <a
                href="mailto:privacy@partio.io"
                className="text-foreground underline underline-offset-4 hover:text-white"
              >
                privacy@partio.io
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
