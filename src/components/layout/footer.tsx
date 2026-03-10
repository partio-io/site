import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "CLI Demo", href: "#cli-demo" },
      { label: "Get Started", href: "#get-started" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.partio.io" },
      { label: "Quick Start", href: "https://docs.partio.io/quickstart" },
      { label: "CLI Commands", href: "https://docs.partio.io/cli/commands" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/partio-io/cli" },
      { label: "Issues", href: "https://github.com/partio-io/cli/issues" },
      {
        label: "Discussions",
        href: "https://github.com/partio-io/cli/discussions",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/partio-logo.svg"
                alt="partio"
                width={24}
                height={24}
              />
              <span className="font-semibold text-foreground">partio</span>
            </a>
            <p className="text-sm text-muted">
              Capture the why behind your code changes.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-zinc-500">
            MIT License. Built by{" "}
            <a
              href="https://github.com/partio-io"
              className="text-muted hover:text-foreground"
            >
              partio-io
            </a>
          </p>
          <p className="text-xs text-zinc-500">
            Open source on{" "}
            <a
              href="https://github.com/partio-io/cli"
              className="text-muted hover:text-foreground"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
