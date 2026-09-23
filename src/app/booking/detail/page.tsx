"use client";

import TopBar from "@/components/TopBar";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Calendar, Clock, Scissors } from "lucide-react";

function BookingDetailContent() {
  const searchParams = useSearchParams();
  const barberId = searchParams.get("barber") || "rizky";
  
  // Mock data
  const barbers: Record<string, any> = {
    rizky: { name: "Rizky", role: "Barber Senior", rating: 4.9, img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" },
    dika: { name: "Dika", role: "Barber", rating: 4.7, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    fajar: { name: "Fajar", role: "Barber", rating: 4.8, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
  };
  
  const barber = barbers[barberId] || barbers.rizky;
  const date = searchParams.get("date") || "23";
  const time = searchParams.get("time") || "13:00";
  
  // Calculate end time
  const [hours, minutes] = time.split(":").map(Number);
  const endMinutes = minutes + 30;
  const endHours = hours + Math.floor(endMinutes / 60);
  const endTime = `${endHours.toString().padStart(2, '0')}:${(endMinutes % 60).toString().padStart(2, '0')}`;

  return (
    <main className="min-h-screen pb-28 relative flex flex-col">
      <TopBar title="Detail Booking" />
      
      <div className="px-6 flex flex-col gap-4 mt-2">
        {/* Barber Card */}
        <div className="flex gap-4 p-4 rounded-2xl border border-dark-card bg-dark-card items-center">
          <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
            <Image src={barber.img} alt={barber.name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold">{barber.name}</h3>
            <p className="text-xs text-text-secondary">{barber.role}</p>
            <div className="flex items-center gap-1 mt-1 text-xs">
              <span className="text-brand">★</span>
              <span className="font-semibold">{barber.rating}</span>
            </div>
          </div>
        </div>

        {/* Details Card */}
        <div className="rounded-2xl border border-dark-card bg-dark-card p-5 mt-2 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Calendar className="text-text-secondary mt-0.5" size={20} />
              <div>
                <p className="text-xs text-text-secondary mb-1">Tanggal</p>
                <p className="text-sm font-medium">Selasa, {date} September 2025</p>
              </div>
            </div>
            <Link href="/booking/datetime" className="text-xs text-text-secondary">Ubah</Link>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Clock className="text-text-secondary mt-0.5" size={20} />
              <div>
                <p className="text-xs text-text-secondary mb-1">Waktu</p>
                <p className="text-sm font-medium">{time} - {endTime}</p>
              </div>
            </div>
            <Link href="/booking/datetime" className="text-xs text-text-secondary">Ubah</Link>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Scissors className="text-text-secondary mt-0.5" size={20} />
              <div>
                <p className="text-xs text-text-secondary mb-1">Layanan</p>
                <p className="text-sm font-medium">Haircut (Regular)</p>
              </div>
            </div>
            <button className="text-xs text-text-secondary">Ubah</button>
          </div>
        </div>

        {/* Total Price */}
        <div className="rounded-2xl border border-dark-card bg-dark-card p-5 mt-2 flex justify-between items-center">
          <div>
            <p className="text-sm font-bold">Total</p>
            <p className="text-[10px] text-text-secondary">Durasi estimasi 30 menit</p>
          </div>
          <p className="font-bold">Rp 50.000</p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-[480px] p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent">
        <Link 
          href="/booking/success"
          className="block w-full bg-brand text-black font-semibold py-4 rounded-full text-center hover:bg-brand-light transition-colors"
        >
          Konfirmasi Booking
        </Link>
      </div>
    </main>
  );
}

export default function BookingDetail() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-bg"></div>}>
      <BookingDetailContent />
    </Suspense>
  );
}
