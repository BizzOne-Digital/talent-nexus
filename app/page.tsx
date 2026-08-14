"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.38 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.59 2.81.72a2 2 0 0 1 1.72 2.05z" />
  </svg>
);
const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const UploadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.55 14.24 3.55c-2.4 0-4.04 1.46-4.04 4.15V9.9H7.5V13h2.7v8h3.3z" />
  </svg>
);
const GlobeSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const BriefcaseSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const TargetSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
  </svg>
);
const HandshakeSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M8 12l3 3 6-6" /><rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
  </svg>
);

function Reveal({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`tn-reveal ${visible ? "tn-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

const careerFields = [
  "Digital Marketing", "Social Media Marketing", "Meta Ads", "Google Ads",
  "SEO", "Content Marketing", "Sales", "Business Development",
  "Appointment Setting", "Graphic Design", "Video Editing", "Web Development",
  "CRM & Operations", "Virtual Assistance",
];

const processSteps = [
  { step: "01", title: "Explore Opportunities", desc: "Browse open roles and find positions that match your skills in Marketing, Sales, Creative, or Digital." },
  { step: "02", title: "Apply", desc: "Submit your application along with your professional details and portfolio, if applicable." },
  { step: "03", title: "Get Screened", desc: "Our team reviews your skills, experience, and communication ability to understand your strengths." },
  { step: "04", title: "Get Matched", desc: "We connect suitable candidates with the right international companies based on role fit." },
  { step: "05", title: "Get Hired", desc: "Interview directly with the hiring company and start your international remote career." },
];

const openRoles = [
  { title: "Meta Ads Specialist", dept: "Digital Marketing", type: "Full-time", desc: "Manage and optimize Meta ad campaigns for international clients, focused on lead generation and ROAS.", reqs: ["1+ years running Meta Ads", "Strong analytical skills", "Fluent written English"] },
  { title: "Social Media Manager", dept: "Marketing", type: "Full-time", desc: "Plan and manage social content calendars and community engagement for US and Canadian brands.", reqs: ["Experience managing brand socials", "Content planning skills", "Comfortable with reporting"] },
  { title: "Sales Representative", dept: "Sales", type: "Full-time", desc: "Handle outbound and inbound sales conversations for international clients across Marketing and SaaS.", reqs: ["Prior sales or closing experience", "Confident verbal communication", "CRM familiarity"] },
  { title: "Appointment Setter", dept: "Sales", type: "Full-time / Part-time", desc: "Book qualified appointments for international sales teams through outreach and follow-up.", reqs: ["Comfortable with cold outreach", "Clear spoken English", "Consistent and organized"] },
  { title: "SEO Specialist", dept: "Digital Marketing", type: "Full-time", desc: "Run on-page and off-page SEO strategy for client websites targeting US and Canadian search markets.", reqs: ["Experience with SEO tools", "Understanding of technical SEO", "Content collaboration skills"] },
  { title: "Content Writer", dept: "Creative", type: "Contract", desc: "Write blog, ad, and website copy for international marketing and sales campaigns.", reqs: ["Strong written English", "Portfolio of writing samples", "Comfortable with feedback cycles"] },
];

const whyPoints = [
  "Work directly with vetted US, Canadian, and international companies",
  "Fully remote roles — work from anywhere in Pakistan",
  "Free for candidates — we never charge job seekers",
  "Transparent process from application to offer",
  "Ongoing support even after you're placed",
  "Real, active openings in Marketing, Sales, and Digital roles",
];

const agencyPoints = [
  "Source skilled Pakistani professionals across Marketing, Sales, and Digital roles",
  "Screen and evaluate candidates for skills, experience, and communication",
  "Match candidates with suitable open positions",
  "Support the interview, offer, and onboarding process",
  "Provide ongoing coordination between candidates and hiring companies",
];

const faqs = [
  { q: "Is there any fee for candidates to apply?", a: "No. Applying and getting placed through Talent by Digital is completely free for candidates. We are compensated by the hiring companies, never by job seekers." },
  { q: "What roles do you place candidates in?", a: "We focus primarily on Marketing and Sales roles — including Meta Ads, Google Ads, SEO, Content, Social Media, Sales, and Appointment Setting — along with Creative and Digital roles like Graphic Design, Video Editing, and Web Development." },
  { q: "Do I need prior experience with international clients?", a: "Not necessarily. We evaluate your actual skills, communication ability, and reliability. Prior international client experience is a plus but not always required." },
  { q: "How does the application process work?", a: "You explore open roles, apply with your details, go through a short screening with our team, and if you're a good fit, we match you with a suitable international company for interviews." },
  { q: "Do you also work with companies looking to hire?", a: "Yes. Talent by Digital is a Pakistan-based recruitment agency. Alongside helping candidates find roles, we help US, Canadian, and other international companies source, screen, and hire skilled Pakistani professionals." },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactMode, setContactMode] = useState<"candidate" | "company">("candidate");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", role: "", message: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Careers", id: "careers" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Hiring Now", id: "hiring-now" },
    { label: "Why Us", id: "why-us" },
    { label: "For Companies", id: "for-companies" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const inputStyle = {
    width: "100%", background: "#0D0D0D", border: "1px solid #252525",
    borderRadius: 10, padding: "12px 16px", color: "#fff", fontSize: "0.9rem",
    outline: "none", fontFamily: "inherit", transition: "border-color 0.2s",
  };

  return (
    <div style={{ background: "#0A0A0A", color: "#fff", minHeight: "100vh", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo.png" alt="Talent by Digital" width={40} height={40} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.06em", lineHeight: 1.15 }}>
                <span style={{ color: "#7EC832" }}>TALENT</span>&nbsp;<span style={{ color: "#fff" }}>BY DIGITAL</span>
              </div>
              <div style={{ fontSize: "0.58rem", color: "#555", letterSpacing: "0.16em", textTransform: "uppercase" }}>Remote Careers · Pakistan</div>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 30 }} className="tn-desktop-nav">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`}
                style={{ textDecoration: "none", color: "#999", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                onMouseOut={e => (e.currentTarget.style.color = "#999")}
              >{l.label}</a>
            ))}
          </div>

          <a href="#hiring-now"
            style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.82rem", padding: "10px 24px", borderRadius: 100, textDecoration: "none", letterSpacing: "0.04em", transition: "opacity 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={e => (e.currentTarget.style.opacity = "1")}
            className="tn-desktop-cta"
          >Find Jobs</a>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="tn-mobile-btn">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "#0D0D0D", borderTop: "1px solid #1a1a1a", padding: "16px 24px 24px" }}>
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}
                style={{ display: "block", color: "#999", textDecoration: "none", padding: "13px 0", borderBottom: "1px solid #161616", fontSize: "0.95rem" }}>{l.label}</a>
            ))}
            <a href="#hiring-now" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: 16, background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, padding: "13px", borderRadius: 100, textAlign: "center", textDecoration: "none" }}>Find Jobs</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.png" alt="Remote professional working" fill style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.9) 55%, rgba(10,10,10,0.75) 100%)" }} />
        </div>

        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ position: "absolute", left: `${(i + 1) * 20}%`, top: 0, bottom: 0, width: 1, background: "rgba(126,200,50,0.04)" }} />
          ))}
        </div>

        <div style={{ position: "absolute", top: "15%", right: "8%", width: 600, height: 600, background: "radial-gradient(circle, rgba(126,200,50,0.1) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 90px", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <Reveal delay={0}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 28 }}>
                <svg width="7" height="7" viewBox="0 0 8 8" className="tn-pulse-dot"><circle cx="4" cy="4" r="4" fill="#7EC832" /></svg>
                Remote Careers for Pakistani Professionals
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 style={{ fontSize: "clamp(2.3rem, 5.2vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em" }}>
                Find Your Next{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Global Career Opportunity
                </span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "#999", lineHeight: 1.75, marginBottom: 40, maxWidth: 600 }}>
                Talent by Digital connects skilled Pakistani professionals with US, Canadian, and international companies hiring remote Marketing, Sales, Creative, and Digital talent.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                <a href="#hiring-now" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 100, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(126,200,50,0.35)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                  Explore Opportunities <ArrowRight />
                </a>
                <a href="#for-companies" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 100, textDecoration: "none", transition: "background 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
                  onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                  Hire Talent
                </a>
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #222", borderRadius: 100, padding: "8px 18px", fontSize: "0.8rem", fontWeight: 700 }}>🇵🇰 Pakistan Talent</div>
                <ArrowRight />
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #7EC832", borderRadius: 100, padding: "9px 20px", fontSize: "0.82rem", fontWeight: 800, color: "#7EC832" }}>🇺🇸 USA</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #7EC832", borderRadius: 100, padding: "9px 20px", fontSize: "0.82rem", fontWeight: 800, color: "#7EC832" }}>🇨🇦 Canada</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #222", borderRadius: 100, padding: "8px 18px", fontSize: "0.8rem", fontWeight: 700, color: "#999" }}>+ International</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAREER FIELDS */}
      <section id="careers" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Career Fields</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>
                Build Your Career in{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Marketing &amp; Sales</span>
              </h2>
              <p style={{ color: "#777", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>We place Pakistani professionals into remote roles with international companies — with a focus on Marketing and Sales, plus Creative and Digital positions.</p>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 64 }}>
            {careerFields.map((r, i) => (
              <Reveal key={i} delay={i * 40} className="tn-reveal-scale">
                <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 100, padding: "9px 22px", fontSize: "0.85rem", color: "#aaa", cursor: "default", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#7EC832"; e.currentTarget.style.color = "#7EC832"; e.currentTarget.style.background = "rgba(126,200,50,0.07)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#aaa"; e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {r}
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "240px 240px", gap: 14 }} className="tn-mosaic">
            {[
              { src: "/img1.png", label: "Marketing & Sales", span: true },
              { src: "/img2.png", label: null, span: false },
              { src: "/img3.png", label: null, span: false },
              { src: "/img4.png", label: null, span: false },
              { src: "/img5.png", label: null, span: false },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 100} className="tn-reveal-scale" style={{ gridRow: img.span ? "1 / 3" : undefined, height: "100%" }}>
                <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: "100%", transition: "transform 0.4s" }}
                  onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
                  <Image src={img.src} alt="Professional" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: img.span ? "linear-gradient(to top, rgba(10,10,10,0.75), transparent 60%)" : "rgba(10,10,10,0.25)" }} />
                  {img.label && (
                    <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                      <div style={{ fontSize: "0.65rem", color: "#7EC832", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Top Category</div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700 }}>{img.label}</div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>How It Works</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Your Path to a{" "}<span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Global Career</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 28 }}>
            {processSteps.map((p, i) => (
              <Reveal key={i} delay={i * 110}>
                <div>
                  <div style={{ fontSize: "3.2rem", fontWeight: 900, color: "rgba(126,200,50,0.07)", lineHeight: 1, marginBottom: 10, fontVariantNumeric: "tabular-nums" }}>{p.step}</div>
                  <div style={{ width: 36, height: 3, background: "linear-gradient(90deg, #7EC832, #F5C200)", borderRadius: 2, marginBottom: 16 }} />
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY HIRING */}
      <section id="hiring-now" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>
                <svg width="7" height="7" viewBox="0 0 8 8" className="tn-pulse-dot"><circle cx="4" cy="4" r="4" fill="#7EC832" /></svg>
                Currently Hiring
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>
                See What We're{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Actively Hiring For</span>
              </h2>
              <p style={{ color: "#777", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>Open roles are updated as positions become available. Apply directly to any active opening below.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 44 }}>
            {openRoles.map((job, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 20, padding: "28px 26px", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s", height: "100%", display: "flex", flexDirection: "column" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(126,200,50,0.12)"; e.currentTarget.style.borderColor = "rgba(126,200,50,0.3)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#1a1a1a"; }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(126,200,50,0.1)", border: "1px solid rgba(126,200,50,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EC832" }}><BriefcaseSvg /></div>
                    <div style={{ background: "rgba(126,200,50,0.1)", border: "1px solid rgba(126,200,50,0.3)", color: "#7EC832", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 100 }}>Open</div>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{job.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: "0.72rem", color: "#7EC832", background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.2)", borderRadius: 100, padding: "4px 11px" }}>{job.dept}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.72rem", color: "#999", background: "#151515", border: "1px solid #222", borderRadius: 100, padding: "4px 11px" }}><LocationIcon />Remote · Pakistan</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.72rem", color: "#999", background: "#151515", border: "1px solid #222", borderRadius: 100, padding: "4px 11px" }}><ClockIcon />{job.type}</span>
                  </div>
                  <p style={{ color: "#999", lineHeight: 1.6, fontSize: "0.85rem", marginBottom: 16 }}>{job.desc}</p>
                  <div style={{ marginBottom: 20, flexGrow: 1 }}>
                    <div style={{ fontSize: "0.7rem", color: "#666", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Key Requirements</div>
                    {job.reqs.map((r, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                        <div style={{ color: "#7EC832", flexShrink: 0, marginTop: 3 }}><CheckIcon /></div>
                        <span style={{ color: "#bbb", fontSize: "0.8rem", lineHeight: 1.5 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.85rem", padding: "11px 20px", borderRadius: 100, textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseOut={e => (e.currentTarget.style.opacity = "1")}>
                    Apply Now <ArrowRight />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", padding: "13px 30px", borderRadius: 100, textDecoration: "none", transition: "background 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
                onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                See All Opportunities <ArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 80, alignItems: "center" }} className="tn-two-col">
          <Reveal className="tn-reveal-left">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Why Talent by Digital</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.18, marginBottom: 22 }}>
                Your Career, Backed by{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Real Support.</span>
              </h2>
              <p style={{ color: "#777", lineHeight: 1.8, marginBottom: 36, fontSize: "0.93rem" }}>We know that finding a genuine remote job with an international company can be difficult. Talent by Digital exists to make that path clear, honest, and free for Pakistani professionals.</p>
              {whyPoints.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(126,200,50,0.12)", border: "1px solid rgba(126,200,50,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EC832", flexShrink: 0, marginTop: 2 }}><CheckIcon /></div>
                  <span style={{ color: "#ccc", fontSize: "0.875rem", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="tn-reveal-right" delay={150}>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 24, overflow: "hidden", position: "relative", height: 480 }}>
                <Image src="/about.png" alt="Remote professional" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 55%)" }} />
              </div>
              <div className="tn-float-badge" style={{ position: "absolute", bottom: -18, left: -18, background: "#111", border: "1px solid #222", borderRadius: 16, padding: "14px 18px", animation: "tnFloatSmall 5s ease-in-out infinite", maxWidth: 190 }}>
                <div style={{ color: "#7EC832", marginBottom: 4 }}><GlobeSvg /></div>
                <div style={{ fontSize: "0.78rem", color: "#ddd", fontWeight: 700 }}>US &amp; Canada Focused</div>
              </div>
              <div className="tn-float-badge" style={{ position: "absolute", top: -18, right: -18, background: "#111", border: "1px solid #222", borderRadius: 16, padding: "14px 18px", animation: "tnFloatSmall 5s ease-in-out infinite 0.5s", maxWidth: 190 }}>
                <div style={{ color: "#F5C200", marginBottom: 4 }}><TargetSvg /></div>
                <div style={{ fontSize: "0.78rem", color: "#ddd", fontWeight: 700 }}>Marketing &amp; Sales Specialists</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR COMPANIES */}
      <section id="for-companies" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>For Companies</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 18 }}>
              Looking for{" "}<span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Skilled Talent?</span>
            </h2>
            <p style={{ color: "#999", lineHeight: 1.8, marginBottom: 32, fontSize: "0.95rem" }}>Talent by Digital helps international companies find, screen, and connect with skilled Pakistani professionals for remote roles in Marketing, Sales, Creative, and Digital positions.</p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 100, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(126,200,50,0.35)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
              Hire Talent <ArrowRight />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ABOUT / RECRUITMENT PROCESS */}
      <section style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 60, gridTemplateColumns: "1fr 1fr" }} className="tn-two-col">
          <Reveal className="tn-reveal-left">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Who We Are</div>
              <h2 style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 18 }}>
                A Pakistan-Based Recruitment &amp; Talent-Hunting Agency
              </h2>
              <p style={{ color: "#999", lineHeight: 1.8, fontSize: "0.92rem" }}>
                Talent by Digital is a recruitment agency based in Pakistan. Alongside connecting candidates with career opportunities, we work directly with international companies to help them build remote teams from Pakistan's talent pool.
              </p>
            </div>
          </Reveal>
          <Reveal className="tn-reveal-right" delay={120}>
            <div>
              {agencyPoints.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(126,200,50,0.12)", border: "1px solid rgba(126,200,50,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EC832", flexShrink: 0, marginTop: 2 }}><HandshakeSvg /></div>
                  <span style={{ color: "#ccc", fontSize: "0.88rem", lineHeight: 1.6, paddingTop: 2 }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>FAQ</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Common <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
              </h2>
            </div>
          </Reveal>
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 90}>
              <div style={{ background: "#111", border: `1px solid ${openFaq === i ? "rgba(126,200,50,0.3)" : "#1a1a1a"}`, borderRadius: 14, marginBottom: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left", fontFamily: "inherit" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.92rem", lineHeight: 1.4 }}>{f.q}</span>
                  <div style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", color: "#7EC832", flexShrink: 0 }}><ChevronDown /></div>
                </button>
                <div style={{
                  maxHeight: openFaq === i ? 300 : 0,
                  opacity: openFaq === i ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease, opacity 0.3s ease, padding 0.35s ease",
                  padding: openFaq === i ? "0 22px 18px" : "0 22px",
                  color: "#777", fontSize: "0.875rem", lineHeight: 1.7,
                }}>{f.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 80, alignItems: "start" }} className="tn-two-col">
          <Reveal className="tn-reveal-left">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Get Started</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 18, lineHeight: 1.2 }}>
                Ready to Take the{" "}<span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Next Step?</span>
              </h2>
              <p style={{ color: "#777", lineHeight: 1.8, marginBottom: 40, fontSize: "0.93rem" }}>Whether you're looking for your next remote career move or your team needs skilled Pakistani talent, reach out and we'll get back to you within 24 hours.</p>
              {[
                { icon: <EmailIcon />, label: "Email", value: "hire@talentbydigital.pk" },
                { icon: <PhoneIcon />, label: "WhatsApp", value: "+92 300 000 0000" },
                { icon: <LocationIcon />, label: "Based in", value: "Peshawar, Pakistan" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EC832", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#555", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>{c.value}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
                {[
                  { icon: <InstagramIcon />, href: "https://www.instagram.com/talentbydigital/" },
                  { icon: <LinkedInIcon />, href: "#" },
                  { icon: <FacebookIcon />, href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: 42, height: 42, borderRadius: 11, background: "#111", border: "1px solid #1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", color: "#777", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "#7EC832"; e.currentTarget.style.color = "#7EC832"; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#777"; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="tn-reveal-right" delay={150}>
            <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 24, padding: "38px 34px" }}>
              <div style={{ display: "flex", gap: 8, background: "#0A0A0A", border: "1px solid #1e1e1e", borderRadius: 100, padding: 5, marginBottom: 26 }}>
                <button onClick={() => setContactMode("candidate")} style={{
                  flex: 1, padding: "10px 0", borderRadius: 100, border: "none", cursor: "pointer", fontWeight: 700, fontSize: "0.82rem", fontFamily: "inherit", transition: "all 0.2s",
                  background: contactMode === "candidate" ? "linear-gradient(135deg, #7EC832, #F5C200)" : "transparent",
                  color: contactMode === "candidate" ? "#000" : "#999",
                }}>I'm a Candidate</button>
                <button onClick={() => setContactMode("company")} style={{
                  flex: 1, padding: "10px 0", borderRadius: 100, border: "none", cursor: "pointer", fontWeight: 700, fontSize: "0.82rem", fontFamily: "inherit", transition: "all 0.2s",
                  background: contactMode === "company" ? "linear-gradient(135deg, #7EC832, #F5C200)" : "transparent",
                  color: contactMode === "company" ? "#000" : "#999",
                }}>I'm Hiring</button>
              </div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 24 }}>
                {contactMode === "candidate" ? "Tell Us About Yourself" : "Tell Us Who You're Looking For"}
              </h3>

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7, letterSpacing: "0.03em" }}>Your Name</label>
                <input type="text" placeholder="John Smith" value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "#252525")} />
              </div>

              {contactMode === "company" && (
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7, letterSpacing: "0.03em" }}>Company Name</label>
                  <input type="text" placeholder="Acme Corp" value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "#252525")} />
                </div>
              )}

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7, letterSpacing: "0.03em" }}>Email Address</label>
                <input type="email" placeholder="you@email.com" value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "#252525")} />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7, letterSpacing: "0.03em" }}>
                  {contactMode === "candidate" ? "Role You're Interested In" : "Role You Are Hiring For"}
                </label>
                <input type="text" placeholder={contactMode === "candidate" ? "e.g. Meta Ads Specialist" : "e.g. Sales Representative"} value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "#252525")} />
              </div>

              <div style={{ marginBottom: 26 }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7 }}>
                  {contactMode === "candidate" ? "Tell Us About Your Experience" : "Additional Details"}
                </label>
                <textarea placeholder={contactMode === "candidate" ? "Share your skills, experience, and what kind of role you're looking for..." : "Tell us about the role, timeline, and any specific requirements..."} value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "#252525")} />
              </div>

              {contactMode === "candidate" && (
                <div style={{ marginBottom: 26 }}>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7 }}>Attach Your CV</label>
                  <label htmlFor="cv-upload" style={{
                    display: "flex", alignItems: "center", gap: 10, width: "100%", background: "#0D0D0D",
                    border: `1px dashed ${cvFile ? "#7EC832" : "#333"}`, borderRadius: 10, padding: "12px 16px",
                    color: cvFile ? "#7EC832" : "#666", fontSize: "0.85rem", cursor: "pointer", transition: "border-color 0.2s",
                  }}>
                    <UploadIcon />
                    {cvFile ? cvFile.name : "Click to upload PDF, DOC, or DOCX (max 5MB)"}
                  </label>
                  <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }}
                    onChange={e => setCvFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)} />
                </div>
              )}

              <button style={{ width: "100%", background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.95rem", padding: "14px", borderRadius: 11, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "opacity 0.2s, transform 0.2s", fontFamily: "inherit" }}
                onMouseOver={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.01)"; }}
                onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}>
                {contactMode === "candidate" ? "Submit Application" : "Submit Hiring Request"} <ArrowRight />
              </button>
              <p style={{ fontSize: "0.72rem", color: "#444", textAlign: "center", marginTop: 14 }}>We respond within 24 hours. No spam, no commitment.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #161616", padding: "36px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo.png" alt="Talent by Digital" width={34} height={34} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.06em" }}><span style={{ color: "#7EC832" }}>TALENT</span> <span style={{ color: "#fff" }}>BY DIGITAL</span></div>
              <div style={{ fontSize: "0.58rem", color: "#444", letterSpacing: "0.14em", textTransform: "uppercase" }}>Peshawar, Pakistan</div>
            </div>
          </a>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} style={{ color: "#555", textDecoration: "none", fontSize: "0.78rem", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#aaa")}
                onMouseOut={e => (e.currentTarget.style.color = "#555")}>{l.label}</a>
            ))}
          </div>
          <div style={{ color: "#383838", fontSize: "0.75rem" }}>© 2025 Talent by Digital. All rights reserved.</div>
        </div>
      </footer>

      <style>{`
        @keyframes tnFloat { 0%,100%{transform:translateY(-50%)} 50%{transform:translateY(calc(-50% - 10px))} }
        @keyframes tnFloatSmall { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes tnPulse { 0%,100%{opacity:1} 50%{opacity:0.55} }
        @keyframes tnSpinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .tn-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.8s cubic-bezier(.16,.8,.24,1), transform 0.8s cubic-bezier(.16,.8,.24,1); }
        .tn-reveal.tn-visible { opacity: 1; transform: translateY(0); }
        .tn-reveal-left { transform: translateX(-44px); }
        .tn-reveal-left.tn-visible { transform: translateX(0); }
        .tn-reveal-right { transform: translateX(44px); }
        .tn-reveal-right.tn-visible { transform: translateX(0); }
        .tn-reveal-scale { transform: scale(0.92); }
        .tn-reveal-scale.tn-visible { transform: scale(1); }
        .tn-pulse-dot { animation: tnPulse 2s ease-in-out infinite; }
        .tn-spin-slow { animation: tnSpinSlow 18s linear infinite; }
        .tn-two-col { grid-template-columns: 1fr 1fr; }
        .tn-desktop-nav, .tn-desktop-cta { display: flex; }
        .tn-mobile-btn { display: none; }
        @media(max-width:900px){
          .tn-two-col { grid-template-columns: 1fr !important; }
          .tn-mosaic { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .tn-mosaic > div:first-child { grid-row: auto !important; }
        }
        @media(max-width:700px){
          .tn-desktop-nav,.tn-desktop-cta { display: none !important; }
          .tn-mobile-btn { display: block !important; }
          .tn-mosaic { grid-template-columns: 1fr !important; }
          .tn-float-badge { left: 8px !important; right: 8px !important; max-width: none !important; }
        }
        *{box-sizing:border-box;}
        input,textarea,button{font-family:inherit;}
        ::placeholder{color:#444;}
      `}</style>
    </div>
  );
}
