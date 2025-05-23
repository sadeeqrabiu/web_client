import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roll Protocol",
  description: "Roll Protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
