"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Clock, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Booking", href: "/booking/barber", icon: Calendar },
    { name: "Riwayat", href: "/bookings", icon: Clock },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="absolute bottom-0 w-full bg-dark-bg border-t border-dark-card py-3 px-6 z-50">
      <div className="flex justify-between items-center max-w-[400px] mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Determine if active. For booking, we might match multiple paths.
          const isActive = 
            pathname === item.href || 
            (item.name === "Booking" && pathname.startsWith("/booking/"));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${
                isActive ? "text-brand" : "text-text-secondary"
              }`}
            >
              <Icon size={24} className={isActive ? "fill-brand/20" : ""} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
