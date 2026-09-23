import Link from "next/link";
import Image from "next/image";

export default function Splash() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop')" }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />

      <div className="z-10 flex flex-col items-center mt-32">
        {/* Placeholder for Logo */}
        <div className="mb-4">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            <path d="M7 2h10M7 22h10" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold tracking-widest text-white mb-2">THE BARBER</h1>
        <p className="text-[10px] tracking-[0.3em] text-brand uppercase font-medium">Cuts • Shaves • Good Vibes</p>
      </div>

      <div className="z-10 w-full px-6 pb-12 flex flex-col items-center gap-4">
        <Link 
          href="/home" 
          className="w-full bg-brand text-black font-semibold py-4 rounded-full text-center hover:bg-brand-light transition-colors"
        >
          Mulai Booking
        </Link>
        <Link href="/login" className="text-sm text-text-secondary hover:text-white transition-colors">
          Login / Daftar
        </Link>
      </div>
    </main>
  );
}
