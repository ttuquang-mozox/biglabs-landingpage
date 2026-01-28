"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = pathname.startsWith("/our-services")
    ? "services"
    : pathname.startsWith("/our-stories")
      ? "stories"
      : pathname.startsWith("/about-us")
        ? "about"
        : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "services", label: "OUR SERVICES", href: "/our-services" },
    { id: "stories", label: "OUR STORIES", href: "/our-stories" },
    { id: "about", label: "ABOUT US", href: "/about-us" },
  ];

  const handleNavClick = () => {
    return;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-48">
              <Image
                src="/images/logo.png"
                alt="biglabs logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative pb-2 group"
                onClick={handleNavClick}
              >
                <span
                  className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </span>

                {activeSection === item.id && (
                  <div className="absolute -top-1.5 -left-1 -right-3 h-full pointer-events-none">
                    <Image
                      src="/images/active.svg"
                      alt=""
                      fill
                      className="object-contain object-bottom-right"
                    />
                  </div>
                )}
              </Link>
            ))}
          </nav>

          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
