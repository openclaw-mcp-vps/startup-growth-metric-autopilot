import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growth Metric Autopilot – Auto-calculate startup metrics",
  description: "Connects to Stripe, Google Analytics, and databases to automatically calculate CAC, LTV, churn, and other SaaS metrics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d8b171fe-20da-49f4-bffa-7b16f32a3062"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
