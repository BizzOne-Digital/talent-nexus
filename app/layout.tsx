import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talent Nexus — Pakistan's Premier Recruitment Agency",
  description: "Connecting international companies with top-tier Pakistani professionals in digital marketing, remote operations, and tech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
