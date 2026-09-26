import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ShieldCheck, SignalHigh, Clock, Radio } from "lucide-react";
import heroImg from "@/assets/hero-suv-night.jpg";
import dashImg from "@/assets/dashboard-radio.jpg";
import { CallButton, PHONE_DISPLAY, Reveal } from "./primitives";

const FLOATING = [
  { icon: Radio, title: "Connection", value: "New service options", tone: "success" },
  { icon: SignalHigh, title: "Guidance", value: "Next-step help", tone: "primary" },
  { icon: CheckCircle2, title: "Your cost", value: "No Satellite Car Audio fee", tone: "success" },
  { icon: Clock, title: "Disclosure", value: "Commission funded", tone: "primary" },
] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section ref={ref} id="top" className="theme-dark relative isolate overflow-hidden">
      <motion.div style={{ y, opacity: fade }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury SUV driving on an open highway at night"
          width={1920}
          height={1088}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 night-fade" />
        <div className="absolute inset-0 bg-background/45" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-6 pb-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-8 lg:pb-32">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-primary-glow uppercase">
              <span className="size-2 rounded-full bg-success" aria-hidden />
              No direct customer charge
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              Explore satellite radio connection options,{" "}
              <span className="text-gradient">with clear next steps.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Satellite Car Audio helps people explore eligible new satellite radio connections and
              prepare for the next step. You do not pay Satellite Car Audio directly. If an eligible
              new connection is completed, we may receive a commission from the third party that
              fulfills it.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CallButton label="Explore Connection Options" />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass mt-8 inline-flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl px-5 py-4">
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                No-Cost Connection Guidance
              </span>
              <a
                href="tel:+18008789170"
                className="font-display text-2xl font-extrabold sm:text-3xl"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {["No fee from Satellite Car Audio", "Commission disclosed", "Phone guidance"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <ShieldCheck className="size-4 shrink-0 text-primary-glow" aria-hidden />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40} className="relative">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
            <img
              src={dashImg}
              alt="Car infotainment dashboard showing a satellite radio channel interface"
              width={1280}
              height={960}
              className="w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:absolute lg:-right-4 lg:-bottom-10 lg:mt-0 lg:w-[19rem] lg:grid-cols-1">
            {FLOATING.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary/70">
                  <f.icon
                    className={
                      f.tone === "success" ? "size-4 text-success" : "size-4 text-primary-glow"
                    }
                    aria-hidden
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                    {f.title}
                  </span>
                  <span className="block truncate text-sm font-semibold">{f.value}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
