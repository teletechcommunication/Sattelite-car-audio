import { motion } from "framer-motion";
import {
  Anchor,
  BadgePercent,
  CreditCard,
  Headphones,
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
import { CallButton, Counter, PHONE_DISPLAY, PHONE_HREF, Reveal, SectionLabel } from "./primitives";

const SERVICES = [
  {
    icon: Power,
    title: "New Connection Guidance",
    body: "Talk through whether a new satellite radio connection may fit your setup.",
  },
  {
    icon: RefreshCw,
    title: "Plan Exploration",
    body: "Understand the questions to ask when comparing new service options.",
  },
  {
    icon: CreditCard,
    title: "Eligibility Preparation",
    body: "Prepare the details a third-party provider may need for a new connection.",
  },
  {
    icon: BadgePercent,
    title: "No Direct Fee",
    body: "Satellite Car Audio does not charge customers directly for this connection guidance.",
  },
  {
    icon: Wrench,
    title: "Equipment Readiness",
    body: "Review your receiver, vehicle, and installation details before you connect.",
  },
  {
    icon: Settings2,
    title: "Next-Step Clarity",
    body: "Understand what a new connection may require before speaking with a provider.",
  },
  {
    icon: Anchor,
    title: "Marine Setups",
    body: "Discuss new connection considerations for compatible marine equipment.",
  },
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
                  New Connections
                </p>
                <p className="mt-1 font-display text-lg font-extrabold">No direct fee</p>
                <a href={PHONE_HREF} className="mt-1 block text-sm font-semibold text-primary-glow">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>Connection Guidance</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Start a new connection with clarity
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Satellite Car Audio helps customers explore eligible new satellite radio
                connections. You do not pay Satellite Car Audio directly. If an eligible new
                connection is completed, Satellite Car Audio may receive a commission from the third
                party that fulfills it. To discuss your options, call{" "}
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
          <SectionLabel>Considering a new connection?</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Understand your connection options</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}></Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-2xl text-muted-foreground">
            Tell us about your vehicle, receiver, or listening needs. We can help you prepare for a
            potential new connection with a third-party provider. Satellite Car Audio does not
            charge you directly for this guidance.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="glass-strong mx-auto mt-10 max-w-2xl rounded-[2rem] px-6 py-9 sm:px-12">
            <p className="text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
              No-Cost Connection Line
            </p>
            <a
              href={PHONE_HREF}
              className="mt-3 block font-display text-4xl font-extrabold sm:text-6xl"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-sm text-primary-glow">
              No direct fee · Commission disclosed if a connection is completed
            </p>
            <div className="mt-7">
              <CallButton label="Call Satellite Car Audio" />
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
                <SectionLabel>New Connection Phone Number</SectionLabel>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  Talk through a potential new connection
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Call <span className="font-semibold text-foreground">{PHONE_DISPLAY}</span> to
                  explore a potential new satellite radio connection. You are not charged directly
                  by Satellite Car Audio. If a connection is completed, Satellite Car Audio may
                  receive a commission from the third party that fulfills it.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <CallButton label="Explore Connection Options" />
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
                    <span
                      className="size-2 animate-pulse-ring rounded-full bg-success"
                      aria-hidden
                    />
                    No direct customer fee
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
    <section id="before-you-call" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-surface p-1 shadow-glow">
            <div className="rounded-[2.2rem] bg-[radial-gradient(120%_120%_at_50%_0%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_60%)] px-6 py-12 text-center sm:px-12">
              <motion.span
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2.6, repeat: Infinity }}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-primary-glow uppercase"
              >
                Clear compensation disclosure
              </motion.span>
              <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                How Satellite Car Audio is paid
              </h2>
              <p className="mt-3 text-muted-foreground">
                Satellite Car Audio does not charge customers directly. We may receive a commission
                from a third party when an eligible new connection is completed after our referral.
              </p>

              <p className="mt-5 text-xs text-muted-foreground">
                The third-party provider determines pricing, eligibility, promotions, connection
                approval, and the services it offers. Existing-account questions should be directed
                to the applicable provider.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CallButton label={`Call Satellite Car Audio · ${PHONE_DISPLAY}`} />
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
                Marine connection considerations
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Explore potential new connection considerations for compatible satellite radio
                equipment used in boats and marine environments. No direct fee is charged by IX Car
                Audio for this guidance.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Ship,
                  t: "Equipment details",
                  d: "Keep the make, model, and installation details ready for a new connection.",
                },
                {
                  icon: Anchor,
                  t: "Plan questions",
                  d: "The third-party provider determines plans, coverage, and eligibility.",
                },
                {
                  icon: RefreshCw,
                  t: "Connection readiness",
                  d: "Review the installation and receiver details before you connect.",
                },
                {
                  icon: Headphones,
                  t: "Compensation disclosure",
                  d: "Satellite Car Audio may receive a commission after an eligible new connection.",
                },
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
                <CallButton label={`Explore Marine Options · ${PHONE_DISPLAY}`} />
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
