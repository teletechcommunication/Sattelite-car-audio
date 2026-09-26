import { Phone, Radio, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "./primitives";

const SESSION_KEY = "ix-support-call-prompt-seen";

export function CallPrompt() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setOpen(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    dialogRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="call-prompt-title"
        aria-describedby="call-prompt-description"
        tabIndex={-1}
        className="relative w-full max-w-md overflow-hidden rounded-lg border border-primary/30 bg-background p-6 shadow-elevated outline-none"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-primary)]" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close call prompt"
        >
          <X className="size-4" aria-hidden />
        </button>
        <div className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Radio className="size-7" aria-hidden />
        </div>
        <p className="mt-5 text-xs font-bold tracking-[0.18em] text-primary uppercase">
          Satellite Car Audio
        </p>
        <h2
          id="call-prompt-title"
          className="mt-2 max-w-sm font-display text-3xl font-bold text-foreground"
        >
          Explore a new connection.
        </h2>
        <p
          id="call-prompt-description"
          className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground"
        >
          You do not pay Satellite Car Audio directly. If an eligible new connection is completed,
          we may receive a commission from the third party that fulfills it.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-7 flex w-full items-center justify-between rounded-lg bg-[image:var(--gradient-primary)] px-5 py-4 text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]"
          aria-label={`Call Satellite Car Audio at ${PHONE_DISPLAY}`}
        >
          <span className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-primary-foreground/15">
              <Phone className="size-5" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold tracking-wide text-primary-foreground/75 uppercase">
                Explore options
              </span>
              <span className="mt-0.5 block font-display text-2xl font-extrabold">
                {PHONE_DISPLAY}
              </span>
            </span>
          </span>
          <ShieldCheck className="size-5" aria-hidden />
        </a>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          No direct customer charge from Satellite Car Audio
        </p>
      </section>
    </div>
  );
}
