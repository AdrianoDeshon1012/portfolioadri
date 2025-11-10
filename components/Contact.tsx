import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">Contact Me</h2>
        <p className="text-gray-400 mb-8">
          Feel free to reach out if you’d like to collaborate or just say hi!
        </p>

        {/* Tombol Email */}
        <a
          href="mailto:adrianodeshon25@gmail.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-700/40 transition-all hover:scale-105 mb-10"
        >
          Send Email
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Instagram */}
          <a
            href="https://instagram.com/adrianodeshon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-3xl transition-transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/adrianodeshon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-3xl transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AdrianoDeshon1012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-3xl transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
