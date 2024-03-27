import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script 
      id="aclib" 
      type="text/javascript" 
      src="//acscdn.com/script/aclib.js"
      async
      ></script>
      <meta name="admverifysite" content="6c28a445ebe294e1a8fc1c296633a628" />
      <meta name="confirm" content="partners-house-179632" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
