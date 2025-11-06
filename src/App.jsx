import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import WhyUs from "./components/WhyUs";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <WhyUs />
        <Contacts />
        <footer id="account" className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">Chi siamo</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Siamo la tua base digitale: domini, hosting condiviso, VPS cloud e server dedicati, con supporto 24/7.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Account</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Accedi alla tua area riservata per gestire servizi, fatture e supporto.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Messaggio finale</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Che tu stia lanciando il tuo primo sito o gestendo un e‑commerce, qui trovi lo spazio giusto. Inizia oggi con NOS Hosting: tu sulla tua idea, noi sull'infrastruttura.
                </p>
              </div>
            </div>
            <div className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} NOS Hosting — Tutti i diritti riservati.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
