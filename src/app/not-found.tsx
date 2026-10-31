import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8">
      <span
        className="text-[clamp(6rem,20vw,16rem)] font-bold text-muted leading-none tracking-tighter select-none"
        aria-hidden="true"
      >
        404
      </span>
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mt-4">
        PAGE NOT <span className="text-accent">FOUND</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-lg text-center leading-tight">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold uppercase tracking-tighter rounded-none cursor-pointer bg-accent text-accent-foreground hover:scale-105 active:scale-95 transition-transform h-20 px-12 text-lg"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
