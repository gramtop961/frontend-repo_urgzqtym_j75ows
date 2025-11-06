import { ShieldCheck, Headphones, ArrowUpRight } from "lucide-react";

const points = [
  {
    title: "Prestazioni reali",
    desc: "Infrastruttura su SSD/NVMe, database veloci e risorse dedicate nei piani superiori.",
    icon: ArrowUpRight,
  },
  {
    title: "Semplicità",
    desc: "Dal dominio al sito online senza complicazioni: pannello intuitivo e attivazione rapida.",
    icon: ShieldCheck,
  },
  {
    title: "Supporto italiano 24/7",
    desc: "Siamo qui quando serve: assistenza continua via ticket, chat e telefono.",
    icon: Headphones,
  },
];

export default function WhyUs() {
  return (
    <section id="perche" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Perché scegliere NOS Hosting</h2>
          <p className="mt-2 text-slate-600">Più di un semplice hosting</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {points.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
