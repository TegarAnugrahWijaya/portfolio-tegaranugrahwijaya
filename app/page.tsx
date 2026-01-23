"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { Linkedin, Instagram, Github, MessageCircle, Mail, Award, FileText, MapPin, ExternalLink } from "lucide-react"

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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certs", href: "#certifications" },
    { name: "Exp", href: "#experience" },
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
    <main className="relative bg-[#05050c] text-white overflow-hidden selection:bg-purple-500/30 font-sans">
      
      {/* ===== NAVBAR ===== */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-5 left-1/2 z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-3 flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold shadow-2xl w-[92%] md:w-auto max-w-fit justify-center"
      >
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-purple-400 transition-colors uppercase tracking-widest">
            {link.name}
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="flex justify-center order-first md:order-last"
          >
            <div className="relative w-44 h-44 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/20">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#05050c] border-2 border-[#05050c]">
                <Image src="/fotoprofile.png" alt="Tegar" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInVariant} className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-8 h-[1px] bg-purple-500"></span>
               <span className="text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Available for work</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Tegar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Anugrah</span><br className="hidden md:block" /> Wijaya
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Network Engineer & IT Support yang fokus pada pembangunan infrastruktur jaringan handal dan efisien.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-8 py-3 md:px-10 md:py-4 rounded-xl bg-purple-600 font-bold shadow-lg shadow-purple-600/20 active:scale-95 transition-all text-sm flex items-center gap-2">
                Contact Me
              </a>
              <a href="/cv.pdf" target="_blank" className="px-8 py-3 md:px-10 md:py-4 rounded-xl border border-white/10 bg-white/5 font-bold active:scale-95 transition-all text-sm flex items-center gap-2 hover:bg-white/10">
                <FileText size={18} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative z-10 py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400">About Me</h2>
          <p className="text-gray-300 text-base md:text-xl leading-relaxed">
            Mahasiswa Informatika dan Teknisi Jaringan bersertifikat MTCNA dengan pengalaman praktis dalam troubleshooting hardware, instalasi jaringan Fiber Optic, dan konfigurasi CCTV. Memiliki latar belakang pendidikan vokasi (SMK) Teknik Komputer dan Jaringan yang kuat serta pengalaman kerja sebagai teknisi lapangan. Terampil dalam diagnosa kerusakan komputer dan manajemen jaringan dasar, serta siap berkontribusi dalam tim IT support.
          </p>
        </motion.div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-widest text-center md:text-left">Technical Skills</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <motion.div key={skill} variants={fadeInVariant} className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10 flex items-center justify-center text-center font-bold text-sm md:text-base transition-all hover:bg-white/10 hover:border-purple-500/50">
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CERTIFICATIONS SECTION ===== */}
      <section id="certifications" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-widest text-center md:text-left">Certifications</h2>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
          className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-6 max-w-2xl hover:border-purple-500/30 transition-all group"
        >
          <a href="/cert-mtcna.jpg" target="_blank" className="relative block overflow-hidden rounded-xl border border-white/10 mb-6 cursor-zoom-in group/cert">
            <img 
              src="/cert-mtcna.jpg" 
              alt="MTCNA Certificate"
              className="w-full h-auto block group-hover/cert:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-purple-600/0 group-hover/cert:bg-purple-600/5 transition-colors flex items-center justify-center opacity-0 group-hover/cert:opacity-100">
               <div className="bg-black/60 p-3 rounded-full backdrop-blur-md border border-white/20">
                 <ExternalLink size={20} />
               </div>
            </div>
          </a>
          <div className="px-2">
            <div className="flex items-center gap-3 mb-2">
              <Award className="text-purple-500" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">MikroTik Certified Network Associate</h3>
            </div>
            <p className="text-purple-400 font-medium ">Issued by MikroTik • MikroTik Academy</p>
          </div>
        </motion.div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-widest">Experience</h2>
        <div className="grid gap-6 md:gap-8">
          <ExperienceCard 
            title="Teknisi Komputer" company="Brother In Network" period="2023 – 2025"
            points={["Troubleshooting PC & Laptop", "Instalasi OS", "Hardware Maintenance"]}
            images={["/exp1-1.jpg", "/exp1-2.jpg", "/exp1-3.jpg"]}
          />
          <ExperienceCard 
            title="Teknisi Lapangan" company="PT. Lintas Jaringan Nusantara" period="2024"
            points={["Instalasi Fiber Optic", "Konfigurasi CCTV", "Troubleshoot Jaringan"]}
            images={["/exp2-1.jpg", "/exp2-2.jpg", "/exp2-3.jpg"]}
          />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Let's Connect</h2>
            <div className="flex justify-center md:justify-start gap-4 mb-10">
              {socialMedia.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-purple-600 hover:scale-110 shadow-xl">
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-3 text-purple-400 font-bold bg-purple-500/10 px-6 py-4 rounded-xl border border-purple-500/20 text-sm md:text-base">
                <Mail size={18} /> tegaranw@gmail.com
              </div>
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
        <div className="max-w-6xl mx-auto">
          <p className="text-purple-400 font-bold tracking-[0.2em] uppercase mb-4 text-[10px] md:text-xs italic italic">
            "Connecting the dots, packet by packet."
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] mb-8">
            <MapPin size={12} /> Jakarta, Indonesia
          </div>
          <div className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Tegar Anugrah Wijaya
          </div>
        </div>
      </footer>
    </main>
  )
}

function ExperienceCard({ title, company, period, points, images }: { title: string, company: string, period: string, points: string[], images: string[] }) {
  return (
    <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-6 text-center md:text-left">
        <div>
          <h3 className="text-xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">{title}</h3>
          <p className="text-purple-400 text-sm md:text-lg font-medium">{company}</p>
        </div>
        <span className="text-[10px] md:text-xs font-mono bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-fit mx-auto md:mx-0">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {points.map((pt, i) => (
          <li key={i} className="text-gray-400 text-sm md:text-lg flex gap-3 items-center justify-center md:justify-start text-center md:text-left">
            <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0 hidden md:block" /> {pt}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 group/img">
            <Image src={img} alt={`${title} doc ${index}`} fill className="object-cover group-hover/img:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  )
}