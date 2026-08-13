import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talent by Digital — Remote Careers for Pakistani Professionals",
  description: "Talent by Digital connects skilled Pakistani professionals with US, Canadian, and international companies hiring remote Marketing, Sales, Creative, and Digital talent.",
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
