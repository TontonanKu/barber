"use client";

import TopBar from "@/components/TopBar";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const dates = [
  { day: "Sen", date: "22" },
  { day: "Sel", date: "23" },
  { day: "Rab", date: "24" },
  { day: "Kam", date: "25" },
  { day: "Jum", date: "26" },
  { day: "Sab", date: "27" },
  { day: "Min", date: "28" },
];

const times = [
  "11:00", "11:30", "12:00",
  "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00",
  "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00",
  "21:30", "22:00"
];

// Let's pretend some times are unavailable
const unavailableTimes = ["11:30", "12:00", "14:30", "18:00", "19:00", "21:30", "22:00"];

function DateTimeSelector() {
  const searchParams = useSearchParams();
  const barberId = searchParams.get("barber") || "rizky";
  
  const [selectedDate, setSelectedDate] = useState("23");
  const [selectedTime, setSelectedTime] = useState("13:00");

  return (
    <main className="min-h-screen pb-28 relative flex flex-col">
      <TopBar title="Pilih Tanggal & Waktu" />
      
      <div className="px-6 mt-4">
        {/* Horizontal Dates */}
        <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
          {dates.map((d) => {
            const isSelected = selectedDate === d.date;
            return (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className={`flex flex-col items-center justify-center min-w-[60px] h-[72px] rounded-2xl border transition-all ${
                  isSelected 
                    ? "bg-brand text-black border-brand" 
                    : "bg-dark-card border-dark-card text-text-secondary hover:border-text-secondary/30"
                }`}
              >
                <span className={`text-xs ${isSelected ? "font-medium" : ""}`}>{d.day}</span>
                <span className={`text-lg font-bold mt-1 ${isSelected ? "" : "text-white"}`}>{d.date}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 mb-4">
          <h3 className="font-bold text-sm">Jam Buka <span className="font-normal text-white ml-1">11:00 - 22:00</span></h3>
        </div>

        {/* Time Grid */}
        <div className="grid grid-cols-3 gap-3">
          {times.map((t) => {
            const isUnavailable = unavailableTimes.includes(t);
            const isSelected = selectedTime === t;
            
            return (
              <button
                key={t}
                disabled={isUnavailable}
                onClick={() => setSelectedTime(t)}
                className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                  isUnavailable 
                    ? "opacity-20 border-transparent cursor-not-allowed text-text-secondary" 
                    : isSelected
                      ? "border-brand text-brand"
                      : "border-dark-card hover:border-text-secondary/30 text-text-secondary"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-[480px] p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent">
        <Link 
          href={`/booking/detail?barber=${barberId}&date=${selectedDate}&time=${selectedTime}`}
          className="block w-full bg-brand text-black font-semibold py-4 rounded-full text-center hover:bg-brand-light transition-colors shadow-[0_0_20px_rgba(229,181,129,0.2)]"
        >
          Lanjut
        </Link>
      </div>
    </main>
  );
}

export default function SelectDateTime() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-bg"></div>}>
      <DateTimeSelector />
    </Suspense>
  );
}
