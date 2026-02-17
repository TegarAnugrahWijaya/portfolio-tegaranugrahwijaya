"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { 
  Linkedin, 
  Instagram, 
  Github, 
  MessageCircle, 
  Mail, 
  Award, 
  FileText, 
  MapPin, 
  ExternalLink 
} from "lucide-react"

// ===== ANIMATION VARIANTS =====
const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1, 
    transition: { staggerChildren: 0.1 }
  }
}

export default function Home() {
  const { scrollY } = useScroll()
  const glowY = useTransform(scrollY, [0, 500], [0, -30])
  
  const [activeTab, setActiveTab] = useState("Home")
  const isScrollingRef = useRef(false)

  // ===== AUTO UPDATE NAVBAR ON SCROLL =====
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id === "about") setActiveTab("About");
            else if (id === "skills") setActiveTab("Portfolio");
            else if (id === "contact") setActiveTab("Contact");
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    const handleHomeScroll = () => {
      if (!isScrollingRef.current && window.scrollY < 150) setActiveTab("Home");
    };

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleHomeScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleHomeScroll);
    };
  }, []);

  const handleNavClick = (name: string) => {
    setActiveTab(name);
    isScrollingRef.current = true;
    setTimeout(() => { isScrollingRef.current = false; }, 800);
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const skills = [
    "Networking", "Mikrotik", "Fiber Optic", "CCTV", 
    "Linux", "Firewall", "IT Support", "Troubleshooting"
  ]

  const socialMedia = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/tegar-anugrah-wijaya-606922346/", color: "hover:bg-blue-600" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/tegarannn", color: "hover:bg-pink-600" },
    { icon: <MessageCircle size={18} />, href: "https://tiktok.com/@tegaranw", color: "hover:bg-slate-800" },
    { icon: <Github size={18} />, href: "https://github.com/TegarAnugrahWijayah", color: "hover:bg-gray-700" },
  ]

  return (
    <main className="relative bg-[#05050c] text-white overflow-hidden selection:bg-purple-500/30 font-sans scroll-smooth">
      
      {/* ===== NAVBAR ===== */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-5 left-1/2 z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-1 flex items-center shadow-2xl w-fit"
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => handleNavClick(link.name)}
            className={`relative px-4 py-2 transition-colors uppercase tracking-widest z-10 text-[10px] md:text-xs font-bold ${
              activeTab === link.name ? "text-white" : "text-gray-400 hover:text-purple-400"
            }`}
          >
            <span className="relative z-20">{link.name}</span>
            {activeTab === link.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-0"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
          </a>
        ))}
      </motion.nav>

      {/* ===== BACKGROUND ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: glowY }} className="absolute -top-20 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[80px] md:blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-screen flex flex-col px-6 max-w-7xl mx-auto pt-32 md:pt-0 justify-start md:justify-center items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center order-first md:order-last">
            <div className="relative w-44 h-44 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/20">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#05050c] border-2 border-[#05050c]">
                <Image src="/fotoprofile.png" alt="Tegar" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInVariant} className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
               </span>
               <span className="text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Available for work</span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Tegar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Anugrah</span><br className="hidden md:block" /> Wijaya
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Network Engineer & IT Support yang fokus pada pembangunan infrastruktur jaringan handal dan efisien.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" onClick={() => handleNavClick("Contact")} className="px-8 py-3 md:px-10 md:py-4 rounded-xl bg-purple-600 font-bold shadow-lg shadow-purple-600/20 active:scale-95 transition-all text-sm flex items-center gap-2">
                Contact Me
              </a>
              <a href="/cv.pdf" target="_blank" className="px-8 py-3 md:px-10 md:py-4 rounded-xl border border-white/10 bg-white/5 font-bold active:scale-95 transition-all text-sm flex items-center gap-2 hover:bg-white/10">
                <FileText size={18} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section id="about" className="relative z-10 py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-white/5 scroll-mt-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 order-first"> 
              <div className="relative aspect-square max-w-[280px] md:max-w-none mx-auto rounded-2xl overflow-hidden border border-white/10 group">
                <Image 
                  src="/about.jpeg" 
                  alt="Tegar About" 
                  fill 
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050c]/40 to-transparent" />
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400 text-center md:text-left">About Me</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
                Mahasiswa Informatika dan Teknisi Jaringan bersertifikat MTCNA dengan pengalaman praktis dalam troubleshooting hardware, instalasi jaringan Fiber Optic, dan konfigurasi CCTV. Memiliki latar belakang pendidikan vokasi (SMK) Teknik Komputer dan Jaringan yang kuat serta pengalaman kerja sebagai teknisi lapangan. Terampil dalam diagnosa kerusakan komputer dan manajemen jaringan dasar, serta siap berkontribusi dalam tim IT support.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                  <MapPin size={14} className="text-purple-400" />
                  <span className="text-[11px] md:text-xs font-medium text-gray-400">Jakarta, ID</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                  <Award size={14} className="text-blue-400" />
                  <span className="text-[11px] md:text-xs font-medium text-gray-400">MTCNA Certified</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative z-10 py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-widest text-center md:text-left">Technical Skills</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <motion.div 
              key={skill} 
              variants={fadeInVariant}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.15)",
                borderColor: "rgba(168, 85, 247, 0.4)"
              }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10 flex items-center justify-center text-center font-bold text-sm md:text-base transition-all hover:bg-white/10"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-white/5 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-widest text-center md:text-left">Experience</h2>
        <div className="grid gap-6 md:gap-8">
          <ExperienceCard title="Teknisi Komputer" company="Brother In Network" period="2023 – 2025" points={["Troubleshooting PC & Laptop", "Instalasi OS", "Hardware Maintenance"]} images={["/exp1-1.jpg", "/exp1-2.jpg", "/exp1-3.jpg"]} />
          <ExperienceCard title="Teknisi Lapangan" company="PT. Lintas Jaringan Nusantara" period="2024" points={["Instalasi Fiber Optic", "Konfigurasi CCTV", "Troubleshoot Jaringan"]} images={["/exp2-1.jpg", "/exp2-2.jpg", "/exp2-3.jpg"]} />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-white/[0.01] border-t border-white/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
            <div className="flex gap-4 mb-10">
              {socialMedia.map((social, index) => (
                <a key={index} href={social.href} target="_blank" className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all ${social.color} hover:scale-110 shadow-xl`}>
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 text-purple-400 font-bold bg-purple-500/10 px-6 py-4 rounded-xl border border-purple-500/20 text-sm md:text-base">
              <Mail size={18} /> tegaranw@gmail.com
            </div>
          </motion.div>
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="space-y-4 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10">
            <input className="w-full p-4 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-sm" placeholder="Your Name" />
            <textarea rows={4} className="w-full p-4 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-sm" placeholder="Message" />
            <button className="w-full py-4 rounded-xl bg-purple-600 font-bold active:scale-95 transition-all shadow-lg shadow-purple-600/20">Send Message</button>
          </motion.form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 px-6 text-center border-t border-white/5 relative z-10">
        <div className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Tegar Anugrah Wijaya
        </div>
      </footer>
    </main>
  )
}

function ExperienceCard({ title, company, period, points, images }: { title: string, company: string, period: string, points: string[], images: string[] }) {
  return (
    <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 md:mb-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">{title}</h3>
          <p className="text-purple-400 text-sm md:text-lg font-medium">{company}</p>
        </div>
        <span className="text-[10px] md:text-xs font-mono bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-fit">{period}</span>
      </div>
      <ul className="mt-4 md:mt-0 space-y-3 mb-8 flex flex-col items-center md:items-start">
        {points.map((pt, i) => (
          <li key={i} className="text-gray-400 text-sm md:text-lg flex gap-3 items-center text-center md:text-left">
            <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0 hidden md:block" /> {pt}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 group/img">
            <Image src={img} alt={`${title} doc ${index}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  )
}