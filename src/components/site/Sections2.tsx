import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Anchor,
  ChevronDown,
  CreditCard,
  Headphones,
  MessageSquareText,
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
  GhostButton,
  PHONE_DISPLAY,
  PHONE_HREF,
  Reveal,
  SectionLabel,
} from "./primitives";

const HUB = [
  { icon: Power, t: "Radio Activation" },
  { icon: RefreshCw, t: "Signal Refresh" },
  { icon: Radio, t: "Subscription Help" },
  { icon: CreditCard, t: "Billing Support" },
  { icon: Wrench, t: "Installation Guidance" },
  { icon: Anchor, t: "Marine Services" },
  { icon: Settings2, t: "Device Troubleshooting" },
  { icon: Headphones, t: "Customer Support" },
];

export function RoutingHub() {
  return (
    <section id="hub" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-lines opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Quick Routing Hub</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Choose a category and we&apos;ll route your call instantly
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
                    Call {PHONE_DISPLAY}
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
    q: "What is the satellite radio customer support phone number?",
    a: `The toll-free satellite radio support phone number is ${PHONE_DISPLAY}. Call ${PHONE_DISPLAY} anytime for radio activation, signal help, billing, and subscription plan questions. Agents are available 24/7.`,
  },
  {
    cat: "Activation",
    q: "How do I activate my satellite radio?",
    a: `To activate your satellite radio, call ${PHONE_DISPLAY}. A live agent will help activate your radio hardware and set up your subscription. Have your radio ID ready when you call.`,
  },
  {
    cat: "Signal",
    q: "Who do I call for satellite radio signal problems?",
    a: `For satellite radio signal issues, call ${PHONE_DISPLAY}. Agents assist with no-signal errors, channel reception problems, and antenna troubleshooting for car, home, and marine radios.`,
  },
  {
    cat: "Availability",
    q: "Is satellite radio support available 24/7?",
    a: `Yes. Support at ${PHONE_DISPLAY} is available 24 hours a day, 7 days a week for all radio models. Call for fast help with activation, signal, billing, and plan changes.`,
  },
  {
    cat: "Plans",
    q: "How can I get a discount on satellite radio plans?",
    a: `New users can claim promotional plan discounts by calling ${PHONE_DISPLAY}. Mention your voucher code when speaking with an agent to apply limited-time rates, including annual plan savings of up to 50%.`,
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
              Quick answers about satellite radio support
            </h2>
            <p className="mt-4 text-muted-foreground">
              The primary contact number is{" "}
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
            Every mile sounds better with the right{" "}
            <span className="text-gradient">support behind you</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            One toll-free call connects you to a specialist who can activate, refresh, or fix your
            satellite radio today.
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
            <CallButton label="Call Now" />
            <GhostButton>
              <MessageSquareText className="size-4 text-primary-glow" aria-hidden />
              Live Chat
            </GhostButton>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {["Toll-free 24/7", "All radio models", "Fast resolution", "Secure support"].map((t) => (
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
              Independent support and activation help for satellite radio hardware and plans across
              automotive, home, and marine setups.
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
                { l: "Activate Radio", h: "#services" },
                { l: "Signal Help", h: "#instant-help" },
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
              <li>Available 24/7 · United States</li>
              <li>
                <a href={PHONE_HREF} className="transition-colors hover:text-foreground">
                  Toll-free: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="#live-chat" className="transition-colors hover:text-foreground">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-7">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Disclaimer: This webpage operates strictly as an independent consumer information and
            routing hub service. We are not a corporate retail outlet, commercial store branch, or
            corporate partner of any provider. All trademarks and trademark names belong completely
            to their respective owners. For support routing, call {PHONE_DISPLAY}.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
