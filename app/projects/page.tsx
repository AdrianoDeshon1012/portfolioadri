import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Stockflow",
      desc: "Sistem Manajemen Stok berbasis Electron dan MongoDB.",
      link: "https://github.com/yourusername/stockflow"
    },
    {
      title: "Online Fashion Store",
      desc: "Website e-commerce fashion dengan React dan Node.js.",
      link: "https://github.com/yourusername/fashionstore"
    }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}