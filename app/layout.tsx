import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";

const parkinSans = Parkinsans({
  variable: "--font-parkin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microlights",
  description: "Microlights",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${parkinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
