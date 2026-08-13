"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { VscCode } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import { linksPages } from "@/constants/links";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <VscCode className="w-6 h-6 text-primary group-hover:text-blue-500 transition-colors" />
          <span className="font-bold text-lg tracking-tight hidden sm:block oswald-font">Mohammed Abdallah</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {linksPages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className={`relative py-1 transition-colors hover:text-primary ${
                pathname === page.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {page.name}
              {pathname === page.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          )}

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {linksPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === page.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
