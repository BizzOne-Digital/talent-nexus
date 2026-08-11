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
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5C200" stroke="#F5C200" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const SearchSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const UsersSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const ShieldSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
const AwardSvg = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const services = [
  { icon: <SearchSvg />, title: "Talent Sourcing", desc: "We identify and attract top-tier Pakistani professionals across digital marketing, tech, and remote-ready roles using targeted sourcing strategies." },
  { icon: <UsersSvg />, title: "Candidate Screening", desc: "Multi-layer screening including skills assessments, communication evaluations, and cultural fit analysis tailored to your team's needs." },
  { icon: <ShieldSvg />, title: "Verified Profiles", desc: "Every candidate is thoroughly vetted — background checked, reference verified, and skill-tested before being presented to your team." },
  { icon: <GlobeSvg />, title: "Remote Hiring Support", desc: "End-to-end assistance for international companies onboarding Pakistani remote talent, from contracts to onboarding documentation." },
  { icon: <BriefcaseSvg />, title: "Role Specialization", desc: "Deep expertise in placing digital marketers, content strategists, SEO specialists, media buyers, developers, and operations staff." },
  { icon: <AwardSvg />, title: "Quality Guarantee", desc: "We stand behind every placement. If a hire does not work out within the guarantee period, we replace them at no additional cost." },
];

const stats = [
  { value: "500+", label: "Professionals Placed" },
  { value: "120+", label: "International Clients" },
  { value: "95%", label: "Retention Rate" },
  { value: "14 Days", label: "Avg. Time to Hire" },
];

const roles = [
  "Meta Ads Specialists", "Google Ads Managers", "SEO Strategists",
  "Content Creators", "Social Media Managers", "Email Marketers",
  "Graphic Designers", "Video Editors", "Web Developers",
  "CRM Specialists", "Operations Managers", "Virtual Assistants",
];

const testimonials = [
  { name: "James Harrington", role: "CMO, GrowthEdge UK", stars: 5, text: "Talent Nexus delivered exactly what we needed — a vetted, English-fluent Meta Ads specialist within 10 days. Our campaign ROAS improved 3x within the first month." },
  { name: "Sarah Mitchell", role: "Founder, LaunchBridge AU", stars: 5, text: "We were skeptical about remote hiring at first. Talent Nexus changed our perspective entirely. Our content team from Pakistan has been outstanding for over a year." },
  { name: "Marcus van der Berg", role: "CEO, ScaleOps NL", stars: 5, text: "The screening process is thorough and communication is always transparent. We have placed four team members through Talent Nexus and every one has been a great fit." },
];

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

