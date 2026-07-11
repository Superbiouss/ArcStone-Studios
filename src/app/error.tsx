"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8">
      <span
        className="text-[clamp(4rem,12vw,10rem)] font-bold text-muted leading-none tracking-tighter select-none"
        aria-hidden="true"
      >
        OOPS
      </span>
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mt-4">
        SOMETHING WENT <span className="text-accent">WRONG</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-lg text-center leading-tight">
        An unexpected error occurred. Our team has been notified.
      </p>
      <div className="mt-8 flex gap-4">
        <Button variant="primary" size="lg" onClick={reset}>
          TRY AGAIN
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => (window.location.href = "/")}
        >
          BACK TO HOME
        </Button>
      </div>
    </main>
  );
}
