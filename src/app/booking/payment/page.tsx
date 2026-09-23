"use client";

import TopBar from "@/components/TopBar";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2 } from "lucide-react";

function PaymentContent() {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    // Simulate upload process
    setTimeout(() => {
      setUploaded(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen pb-28 relative flex flex-col">
      <TopBar title="Pembayaran QRIS" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 mt-4 flex flex-col items-center"
      >
        <p className="text-text-secondary text-sm text-center mb-6">
          Silakan scan kode QRIS di bawah ini menggunakan aplikasi M-Banking atau e-Wallet Anda.
        </p>

        <div className="rounded-2xl w-full max-w-[320px] mb-8 overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Image 
            src="/qris.png" 
            alt="QRIS Kazura Store" 
            width={400} 
            height={600} 
            className="w-full h-auto block"
          />
        </div>

        {/* Total to pay */}
        <div className="bg-dark-card border border-dark-card w-full rounded-2xl p-4 flex justify-between items-center mb-6">
          <span className="text-sm text-text-secondary">Total Tagihan</span>
          <span className="font-bold text-lg text-brand">Rp 50.000</span>
        </div>

        {/* Upload Proof */}
        <div className="w-full">
          <h3 className="font-bold mb-3 text-sm">Upload Bukti Transfer</h3>
          
          {uploaded ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full bg-green-500/10 border border-green-500/30 rounded-2xl p-4 flex items-center justify-center gap-3 text-green-500"
            >
              <CheckCircle2 size={24} />
              <span className="font-medium text-sm">Bukti berhasil diunggah!</span>
            </motion.div>
          ) : (
            <button 
              onClick={handleUpload}
              className="w-full bg-dark-card border border-dashed border-text-secondary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-dark-card-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <Upload size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-white">Klik untuk upload foto</p>
                <p className="text-[10px] text-text-secondary mt-1">Format JPG, PNG (Max. 2MB)</p>
              </div>
            </button>
          )}
        </div>
      </motion.div>

      <div className="fixed bottom-0 w-full max-w-[480px] p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent">
        <Link 
          href={uploaded ? "/booking/success" : "#"}
          className={`block w-full font-semibold py-4 rounded-full text-center transition-all ${
            uploaded 
              ? "bg-brand text-black hover:bg-brand-light shadow-[0_0_20px_rgba(229,181,129,0.3)]" 
              : "bg-dark-card text-text-secondary opacity-50 cursor-not-allowed"
          }`}
        >
          Konfirmasi Pembayaran
        </Link>
      </div>
    </main>
  );
}

export default function Payment() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-bg"></div>}>
      <PaymentContent />
    </Suspense>
  );
}
