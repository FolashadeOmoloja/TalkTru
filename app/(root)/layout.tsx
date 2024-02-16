import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TalkTrue',
  description: 'A social media platform that allows youths to express themselve, connect and build productive communities'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
             <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>

  );
}
