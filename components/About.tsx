import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-800 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-cyan-300"
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I’m an Information Technology student passionate about building
          efficient, scalable systems. My focus is on web and desktop
          development using React, Next.js, and Electron. I enjoy solving
          real-world problems through clean code and simple design.
        </p>
      </div>
    </section>
  );
}
