"use client";

import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const audio = new Audio("/background-music.mp3");
    audio.volume = 0.2;
    audio.loop = true;
    audio.play().catch((e) => console.log("Audio autoplay failed:", e));
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
