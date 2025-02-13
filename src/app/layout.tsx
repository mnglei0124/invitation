import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invitation",
  description: "Invitation for her",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
