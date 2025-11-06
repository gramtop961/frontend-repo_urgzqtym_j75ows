import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contatti" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Contattaci</h2>
          <p className="mt-2 text-slate-600">Parla con il team: siamo qui per aiutarti</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Supporto & Contatti</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-slate-900" /> Numero italiano: +39</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-900" /> support@noshosting.it</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-slate-900" /> Portale clienti & FAQ</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome</label>
                <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Messaggio</label>
              <textarea name="message" value={form.message} onChange={onChange} rows="4" className="mt-1 w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" required />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400">Invia</button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-600">Grazie! Ti risponderemo a breve.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
