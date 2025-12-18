
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300 backdrop-blur-md bg-[#0f0f0f]/50 border-b border-white/5">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#ff4d1c] rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,77,28,0.3)]">
                <Icon icon="lucide:anchor" width="20" />
            </div>
            <span className="font-bold tracking-widest text-sm uppercase text-white">Unique Agents</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            <Link href="#calculator" className="hover:text-white transition-colors">Rate</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#about" className="hover:text-white transition-colors">Company</Link>
            <Link href="#gallery" className="hover:text-white transition-colors">Projects</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-xs font-semibold text-white hover:text-[#ff4d1c] transition-colors">Sign In</Link>
            <Link href="#contact" className="bg-white hover:bg-neutral-200 text-black text-[11px] font-bold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all transform hover:scale-105">
                Get Quote
            </Link>
        </div>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
            <Icon icon="lucide:menu" width="24" />
        </button>
    </header>
  );
}