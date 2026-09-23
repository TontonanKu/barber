"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TopBar({ title, onBack }: { title: string; onBack?: () => void }) {
  const router = useRouter();

  return (
    <div className="flex items-center p-4 pt-6 sticky top-0 bg-dark-bg z-40">
      <button 
        onClick={onBack || (() => router.back())}
        className="p-2 -ml-2 mr-2 text-text-primary"
      >
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
}
