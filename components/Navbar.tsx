"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 z-50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="font-bold text-2xl text-cyan-400">
          Adriano<span className="text-gray-300"> Deshon</span>
        </h1>
        <ul className="flex space-x-6 text-gray-300 font-medium">
          {["Home", "About", "Portfolio", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