const faqs = [
  { q: "What industries and roles do you specialize in?", a: "We specialize primarily in digital marketing, remote operations, and tech roles. This includes Meta and Google Ads specialists, SEO strategists, content creators, graphic designers, developers, and virtual assistants." },
  { q: "How long does the recruitment process take?", a: "Our average time-to-hire is 14 days from intake to shortlist. Urgent placements can be fulfilled in as little as 5-7 business days depending on the role and requirements." },
  { q: "Do you offer replacement guarantees?", a: "Yes. We offer a 60-day replacement guarantee on all placements. If the hire does not meet expectations within that window, we source and place a replacement at no additional cost." },
  { q: "Can we hire candidates full-time or on a contract basis?", a: "Both options are available. We facilitate full-time remote hires, part-time contracts, and project-based placements depending on what suits your business model best." },
  { q: "How do you ensure candidates are remote-work ready?", a: "All candidates undergo communication assessments, time-management evaluations, and tool proficiency checks (Slack, Notion, Asana, etc.) before being shortlisted for international clients." },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", role: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Services", "Why Us", "Roles", "Testimonials", "FAQ", "Contact"];

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
            <Image src="/logo.png" alt="Talent Nexus" width={40} height={40} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.06em", lineHeight: 1.15 }}>
                <span style={{ color: "#7EC832" }}>TALENT</span>&nbsp;<span style={{ color: "#fff" }}>NEXUS</span>
              </div>
              <div style={{ fontSize: "0.58rem", color: "#555", letterSpacing: "0.16em", textTransform: "uppercase" }}>Pakistan Talent Experts</div>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="tn-desktop-nav">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
                style={{ textDecoration: "none", color: "#999", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                onMouseOut={e => (e.currentTarget.style.color = "#999")}
              >{l}</a>
            ))}
          </div>

          <a href="#contact"
            style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.82rem", padding: "10px 24px", borderRadius: 100, textDecoration: "none", letterSpacing: "0.04em", transition: "opacity 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={e => (e.currentTarget.style.opacity = "1")}
            className="tn-desktop-cta"
          >Hire Talent</a>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="tn-mobile-btn">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "#0D0D0D", borderTop: "1px solid #1a1a1a", padding: "16px 24px 24px" }}>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)}
                style={{ display: "block", color: "#999", textDecoration: "none", padding: "13px 0", borderBottom: "1px solid #161616", fontSize: "0.95rem" }}>{l}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: 16, background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, padding: "13px", borderRadius: 100, textAlign: "center", textDecoration: "none" }}>Hire Talent</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.png" alt="Office" fill style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.88) 55%, rgba(10,10,10,0.7) 100%)" }} />
        </div>

        {/* decorative grid */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ position: "absolute", left: `${(i + 1) * 20}%`, top: 0, bottom: 0, width: 1, background: "rgba(126,200,50,0.04)" }} />
          ))}
          <div style={{ position: "absolute", top: "33%", left: 0, right: 0, height: 1, background: "rgba(126,200,50,0.04)" }} />
          <div style={{ position: "absolute", top: "66%", left: 0, right: 0, height: 1, background: "rgba(126,200,50,0.04)" }} />
        </div>

        {/* green glow */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 600, height: 600, background: "radial-gradient(circle, rgba(126,200,50,0.1) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
          <div style={{ maxWidth: 800 }}>
            {/* label */}
            <Reveal delay={0}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 28 }}>
                <svg width="7" height="7" viewBox="0 0 8 8" className="tn-pulse-dot"><circle cx="4" cy="4" r="4" fill="#7EC832" /></svg>
                Pakistan-Based Recruitment Agency
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.025em" }}>
                World-Class Pakistani Talent,{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Handpicked for Your Team
                </span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "#999", lineHeight: 1.75, marginBottom: 44, maxWidth: 600 }}>
                Talent Nexus connects international companies with top-tier Pakistani professionals in digital marketing, remote operations, and tech. We source, screen, and deliver — you hire with confidence.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 100, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(126,200,50,0.35)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                  Start Hiring Now <ArrowRight />
                </a>
                <a href="#services" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 100, textDecoration: "none", transition: "background 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
                  onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                  How It Works
                </a>
              </div>
            </Reveal>

            {/* stats */}
            <Reveal delay={460}>
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 900, background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#555", marginTop: 5, letterSpacing: "0.04em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* floating right-side panel */}
          <Reveal delay={200} className="tn-reveal-right" style={{ position: "absolute", right: 24, top: 110, width: 380 }} >
            <div className="tn-float-card">
            {/* Latest Placement */}
            <div style={{ background: "rgba(13,13,13,0.92)", backdropFilter: "blur(20px)", border: "1px solid #1E1E1E", borderRadius: 20, padding: "24px 22px", marginBottom: 16, animation: "tnFloat 4s ease-in-out infinite" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.65rem", color: "#7EC832", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#7EC832" /></svg>
                  Latest Placement
                </div>
                <div style={{ color: "#555" }}>•••</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 58, height: 58, borderRadius: "50%", border: "2px solid #7EC832", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "1rem", flexShrink: 0 }}>AK</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>Ahmed Khalil</div>
                  <div style={{ fontSize: "0.8rem", color: "#7EC832", fontWeight: 600 }}>Meta Ads Specialist</div>
                  <div style={{ fontSize: "0.75rem", color: "#888" }}>Hired by <span style={{ color: "#ddd", fontWeight: 600 }}>GrowthEdge UK</span></div>
                </div>
              </div>
              <div style={{ background: "rgba(126,200,50,0.1)", border: "1px solid rgba(126,200,50,0.3)", borderRadius: 100, padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: 8, color: "#7EC832", fontSize: "0.78rem", fontWeight: 700 }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#7EC832", display: "flex", alignItems: "center", justifyContent: "center", color: "#000" }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Placed in 9 days
              </div>
            </div>

            {/* Top Talent Match + Verified & Screened */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ background: "rgba(13,13,13,0.92)", backdropFilter: "blur(20px)", border: "1px solid #1E1E1E", borderRadius: 18, padding: "18px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, color: "#7EC832" }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(126,200,50,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7EC832" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff" }}>Top Talent Match</span>
                </div>
                {[
                  { label: "Skills Matched", value: "98%" },
                  { label: "Experience Fit", value: "96%" },
                  { label: "Availability", value: "100%" },
                ].map((row) => (
                  <div key={row.label} style={{ background: "#0A0A0A", border: "1px solid #1c1c1c", borderRadius: 9, padding: "9px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, fontSize: "0.72rem" }}>
                    <span style={{ color: "#bbb" }}>{row.label}</span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, paddingTop: 10, borderTop: "1px solid #1c1c1c" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fff" }}>Overall Match</span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#F5C200" }}>97%</span>
                </div>
              </div>

              <div style={{ background: "rgba(13,13,13,0.92)", backdropFilter: "blur(20px)", border: "1px solid #1E1E1E", borderRadius: 18, padding: "18px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, color: "#7EC832" }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(126,200,50,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7EC832" strokeWidth="2" strokeLinecap="round"><path d="M9 12l2 2 4-4" /><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff" }}>Verified &amp; Screened</span>
                </div>
                <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "#7EC832", lineHeight: 1, marginBottom: 8 }}>100%</div>
                <p style={{ fontSize: "0.72rem", color: "#999", lineHeight: 1.55, marginBottom: 14 }}>Profiles are vetted for skills, experience &amp; communication.</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {["A", "B", "C", "D"].map((l, i) => (
                    <div key={l} style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#7EC832,#F5C200)", border: "2px solid #111", marginLeft: i === 0 ? 0 : -8, fontSize: "0.6rem", fontWeight: 800, color: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>{l}</div>
                  ))}
                  <div style={{ width: 40, height: 26, borderRadius: 100, border: "1px solid #7EC832", marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.58rem", fontWeight: 800, color: "#7EC832", background: "#0A0A0A" }}>50K+</div>
                </div>
              </div>
            </div>

            {/* globe trusted-by card */}
            <div style={{ marginTop: 16, background: "rgba(13,13,13,0.92)", backdropFilter: "blur(20px)", border: "1px solid #1E1E1E", borderRadius: 18, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }} className="tn-globe-card">
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(126,200,50,0.1)", border: "1px solid rgba(126,200,50,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EC832", flexShrink: 0 }} className="tn-spin-slow">
                <GlobeSvg />
              </div>
              <div style={{ fontSize: "0.78rem", color: "#bbb", lineHeight: 1.5 }}>
                Trusted by companies in <span style={{ color: "#7EC832", fontWeight: 700 }}>15+ Countries</span>
              </div>
            </div>
            </div>
          </Reveal>

          {/* country route strip */}
          <Reveal delay={550} style={{ position: "absolute", left: 0, right: 0, bottom: 36, padding: "0 24px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }} className="tn-route-strip">
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #222", borderRadius: 100, padding: "8px 18px", fontSize: "0.8rem", fontWeight: 700 }}>🇬🇧 UK</div>
              <div style={{ height: 1, width: 90, background: "linear-gradient(90deg, rgba(126,200,50,0.5), rgba(126,200,50,0.15))" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #7EC832", borderRadius: 100, padding: "9px 22px", fontSize: "0.85rem", fontWeight: 800, color: "#7EC832" }}>🇵🇰 PAKISTAN</div>
              <div style={{ height: 1, width: 90, background: "linear-gradient(90deg, rgba(126,200,50,0.15), rgba(126,200,50,0.5))" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #222", borderRadius: 100, padding: "8px 18px", fontSize: "0.8rem", fontWeight: 700 }}>🇺🇸 USA</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>What We Do</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>
                End-to-End Recruitment,{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Zero Guesswork</span>
              </h2>
              <p style={{ color: "#777", maxWidth: 500, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>From sourcing to screening to placement — we handle every step so you can focus on growing your business.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 90} className="tn-reveal-scale">
                <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 20, padding: "30px 28px", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s", cursor: "default" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(126,200,50,0.12)"; e.currentTarget.style.borderColor = "rgba(126,200,50,0.3)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#1a1a1a"; }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(126,200,50,0.1)", border: "1px solid rgba(126,200,50,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EC832", marginBottom: 18 }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "#777", lineHeight: 1.65, fontSize: "0.875rem" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 80, alignItems: "center" }} className="tn-two-col">
          <Reveal className="tn-reveal-left">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Why Talent Nexus</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.18, marginBottom: 22 }}>
                Pakistan Has the Talent.{" "}
                <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>We Find the Best of It.</span>
              </h2>
              <p style={{ color: "#777", lineHeight: 1.8, marginBottom: 36, fontSize: "0.93rem" }}>Pakistan produces over 500,000 IT and digital graduates annually with one of the fastest-growing remote workforces in Asia. The challenge is not availability — it is finding professionals who are truly skilled, reliable, and ready to perform at international standards.</p>
              {[
                "Pre-vetted talent pools across 20+ cities in Pakistan",
                "Specialists in digital marketing, tech, and remote ops",
                "English-proficient candidates assessed for communication",
                "Transparent process from intake to signed offer",
                "Dedicated account manager for every client",
                "Post-placement support and 60-day replacement guarantee",
              ].map((item, i) => (
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
                <Image src="/about.png" alt="Team collaboration" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 55%)" }} />
              </div>
              <div style={{ position: "absolute", bottom: -18, left: -18, background: "#111", border: "1px solid #222", borderRadius: 16, padding: "16px 20px", animation: "tnFloatSmall 5s ease-in-out infinite" }}>
                <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "#7EC832", lineHeight: 1 }}>95%</div>
                <div style={{ fontSize: "0.75rem", color: "#777", marginTop: 4 }}>12-Month Retention Rate</div>
              </div>
              <div style={{ position: "absolute", top: -18, right: -18, background: "#111", border: "1px solid #222", borderRadius: 16, padding: "16px 20px", animation: "tnFloatSmall 5s ease-in-out infinite 0.5s" }}>
                <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "#F5C200", lineHeight: 1 }}>14d</div>
                <div style={{ fontSize: "0.75rem", color: "#777", marginTop: 4 }}>Avg. Time to Hire</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Talent Categories</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Roles We <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Recruit For</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 64 }}>
            {roles.map((r, i) => (
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
              { src: "/img1.png", label: "Digital Marketing", span: true },
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

      {/* PROCESS */}
      <section style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>How It Works</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Simple Process.{" "}<span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Powerful Results.</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              { step: "01", title: "Share Requirements", desc: "Tell us the role, skills needed, and timeline. We take a detailed intake to understand your team culture and goals." },
              { step: "02", title: "We Source and Screen", desc: "Our recruiters tap into our talent database and active networks to identify the top candidates matching your criteria." },
              { step: "03", title: "Review Shortlist", desc: "Receive 3-5 pre-vetted profiles with assessment reports, video introductions, and skill scores within days." },
              { step: "04", title: "Interview and Hire", desc: "Conduct your own interviews, select the right fit, and we handle the offer and onboarding documentation." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 130}>
                <div>
                  <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "rgba(126,200,50,0.07)", lineHeight: 1, marginBottom: 10, fontVariantNumeric: "tabular-nums" }}>{p.step}</div>
                  <div style={{ width: 36, height: 3, background: "linear-gradient(90deg, #7EC832, #F5C200)", borderRadius: 2, marginBottom: 16, transformOrigin: "left" }} />
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Client Feedback</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                What Our Clients <span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Say</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 20, padding: "30px 28px", transition: "transform 0.3s, border-color 0.3s" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "rgba(126,200,50,0.25)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#1a1a1a"; }}>
                  <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>{[...Array(t.stars)].map((_, j) => <StarIcon key={j} />)}</div>
                  <p style={{ color: "#bbb", lineHeight: 1.72, fontSize: "0.875rem", marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #7EC832, #F5C200)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#000", fontSize: "0.8rem", flexShrink: 0 }}>{t.name.split(" ").map(n => n[0]).join("")}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem" }}>{t.name}</div>
                      <div style={{ color: "#666", fontSize: "0.75rem" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "100px 24px", background: "#0C0C0C", borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
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
      <section id="contact" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 80, alignItems: "start" }} className="tn-two-col">
          <Reveal className="tn-reveal-left">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(126,200,50,0.08)", border: "1px solid rgba(126,200,50,0.25)", color: "#7EC832", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>Get Started</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 18, lineHeight: 1.2 }}>
                Ready to Build Your{" "}<span style={{ background: "linear-gradient(135deg, #7EC832, #F5C200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Remote Team?</span>
              </h2>
              <p style={{ color: "#777", lineHeight: 1.8, marginBottom: 40, fontSize: "0.93rem" }}>Share your hiring needs and we will get back to you within 24 hours with a tailored recruitment plan. No commitment required.</p>
              {[
                { icon: <EmailIcon />, label: "Email", value: "hire@talentnexus.pk" },
                { icon: <PhoneIcon />, label: "WhatsApp", value: "+92 300 000 0000" },
                { icon: <LocationIcon />, label: "Based in", value: "Karachi, Pakistan" },
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
                <a href="#" style={{ width: 42, height: 42, borderRadius: 11, background: "#111", border: "1px solid #1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", color: "#777", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#7EC832"; e.currentTarget.style.color = "#7EC832"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#777"; }}>
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="tn-reveal-right" delay={150}>
          <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 24, padding: "38px 34px" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 28 }}>Tell Us Who You Are Looking For</h3>
            {([
              { label: "Your Name", key: "name", placeholder: "John Smith", type: "text" },
              { label: "Company Name", key: "company", placeholder: "Acme Corp", type: "text" },
              { label: "Email Address", key: "email", placeholder: "you@company.com", type: "email" },
              { label: "Role You Are Hiring For", key: "role", placeholder: "e.g. Meta Ads Specialist", type: "text" },
            ] as const).map((field) => (
              <div key={field.key} style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7, letterSpacing: "0.03em" }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} value={formData[field.key]}
                  onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "#252525")} />
              </div>
            ))}
            <div style={{ marginBottom: 26 }}>
              <label style={{ display: "block", fontSize: "0.75rem", color: "#777", fontWeight: 500, marginBottom: 7 }}>Additional Details</label>
              <textarea placeholder="Tell us about the role, timeline, and any specific requirements..." value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => (e.target.style.borderColor = "rgba(126,200,50,0.5)")}
                onBlur={e => (e.target.style.borderColor = "#252525")} />
            </div>
            <button style={{ width: "100%", background: "linear-gradient(135deg, #7EC832, #F5C200)", color: "#000", fontWeight: 700, fontSize: "0.95rem", padding: "14px", borderRadius: 11, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "opacity 0.2s, transform 0.2s", fontFamily: "inherit" }}
              onMouseOver={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.01)"; }}
              onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}>
              Submit Hiring Request <ArrowRight />
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
            <Image src="/logo.png" alt="Talent Nexus" width={34} height={34} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.06em" }}><span style={{ color: "#7EC832" }}>TALENT</span> <span style={{ color: "#fff" }}>NEXUS</span></div>
              <div style={{ fontSize: "0.58rem", color: "#444", letterSpacing: "0.14em", textTransform: "uppercase" }}>Karachi, Pakistan</div>
            </div>
          </a>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} style={{ color: "#555", textDecoration: "none", fontSize: "0.78rem", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#aaa")}
                onMouseOut={e => (e.currentTarget.style.color = "#555")}>{l}</a>
            ))}
          </div>
          <div style={{ color: "#383838", fontSize: "0.75rem" }}>© 2025 Talent Nexus. All rights reserved.</div>
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
        .tn-float-card { display: block; }
        .tn-globe-card { display: block; }
        .tn-route-strip { display: flex; }
        @media(max-width:900px){
          .tn-two-col { grid-template-columns: 1fr !important; }
          .tn-mosaic { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .tn-mosaic > div:first-child { grid-row: auto !important; }
          .tn-float-card { display: none !important; }
          .tn-globe-card { display: none !important; }
          .tn-route-strip { display: none !important; }
        }
        @media(max-width:700px){
          .tn-desktop-nav,.tn-desktop-cta { display: none !important; }
          .tn-mobile-btn { display: block !important; }
          .tn-mosaic { grid-template-columns: 1fr !important; }
        }
        *{box-sizing:border-box;}
        input,textarea,button{font-family:inherit;}
        ::placeholder{color:#444;}
      `}</style>
    </div>
  );
}
