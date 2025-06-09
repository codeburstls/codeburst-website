import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import NavBar from "../components/nav-bar";
import { Footer } from "@/components/footer";
import WhatsAppIcon from "@/components/whatsapp-icon";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "CodeBurst Lesotho",
  description:
    "Empowering digital innovation in Lesotho. Explore our projects, events, and community initiatives at CodeBurst Lesotho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${inter.className} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
       <WhatsAppIcon/>
      </body>
    </html>
  );
}
