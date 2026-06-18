import { Amp } from "./shared";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] hidden h-[68px] items-center justify-between border-b border-[#e0e0e0] bg-white px-[52px] md:flex print:hidden">
      <div className="flex items-center gap-3.5">
        <img alt="Concilio Sarralde" src="./assets/logo-black.png" className="h-[32px]" />
        <div className="text-[15px] font-bold tracking-[2.5px] uppercase text-dark">
          Concilio <Amp /> Sarralde
        </div>
      </div>
      <div className="hidden md:flex gap-8">
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#clientes">Clientes</a>
        <a href="#global">Global</a>
        <a href="#valores">Valores</a>
      </div>
    </nav>
  );
}
