import { Rocket, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500 text-slate-900">
              <Rocket className="h-5 w-5" />
            </span>
            <span>NOS Hosting</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#piani" className="hover:text-slate-900">Piani</a>
            <a href="#perche" className="hover:text-slate-900">Perché noi</a>
            <a href="#contatti" className="hover:text-slate-900">Contatti</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#account" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
              <User className="h-4 w-4" />
              Accedi
            </a>
            <a href="#piani" className="hidden sm:inline-flex rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400">
              Inizia ora
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
