import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Adriano | Portfolio",
  description: "Personal portfolio built with Next.js + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
