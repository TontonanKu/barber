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
import Image from "next/image";

export default function Profile() {
  const menuItems = [
    { icon: Calendar, label: "Booking Saya" },
    { icon: User, label: "Ubah Profil" },
    { icon: CreditCard, label: "Metode Pembayaran" },
    { icon: Bell, label: "Notifikasi" },
    { icon: HelpCircle, label: "Bantuan" },
    { icon: Info, label: "Tentang Aplikasi" },
  ];

  return (
    <main className="min-h-screen pb-24 relative flex flex-col">
      <div className="flex items-center p-4 pt-6 sticky top-0 bg-dark-bg z-40">
        <h1 className="text-xl font-bold">Profil</h1>
      </div>

      <div className="px-6 mt-4 flex-1">
        {/* User Info */}
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-dark-card border border-dark-card mb-6">
          <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden shrink-0">
            <User size={30} className="text-gray-400 mt-2" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold">Budi Santoso</h2>
            <p className="text-xs text-text-secondary">budi@email.com</p>
          </div>
          <ChevronRight size={20} className="text-text-secondary" />
        </div>

        {/* Menu List */}
        <div className="flex flex-col gap-1">
          {menuItems.map((item, i) => (
            <button key={i} className="flex items-center gap-4 p-4 hover:bg-dark-card rounded-xl transition-colors text-left group">
              <item.icon size={20} className="text-text-secondary group-hover:text-white transition-colors" />
              <span className="flex-1 text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{item.label}</span>
              <ChevronRight size={16} className="text-text-secondary" />
            </button>
          ))}
          
          <button className="flex items-center gap-4 p-4 mt-2 hover:bg-red-500/10 rounded-xl transition-colors text-left group">
            <LogOut size={20} className="text-red-500" />
            <span className="flex-1 text-sm font-medium text-red-500">Keluar</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
