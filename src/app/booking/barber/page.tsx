"use client";

import TopBar from "@/components/TopBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const barbers = [
  { 
    id: "rizky",
    name: "Rizky", 
    role: "Barber Senior", 
    rating: 4.9,
    reviews: "120+",
    desc: "Spesialis fade, undercut, dan classic cut. Teliti dan berpengalaman.",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" 
  },
  { 
    id: "dika",
    name: "Dika", 
    role: "Barber", 
    rating: 4.7, 
    reviews: "85+",
    desc: "Cocok untuk gaya modern, textured cut, dan freestyle.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
  },
  { 
    id: "fajar",
    name: "Fajar", 
    role: "Barber", 
    rating: 4.8, 
    reviews: "102+",
    desc: "Ahli dalam crop, buzz cut, dan hairstyle simpel.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" 
  },
];

export default function SelectBarber() {
  const [selected, setSelected] = useState<string>("rizky");

  return (
    <main className="min-h-screen pb-24 relative flex flex-col">
      <TopBar title="Pilih Tukang Pangkas" />
      
      <div className="px-6 flex-1 flex flex-col gap-4 mt-2">
        {barbers.map((barber) => {
          const isSelected = selected === barber.id;
          return (
            <div 
              key={barber.id}
              onClick={() => setSelected(barber.id)}
              className={`flex gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                isSelected ? "border-brand bg-brand/5" : "border-dark-card bg-dark-card"
              }`}
            >
              <div className="w-20 h-24 rounded-xl overflow-hidden relative shrink-0">
                <Image src={barber.img} alt={barber.name} fill className="object-cover" />
              </div>
              <div className="flex-1 py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{barber.name}</h3>
                    <p className="text-xs text-text-secondary">{barber.role}</p>
                  </div>
                  {/* Radio button */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-brand" : "border-text-secondary"
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 bg-brand rounded-full" />}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mt-2 text-xs">
                  <span className="text-brand">★</span>
                  <span className="font-semibold">{barber.rating}</span>
                  <span className="text-text-secondary">({barber.reviews} ulasan)</span>
                </div>
                
                <p className="text-[10px] text-text-secondary mt-2 leading-relaxed">
                  {barber.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent">
        <Link 
          href={`/booking/datetime?barber=${selected}`}
          className="block w-full bg-brand text-black font-semibold py-4 rounded-full text-center hover:bg-brand-light transition-colors"
        >
          Lanjut
        </Link>
      </div>
    </main>
  );
}
