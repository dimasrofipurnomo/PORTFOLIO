"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function AnimateIn({
  children,
  delay = 0,
  duration = 0.4,
  y = 15,
  className,
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
