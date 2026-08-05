import { motion } from "framer-motion";
import {
  Anchor,
  BadgePercent,
  CreditCard,
  Headphones,
  MessageSquareText,
  Power,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Ship,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import interiorImg from "@/assets/interior-ambient.jpg";
import dashImg from "@/assets/dashboard-radio.jpg";
import agentImg from "@/assets/support-agent.jpg";
import marineImg from "@/assets/marine-yacht.jpg";
import {
  CallButton,
  Counter,
  GhostButton,
  PHONE_DISPLAY,
  PHONE_HREF,
  Reveal,
  SectionLabel,
} from "./primitives";

const SERVICES = [
  { icon: Power, title: "Radio Activation", body: "Bring a new or pre-owned receiver online with a guided activation." },
  { icon: RefreshCw, title: "Signal Refresh", body: "Send a fresh refresh signal when channels drop or show as unavailable." },
  { icon: CreditCard, title: "Subscription Assistance", body: "Review, change, pause, or renew the plan that fits how you listen." },
  { icon: BadgePercent, title: "Billing Help", body: "Clarify charges, update payment details, and correct plan pricing." },
  { icon: Wrench, title: "Installation Guidance", body: "Antenna placement, wiring, and dock setup walkthroughs step by step." },
  { icon: Settings2, title: "Device Troubleshooting", body: "Diagnose no-signal errors, reception drops, and hardware faults." },
  { icon: Anchor, title: "Marine Radio Support", body: "Weather-resistant offshore rigs and sea plans configured correctly." },
];

export function StoreSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="glass-strong overflow-hidden rounded-[2rem] p-2">
                <img
                  src={interiorImg}
                  alt="Luxury car interior at night with ambient lighting and dashboard display"
                  width={1920}
                  height={912}
                  loading="lazy"
                  className="h-[22rem] w-full rounded-[1.6rem] object-cover sm:h-[28rem]"
                />
              </div>
              <div className="glass-strong animate-float absolute -right-3 -bottom-8 hidden w-56 rounded-2xl px-5 py-4 sm:block">
                <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Hardware &amp; Plans
                </p>
                <p className="mt-1 font-display text-lg font-extrabold">One support line</p>
                <a href={PHONE_HREF} className="mt-1 block text-sm font-semibold text-primary-glow">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>One-Stop Store</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Satellite radios and radio plans, supported end to end
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Flexible hardware bundles, standalone dashboard receivers, and data packages tailored
                for automotive, home, and offshore commercial setups. For live help, call{" "}
                <a href={PHONE_HREF} className="font-semibold text-foreground">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={0.04 * i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass h-full rounded-2xl p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-secondary/70">
                      <s.icon className="size-5 text-primary-glow" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstantHelpSection() {
  return (
    <section id="instant-help" className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={dashImg}
          alt="Illuminated satellite radio interface inside a vehicle"
          width={1280}
          height={960}
          loading="lazy"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 night-fade" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <SectionLabel>Satellite radio not working?</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Get instant help now</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <motion.span
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-glow"
          >
            <Sparkles className="size-4" aria-hidden />
            Save up to 50% on annual plans
            <span className="rounded-full bg-background/25 px-2.5 py-0.5 text-[0.65rem] tracking-widest uppercase">
              Limited time
            </span>
          </motion.span>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-7 max-w-2xl text-muted-foreground">
            Thousands of customers resolve their satellite radio issues every day — channel
            activation, signal problems, subscription billing and more. Talk to a live agent in
            seconds.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="glass-strong mx-auto mt-10 max-w-2xl rounded-[2rem] px-6 py-9 sm:px-12">
            <p className="text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
              Toll-Free Support Number
            </p>
            <a
              href={PHONE_HREF}
              className="mt-3 block font-display text-4xl font-extrabold sm:text-6xl"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-sm text-primary-glow">
              Available 24/7 · All radio models · Fast resolution
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <CallButton label="Call Now" />
              <GhostButton>
                <MessageSquareText className="size-4 text-primary-glow" aria-hidden />
                Live Chat
              </GhostButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SupportNumberSection() {
  return (
    <section id="support-number" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-6 py-12 sm:px-12">
                <SectionLabel>Satellite Radio Support Phone Number</SectionLabel>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  One number for activation, signal, billing and plan changes
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The satellite radio customer support number is{" "}
                  <span className="font-semibold text-foreground">{PHONE_DISPLAY}</span>. Support is
                  toll free and available 24/7 for all radio models across the United States.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { v: <Counter to={4.9} decimals={1} />, l: "Satisfaction" },
                    { v: <Counter to={250} suffix="k+" />, l: "Calls Handled" },
                    { v: <Counter to={60} suffix="s" />, l: "Avg. Wait" },
                    { v: <Counter to={100} suffix="%" />, l: "Toll Free" },
                  ].map((s, i) => (
                    <div key={i} className="glass rounded-2xl px-4 py-4">
                      <dt className="font-display text-xl font-extrabold text-primary-glow">
                        {s.v}
                      </dt>
                      <dd className="mt-1 text-[0.65rem] tracking-wide text-muted-foreground uppercase">
                        {s.l}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                  {[
                    { icon: ShieldCheck, t: "Verified specialists" },
                    { icon: Headphones, t: "Live agents 24/7" },
                    { icon: Star, t: "Highly rated service" },
                  ].map((x) => (
                    <li key={x.t} className="flex items-center gap-2">
                      <x.icon className="size-4 shrink-0 text-primary-glow" aria-hidden />
                      {x.t}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <CallButton />
                  <GhostButton>
                    <MessageSquareText className="size-4 text-primary-glow" aria-hidden />
                    Chat with an agent
                  </GhostButton>
                </div>
              </div>

              <div className="relative min-h-72">
                <img
                  src={agentImg}
                  alt="Customer support representative wearing a headset in a modern support center"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background),transparent_55%)]" />
                <div className="glass-strong absolute bottom-6 left-6 rounded-2xl px-5 py-4">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="size-2 animate-pulse-ring rounded-full bg-success" aria-hidden />
                    Agents online now
                  </p>
                  <a href={PHONE_HREF} className="mt-1 block font-display text-xl font-extrabold">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VoucherSection() {
  return (
    <section id="voucher" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-surface p-1 shadow-glow">
            <div className="rounded-[2.2rem] bg-[radial-gradient(120%_120%_at_50%_0%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_60%)] px-6 py-12 text-center sm:px-12">
              <motion.span
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2.6, repeat: Infinity }}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-primary-glow uppercase"
              >
                New user offer
              </motion.span>
              <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                Exclusive store discount voucher
              </h2>
              <p className="mt-3 text-muted-foreground">
                Claim the introductory subscription rate when you speak with an agent.
              </p>

              <div className="mt-8 flex flex-wrap items-end justify-center gap-3">
                <span className="font-display text-6xl font-extrabold text-gradient">$6</span>
                <span className="pb-2 text-muted-foreground line-through">Regular price</span>
              </div>
              <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-primary-glow uppercase">
                Get 6 months of access
              </p>

              <div className="glass mx-auto mt-8 max-w-md rounded-2xl border-dashed px-6 py-4">
                <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Voucher code
                </p>
                <p className="mt-1 font-display text-xl font-extrabold tracking-[0.35em]">
                  XM6MONTH6DOLLAR
                </p>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Terms and conditions apply. Limited time promotional rate. Call {PHONE_DISPLAY} to
                redeem. Plans are sold separately from radio hardware.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CallButton label={`Claim Voucher & Call ${PHONE_DISPLAY}`} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function MarineSection() {
  return (
    <section id="marine" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <SectionLabel>Marine Division</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Offshore radios &amp; boat plans
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Water-resistant receivers built to handle marine environments, weather-proof
                standalone hardware rigs, and dedicated sea plans optimized for deep offshore
                connection stability.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Ship, t: "Weather-proof rigs", d: "Hardware rated for salt, spray, and sun." },
                { icon: Anchor, t: "Dedicated sea plans", d: "Coverage tuned for offshore routes." },
                { icon: RefreshCw, t: "Signal stability", d: "Antenna and reception troubleshooting." },
                { icon: Headphones, t: "Marine specialists", d: "Agents trained on boat installs." },
              ].map((m, i) => (
                <Reveal key={m.t} delay={0.06 * i}>
                  <div className="glass h-full rounded-2xl p-5">
                    <m.icon className="size-5 text-primary-glow" aria-hidden />
                    <h3 className="mt-3 text-sm font-bold">{m.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.24}>
              <div className="mt-9">
                <CallButton label={`Browse Marine Radios & Plans · ${PHONE_DISPLAY}`} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <div className="glass-strong overflow-hidden rounded-[2rem] p-2">
              <img
                src={marineImg}
                alt="Luxury motor yacht at dusk fitted with modern marine communication equipment"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-[24rem] w-full rounded-[1.6rem] object-cover sm:h-[32rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
