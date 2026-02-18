import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "partio — Capture the why behind your code changes",
  description:
    "Open-source CLI that captures AI agent sessions alongside Git commits. Know why every line was written.",
  openGraph: {
    title: "partio — Capture the why behind your code changes",
    description:
      "Open-source CLI that captures AI agent sessions alongside Git commits. Know why every line was written.",
    url: "https://partio.io",
    siteName: "partio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "partio — Capture the why behind your code changes",
    description:
      "Open-source CLI that captures AI agent sessions alongside Git commits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
