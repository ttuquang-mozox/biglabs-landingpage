import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BigLabs",
    template: "BigLabs - %s",
  },
  icons: {
    icon: "/images/logo-web.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden lg:block">
          <Header />
          <div className="min-h-screen bg-white pt-20">
            <div className="container mx-auto px-6 py-4">{children}</div>
          </div>
          <Footer />
        </div>
        {/* TODO: Responsive Overrides - Tablet: 640px to 1023px, Mobile: < 640px */}
        <div className="hidden sm:flex lg:hidden min-h-screen items-center justify-center bg-white text-black font-bold text-xl">
          Tablet View
        </div>
        <div className="flex sm:hidden min-h-screen items-center justify-center bg-white text-black font-bold text-xl">
          Mobile View
        </div>
      </body>
    </html>
  );
}
