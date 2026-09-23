"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import { useState } from "react";
import { Calendar, Clock, Scissors } from "lucide-react";

export default function Bookings() {
  const [tab, setTab] = useState<"mendatang" | "riwayat">("mendatang");

  return (
    <main className="min-h-screen pb-24 relative flex flex-col">
      <div className="flex items-center p-4 pt-6 sticky top-0 bg-dark-bg z-40">
        <h1 className="text-xl font-bold">Booking Saya</h1>
      </div>

      <div className="px-6 mt-2 flex-1">
        {/* Tabs */}
        <div className="flex bg-dark-card rounded-full p-1 mb-6">
          <button 
            onClick={() => setTab("mendatang")}
            className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${
              tab === "mendatang" ? "bg-dark-bg shadow-sm" : "text-text-secondary"
            }`}
          >
            Mendatang
          </button>
          <button 
            onClick={() => setTab("riwayat")}
            className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${
              tab === "riwayat" ? "bg-dark-bg shadow-sm" : "text-text-secondary"
            }`}
          >
            Riwayat
          </button>
        </div>

        {tab === "mendatang" ? (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-dark-card bg-dark-card p-5 relative">
              <div className="absolute top-4 right-4 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-1 rounded-md text-[10px] font-medium">
                Menunggu
              </div>
              
              <div className="flex gap-4 items-center mb-4 pb-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                  <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" alt="Rizky" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Rizky</h3>
                  <p className="text-xs text-text-secondary">Barber Senior</p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
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
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Riwayat Empty or list */}
            <p className="text-center text-text-secondary text-sm mt-10">Belum ada riwayat booking.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  );
}
