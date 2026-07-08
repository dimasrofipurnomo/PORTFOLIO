import React from "react";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-slate-100 dark:bg-zinc-950 text-foreground py-8 px-6 mt-16 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-black text-lg tracking-tight">Portfolio</div>
          <p className="text-xs text-foreground/75 font-semibold">
            &copy; 2026 Dimas Rofi&apos; Purnomo.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-black uppercase tracking-wider">
          <Link
            href="http://Linkedin.com/in/dimas-rofi-purnomo-366646330"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/dimasrofipurnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dimasrofipurnomo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
