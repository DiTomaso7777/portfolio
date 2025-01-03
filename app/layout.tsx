import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sknet Cloud SRL",
  description: "Where AI meets the sky: Unleashing Security Intelligence"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Where AI meets the sky: Unleashing Security Intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove the redundant Content-Security-Policy */}
      </head>
      <body>{children}</body>
    </html>
  )
}
