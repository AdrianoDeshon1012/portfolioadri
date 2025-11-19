import { motion } from "framer-motion";

const works = [
  {
    img: "/project1.png",
    title: "StockFlow App",
    desc: "Inventory system using Electron + MongoDB",
  },
  {
    img: "/project2.png",
    title: "Malika Fashion Store",
    desc: "Fashion & E-commerce website built with React",
  },
  {
    img: "/project3.png",
    title: "Colorfy",
    desc: "Color palletes templates website built with Next.js",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-cyan-300"
        >
          Portfolio
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform border border-slate-700"
              whileHover={{ y: -5 }}
            >
              <img src={w.img} alt={w.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {w.title}
                </h3>
                <p className="text-gray-300 text-sm">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
