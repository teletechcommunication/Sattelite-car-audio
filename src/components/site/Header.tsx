import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Headphones, MessageSquareText, Phone, Radio, Menu, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, BRAND, CallButton } from "./primitives";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Activate Radio", href: "#services" },
  { label: "Signal Help", href: "#instant-help" },
  { label: "Channel Plans", href: "#voucher" },
  { label: "Marine", href: "#marine" },
  { label: "Contact Us", href: "#contact" },
];

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-border bg-surface/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 sm:flex sm:justify-between sm:px-6">
        <a
          href={PHONE_HREF}
          className="flex min-w-0 items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          <Phone className="size-3.5 shrink-0 text-primary-glow" aria-hidden />
          <span className="truncate">
            Toll-Free Support:{" "}
            <span className="font-bold text-foreground">{PHONE_DISPLAY}</span>
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
            <span className="size-2 animate-pulse-ring rounded-full bg-success" aria-hidden />
            Agents Available
          </span>
          <a
            href="#live-chat"
            className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary/60"
          >
            <MessageSquareText className="size-3.5 text-primary-glow" aria-hidden />
            Live Chat
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-500",
        scrolled ? "glass-strong" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] shadow-glow">
            <Radio className="size-5 text-primary-foreground" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-extrabold">
              {BRAND}
            </span>
            <span className="block text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Support &amp; Activation
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CallButton size="sm" label={`Call Now · ${PHONE_DISPLAY}`} className="hidden sm:inline-flex" />
          <CallButton size="sm" label="Call Now" className="sm:hidden" />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="glass grid size-10 shrink-0 place-items-center rounded-xl lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          aria-label="Mobile"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass-strong overflow-hidden lg:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#live-chat"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-primary-glow"
            >
              <Headphones className="size-4" aria-hidden /> Start Live Chat
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
