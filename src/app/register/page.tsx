"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      // Simulate register then auto login
      login(email, name);
      router.push("/home");
    }
  };

  return (
    <main className="min-h-screen flex flex-col p-6 relative overflow-hidden">
      <button onClick={() => router.back()} className="absolute top-6 left-6 p-2 -ml-2 text-white z-10">
        <ArrowLeft size={24} />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center mt-12"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Buat Akun Baru</h1>
          <p className="text-text-secondary text-sm">Daftar untuk mulai memesan jadwal pangkas dengan mudah.</p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-text-secondary">Nama Lengkap</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="bg-dark-card border border-dark-card focus:border-brand rounded-xl px-4 py-3 outline-none text-sm transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-text-secondary">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="bg-dark-card border border-dark-card focus:border-brand rounded-xl px-4 py-3 outline-none text-sm transition-colors"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm text-text-secondary">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Buat kata sandi"
              className="bg-dark-card border border-dark-card focus:border-brand rounded-xl px-4 py-3 outline-none text-sm transition-colors"
              required
            />
          </div>

          <motion.button 
            type="submit" 
            className="w-full bg-brand text-black font-semibold py-4 rounded-full mt-6"
          >
            Daftar
          </motion.button>
        </form>

        <div className="mt-8 text-center text-sm text-text-secondary">
          Sudah punya akun? <Link href="/login" className="text-brand font-semibold hover:underline">Masuk di sini</Link>
        </div>
      </motion.div>
    </main>
  );
}
