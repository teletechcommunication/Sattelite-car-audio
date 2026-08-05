import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PHONE_DISPLAY = "(855) 943-8332";
export const PHONE_HREF = "tel:+18559438332";
export const BRAND = "Satellite Car Audio";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        setDisplay(v.toFixed(decimals));
      }),
    [spring, decimals],
  );

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function CallButton({
  label,
  className,
  size = "lg",
}: {
  label?: string;
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <motion.a
      href={PHONE_HREF}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Call ${BRAND} support at ${PHONE_DISPLAY}`}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] font-semibold text-primary-foreground shadow-glow transition-shadow",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm",
        className,
      )}
    >
      {label ?? `Call ${PHONE_DISPLAY}`}
    </motion.a>
  );
}

export function GhostButton({
  children,
  href = "#live-chat",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary/60",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] text-primary-glow uppercase">
      {children}
    </span>
  );
}
