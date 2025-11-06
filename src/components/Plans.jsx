import { Database, Cpu, Server, Check } from "lucide-react";

const plans = [
  {
    title: "Hosting condiviso — Base",
    price: "3,90€ / mese",
    features: [
      "1 sito web",
      "10 GB SSD",
      "1 database",
      "5 caselle e-mail",
      "Certificato SSL incluso",
    ],
    icon: Database,
  },
  {
    title: "VPS Cloud",
    price: "da 9,90€ / mese",
    features: [
      "CPU virtuale dedicata",
      "RAM scalabile",
      "Storage NVMe",
      "Accesso root",
      "Snapshot & backup",
    ],
    icon: Cpu,
  },
  {
    title: "Server Dedicati",
    price: "da 79€ / mese",
    features: [
      "CPU fisica dedicata",
      "RAM ECC",
      "Rete 1 Gbps",
      "IP dedicati",
      "Assistenza prioritaria",
    ],
    icon: Server,
  },
];

export default function Plans() {
  return (
    <section id="piani" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Piani e Servizi</h2>
          <p className="mt-2 text-slate-600">Scegli la soluzione giusta per il tuo progetto</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map(({ title, price, features, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <div className="text-sm text-slate-600">{price}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#account" className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                  Scegli questo piano
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
