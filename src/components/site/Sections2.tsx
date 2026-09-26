import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Anchor,
  ChevronDown,
  CreditCard,
  Headphones,
  Phone,
  Power,
  Radio,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import ctaImg from "@/assets/final-cta-highway.jpg";
import {
  BRAND,
  CallButton,
  PARENT_COMPANY,
  PHONE_DISPLAY,
  PHONE_HREF,
  Reveal,
  SectionLabel,
} from "./primitives";

const HUB = [
  { icon: Power, t: "New Connection" },
  { icon: RefreshCw, t: "Connection Readiness" },
  { icon: Radio, t: "Plan Options" },
  { icon: CreditCard, t: "No Direct Fee" },
  { icon: Wrench, t: "Equipment Details" },
  { icon: Anchor, t: "Marine Options" },
  { icon: Settings2, t: "Eligibility Questions" },
  { icon: Headphones, t: "How We Are Paid" },
];

export function RoutingHub() {
  return (
    <section id="hub" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-lines opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Connection Topics</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Explore a new connection with the right information
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUB.map((h, i) => (
            <Reveal key={h.t} delay={0.05 * i}>
              <motion.a
                href={PHONE_HREF}
                whileHover={{ y: -6 }}
                className="glass group flex h-full flex-col justify-between rounded-2xl p-6 transition-colors hover:border-primary/50"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary/70 transition-colors group-hover:bg-primary/20">
                  <h.icon className="size-5 text-primary-glow" aria-hidden />
                </span>
                <span className="mt-6 block">
                  <span className="block text-base font-bold">{h.t}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    No direct fee from Satellite Car Audio
                  </span>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    cat: "Contact",
    q: "Does Satellite Car Audio charge me directly?",
    a: "No. Satellite Car Audio does not charge customers directly for connection guidance provided through this website.",
  },
  {
    cat: "Compensation",
    q: "How does Satellite Car Audio earn money?",
    a: "If an eligible new connection is completed after a referral through Satellite Car Audio, we may receive a commission from the third party that fulfills the connection. This does not create a direct customer charge from Satellite Car Audio.",
  },
  {
    cat: "Connection",
    q: "What can Satellite Car Audio help me with?",
    a: `Call Satellite Car Audio at ${PHONE_DISPLAY} to discuss potential new satellite radio connections, equipment details, and the next steps a third-party provider may require.`,
  },
  {
    cat: "Providers",
    q: "Who completes my connection?",
    a: "A third-party provider fulfills the connection and determines its own pricing, eligibility, service terms, account approval, and availability. Satellite Car Audio does not control those decisions.",
  },
  {
    cat: "Existing Accounts",
    q: "Can Satellite Car Audio change or fix my existing account?",
    a: "No. Existing account changes, service issues, billing questions, and provider-specific support are handled by the applicable provider directly.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Quick answers about Satellite Car Audio
            </h2>
            <p className="mt-4 text-muted-foreground">
              Call Satellite Car Audio to explore a potential new connection at{" "}
              <a href={PHONE_HREF} className="font-semibold text-foreground">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0.04 * i}>
                <div className="glass overflow-hidden rounded-2xl">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.65rem] tracking-[0.2em] text-primary-glow uppercase">
                          {f.cat}
                        </span>
                        <span className="mt-1 block font-display text-base font-bold">{f.q}</span>
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
                        <ChevronDown className="size-5 text-muted-foreground" aria-hidden />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaImg}
          alt="Pickup truck driving along a scenic mountain highway at sunset"
          width={1920}
          height={1008}
          loading="lazy"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 night-fade" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Start with a clear, <span className="text-gradient">no-cost conversation</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Explore eligible new satellite radio connection options. Satellite Car Audio does not
            charge you directly and may receive a commission only when an eligible connection is
            completed.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <a
            href={PHONE_HREF}
            className="mt-8 block font-display text-4xl font-extrabold sm:text-6xl"
          >
            {PHONE_DISPLAY}
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton label="Explore Connection Options" />
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {[
              "No direct Satellite Car Audio fee",
              "Commission disclosed",
              "Provider sets terms",
              "Connection guidance",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary-glow" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-[image:var(--gradient-primary)]">
                <Radio className="size-5 text-primary-foreground" aria-hidden />
              </span>
              <span className="font-display text-lg font-extrabold">{BRAND}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              No-cost guidance for potential new satellite radio connections. Satellite Car Audio
              may receive a commission from a third party when an eligible connection is completed.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center gap-2 font-display text-xl font-extrabold"
            >
              <Phone className="size-4 text-primary-glow" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Navigate</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { l: "Home", h: "#top" },
                { l: "Connection Options", h: "#services" },
                { l: "How It Works", h: "#instant-help" },
                { l: "Marine Division", h: "#marine" },
                { l: "FAQs", h: "#faq" },
                { l: "Contact Us", h: "#contact" },
              ].map((x) => (
                <li key={x.l}>
                  <a
                    href={x.h}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {x.l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Support</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>No direct customer fee · United States</li>
              <li>
                <a href={PHONE_HREF} className="transition-colors hover:text-foreground">
                  Toll-free: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="/privacy/index.html" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms/index.html" className="transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/advertising-policy/index.html"
                  className="transition-colors hover:text-foreground"
                >
                  Advertising Transparency
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-7">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Satellite Car Audio is operated by {PARENT_COMPANY}, located at 3400 N Alma School Rd,
            Chandler, AZ 85224-8012. Satellite Car Audio provides no-cost guidance for potential new
            satellite radio connections. Customers do not pay Satellite Car Audio directly.
            Satellite Car Audio may receive a commission from a third party when an eligible new
            connection is completed. Provider pricing, eligibility, terms, and service decisions are
            set by the applicable provider. All trademarks belong to their respective owners.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
