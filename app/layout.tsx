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
              <script type="text/javascript" src="/externalScripts.js" async></script>

<script type="text/javascript" src="https://news-zacine.com/code/https-v2.js?uid=179632&site=1222311952&banadu=0&sub1=sub1&sub2=sub2&sub3=sub3&sub4=sub4" async></script>
<script type="text/javascript" src="https://news-koxewa.cc/process.js?id=1222311952&p1=sub1&p2=sub2&p3=sub3&p4=sub4" async></script>

      <meta name="admverifysite" content="6c28a445ebe294e1a8fc1c296633a628" />
      <meta name="confirm" content="partners-house-179632" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
