import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Todo List",
  description: "A Todo List Application",
  manifest: "/manifest.json",
  // viewport: "width=device-width, initial-scale=1",
  icons: [
      {
        rel: "icon",
        href: "/apple-touch-icon.png",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/apple-touch-icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
