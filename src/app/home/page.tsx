"use client";

import BottomNav from "@/components/BottomNav";
import { Bell, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const barbers = [
    { name: "Rizky", role: "Barber Senior", rating: 4.9, img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" },
    { name: "Dika", role: "Barber", rating: 4.7, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { name: "Fajar", role: "Barber", rating: 4.8, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen pb-24 relative">
      {/* Header with simple fade in */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center p-6 pb-2"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-black font-bold text-xs">
            TB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider">THE BARBER</span>
            <span className="text-[6px] tracking-widest text-brand uppercase">Cuts • Shaves</span>
          </div>
        </div>
        <button className="relative p-2">
          <Bell size={20} className="text-white" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-dark-bg"></span>
        </button>
      </motion.header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 space-y-6 mt-4"
      >
        {/* Hero Section */}
        <motion.div variants={itemAnim} className="relative rounded-2xl overflow-hidden h-48 bg-dark-card flex items-end p-5 shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
          
          <div className="relative z-10 w-3/4">
            <h2 className="text-2xl font-bold leading-tight mb-2">Rambut Rapi, Percaya Diri Setiap Hari.</h2>
            <p className="text-xs text-text-secondary leading-relaxed">
              Booking sekarang dan dapatkan waktu terbaik untuk tampil lebih keren.
            </p>
          </div>
        </motion.div>

        {/* Operational Hours */}
        <motion.div variants={itemAnim} className="bg-dark-card rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand/10 rounded-full text-brand">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-text-secondary">Jam Operasional</p>
              <p className="text-sm font-bold">11:00 - 22:00</p>
            </div>
          </div>
          <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
            Buka
          </div>
        </motion.div>

        {/* Barbers */}
        <motion.div variants={itemAnim}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="font-bold mb-1">Pilih Tukang Pangkas</h3>
              <p className="text-xs text-text-secondary">Tiga pilihan terbaik untuk gaya rambutmu.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {barbers.map((barber, i) => (
              <Link href="/booking/barber" key={i}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dark-card rounded-2xl p-3 flex flex-col gap-2 items-center text-center shadow-lg h-full"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-1 relative">
                    <Image src={barber.img} alt={barber.name} fill className="object-cover" />
                  </div>
                  <div className="w-full text-left mt-auto">
                    <p className="font-bold text-sm">{barber.name}</p>
                    <p className="text-[10px] text-text-secondary">{barber.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-brand text-[10px]">★</span>
                      <span className="text-xs font-semibold">{barber.rating}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <BottomNav />
    </main>
  );
}
