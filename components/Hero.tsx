"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <motion.img
        src="/profile.png"
        alt="Abalon"
        className="w-80 h-80 rounded-full mb-6 shadow-lg object-cover border-4 border-cyan-400/60"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-3 text-cyan-300"
      >
        Adriano Deshon
      </motion.h1>

      <h2 className="text-xl text-gray-400 font-semibold mb-6">
        IT Student & Web Developer
      </h2>

      <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
        A passionate IT student who loves creating interactive and efficient web experiences.
      </p>

      {/* Tombol Download CV */}
      <motion.a
        href="/AdrianoDeshon_CV.pdf"
        download
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px rgba(34,211,238,0.8)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
      >
        <FaDownload className="text-lg" />
        Download CV
      </motion.a>
    </section>
  );
}
