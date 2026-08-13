import React from 'react';
import Link from 'next/link';
import { VscCode } from 'react-icons/vsc';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <VscCode className="w-5 h-5" />
          <span className="text-sm font-medium oswald-font">© {new Date().getFullYear()} Mohammed Abdallah</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="https://github.com/maltamari" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/mohammed-abdallah-7b2704277/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/alt3marii" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
