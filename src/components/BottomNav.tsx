"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Booking", href: "/booking/barber", icon: Calendar },
    { name: "Riwayat", href: "/bookings", icon: Clock },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute bottom-0 w-full bg-dark-bg/90 backdrop-blur-md border-t border-dark-card py-3 px-6 z-50"
    >
      <div className="flex justify-between items-center max-w-[400px] mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            pathname === item.href || 
            (item.name === "Booking" && pathname.startsWith("/booking/"));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 relative ${
                isActive ? "text-brand" : "text-text-secondary hover:text-white"
              } transition-colors`}
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={isActive ? { y: -2 } : { y: 0 }}
              >
                <Icon size={24} className={isActive ? "fill-brand/20" : ""} />
              </motion.div>
              <span className="text-[10px] font-medium">{item.name}</span>
              
              {/* Active Indicator Line */}
              {isActive && (
                <motion.div 
                  layoutId="bottomNavIndicator"
                  className="absolute -top-3 w-8 h-1 bg-brand rounded-full shadow-[0_0_8px_#E5B581]" 
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
