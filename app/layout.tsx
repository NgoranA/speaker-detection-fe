import type { Metadata } from "next";
import { Libre_Franklin } from 'next/font/google'

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "Speaker Dectection",
  description: "Scaffolded and Coded by Team",
};

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
