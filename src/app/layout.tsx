import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "crayonzgrim's blog",
    template: "crayonzgrim's blog | %s",
  },
  description: "Full-stack engineer crayonzgrim's blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
