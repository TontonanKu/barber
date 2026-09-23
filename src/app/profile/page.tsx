"use client";

import BottomNav from "@/components/BottomNav";
import { 
  Calendar, 
  User, 
  CreditCard, 
  Bell, 
  HelpCircle, 
  Info, 
  LogOut, 
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

export default function Profile() {
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: Calendar, label: "Booking Saya" },
    { icon: User, label: "Ubah Profil" },
    { icon: CreditCard, label: "Metode Pembayaran" },
    { icon: Bell, label: "Notifikasi" },
    { icon: HelpCircle, label: "Bantuan" },
    { icon: Info, label: "Tentang Aplikasi" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <main className="min-h-screen pb-24 relative flex flex-col">
      <div className="flex items-center p-4 pt-6 sticky top-0 bg-dark-bg z-40">
        <h1 className="text-xl font-bold">Profil</h1>
      </div>

      <div className="px-6 mt-4 flex-1">
        {/* User Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 p-5 rounded-2xl bg-dark-card border border-dark-card mb-6"
        >
          <div className="w-14 h-14 rounded-full bg-brand/20 flex items-center justify-center overflow-hidden shrink-0 text-brand font-bold text-xl">
            {user ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="flex-1">
            <h2 className="font-bold">{user ? user.name : "Tamu"}</h2>
            <p className="text-xs text-text-secondary">{user ? user.email : "Silakan login"}</p>
          </div>
          <ChevronRight size={20} className="text-text-secondary" />
        </motion.div>

        {/* Menu List */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-1"
        >
          {menuItems.map((item, i) => (
            <motion.button 
              variants={itemAnim}
              key={i} 
              className="flex items-center gap-4 p-4 hover:bg-dark-card rounded-xl transition-colors text-left group"
            >
              <item.icon size={20} className="text-text-secondary group-hover:text-white transition-colors" />
              <span className="flex-1 text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{item.label}</span>
              <ChevronRight size={16} className="text-text-secondary" />
            </motion.button>
          ))}
          
          {user && (
            <motion.button 
              variants={itemAnim}
              onClick={logout}
              className="flex items-center gap-4 p-4 mt-2 hover:bg-red-500/10 rounded-xl transition-colors text-left group"
            >
              <LogOut size={20} className="text-red-500" />
              <span className="flex-1 text-sm font-medium text-red-500">Keluar</span>
            </motion.button>
          )}
        </motion.div>
      </div>

      <BottomNav />
    </main>
  );
}
