import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Scissors, CheckCircle2 } from "lucide-react";

export default function BookingSuccess() {
  return (
    <main className="min-h-screen pb-28 relative flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 mt-12 mb-8">
        
        {/* Success Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full scale-150"></div>
          <CheckCircle2 size={80} className="text-brand relative z-10" />
          {/* Animated lines around */}
          <div className="absolute -top-4 -left-4 w-2 h-2 bg-brand rounded-full"></div>
          <div className="absolute -bottom-2 -right-4 w-1.5 h-1.5 bg-brand rounded-full"></div>
          <div className="absolute top-1/2 -right-8 w-2 h-2 bg-brand rounded-full"></div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Booking Berhasil!</h1>
        <p className="text-sm text-text-secondary text-center mb-10 max-w-[260px]">
          Kamu sudah berhasil memesan jadwal untuk potong rambut.
        </p>

        {/* Summary Card */}
        <div className="w-full rounded-2xl border border-dark-card bg-dark-card p-5">
          <div className="flex gap-4 items-center mb-5 pb-5 border-b border-white/5">
            <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
              <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" alt="Rizky" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Rizky</h3>
              <p className="text-xs text-text-secondary">Barber Senior</p>
              <div className="flex items-center gap-1 mt-0.5 text-[10px]">
                <span className="text-brand">★</span>
                <span className="font-semibold">4.9</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Calendar className="text-text-secondary" size={16} />
              <p className="text-xs">Selasa, 23 September 2025</p>
            </div>
            <div className="flex gap-3 items-center">
              <Clock className="text-text-secondary" size={16} />
              <p className="text-xs">13:00 - 13:30</p>
            </div>
            <div className="flex gap-3 items-center">
              <Scissors className="text-text-secondary" size={16} />
              <p className="text-xs">Haircut (Regular)</p>
            </div>
          </div>
        </div>

        {/* QR Code section */}
        <div className="w-full flex items-center gap-4 mt-6">
          <div className="bg-white p-2 rounded-xl">
            {/* Fake QR code SVG */}
            <svg width="60" height="60" viewBox="0 0 100 100">
              <rect width="100" height="100" fill="white"/>
              <path d="M10,10 h30 v30 h-30 z M15,15 h20 v20 h-20 z" fill="black"/>
              <path d="M60,10 h30 v30 h-30 z M65,15 h20 v20 h-20 z" fill="black"/>
              <path d="M10,60 h30 v30 h-30 z M15,65 h20 v20 h-20 z" fill="black"/>
              <rect x="20" y="20" width="10" height="10" fill="black"/>
              <rect x="70" y="20" width="10" height="10" fill="black"/>
              <rect x="20" y="70" width="10" height="10" fill="black"/>
              
              <rect x="50" y="10" width="5" height="10" fill="black"/>
              <rect x="50" y="30" width="10" height="10" fill="black"/>
              <rect x="10" y="45" width="20" height="5" fill="black"/>
              <rect x="35" y="45" width="25" height="5" fill="black"/>
              <rect x="45" y="55" width="15" height="15" fill="black"/>
              <rect x="65" y="45" width="10" height="15" fill="black"/>
              <rect x="85" y="45" width="5" height="30" fill="black"/>
              <rect x="75" y="75" width="15" height="15" fill="black"/>
              <rect x="55" y="75" width="10" height="15" fill="black"/>
              <rect x="45" y="80" width="5" height="10" fill="black"/>
            </svg>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed max-w-[150px]">
            Tunjukkan QR Code ini saat tiba di barber shop.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-[480px] p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent">
        <Link 
          href="/home"
          className="block w-full bg-brand text-black font-semibold py-4 rounded-full text-center hover:bg-brand-light transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
