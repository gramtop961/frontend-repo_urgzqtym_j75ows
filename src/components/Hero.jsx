import { Rocket, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            <span>Uptime garantito 99,9% • Supporto 24/7</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Hosting veloce e sicuro per il tuo sito web
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Prestazioni eccezionali, infrastruttura affidabile e assistenza italiana.
            Porta online il tuo progetto in pochi minuti.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#piani"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Rocket className="h-4 w-4" />
              Vedi i piani
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Parla con noi
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
            <div className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400" />
              <span>Prestazioni reali su SSD</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400" />
              <span>Scalabilità da shared a VPS e dedicati</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
