import { FaCode, FaDesktop, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaCode size={30} />,
      title: "Web Development",
      desc: "Building responsive, modern web apps.",
    },
    {
      icon: <FaDesktop size={30} />,
      title: "Desktop Apps",
      desc: "Creating offline apps with Electron.",
    },
    {
      icon: <FaDatabase size={30} />,
      title: "Database Design",
      desc: "Optimized structure using MongoDB.",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-800 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-cyan-300">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-slate-900 rounded-2xl border border-slate-700 shadow hover:shadow-cyan-700/30 transition-all"
            >
              <div className="text-cyan-400 mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
