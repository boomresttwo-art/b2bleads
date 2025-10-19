
"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary, ButtonOutline } from "./ui/Button";
import { Card } from "./ui/Card";
import { ChevronDot, KPI } from "./ui/KPI";
import { FAQ } from "./ui/FAQ";
import { BarChart3, Target, Database, ListChecks, Rocket, ArrowRight, Sparkles, PlayCircle, TrendingUp } from "lucide-react";
import { AFFILIATE_URL } from "../config";

function Glow(){ return <div className="glow" />; }

const usp = [
  { icon: Target, text: "ICP Targeting by industry, size, geo" },
  { icon: Database, text: "Fresh, verified data (manual + tools)" },
  { icon: ListChecks, text: "Bounce‑checked emails & LinkedIn" },
  { icon: Rocket, text: "Ready‑to‑use CSV for outreach" },
];

const counters = [
  { k: "95%+", l: "Email Deliverability" },
  { k: "48h", l: "Starter Turnaround" },
  { k: "3x", l: "Reply Rate vs. generic lists" },
  { k: "GDPR", l: "Compliant Research" },
];

function Header(){
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gradient-to-tr from-amber-500 to-sky-500" />
          <span className="text-sm font-bold tracking-wide">PipelinePilot</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:opacity-80">How it works</a>
          <a href="#calc" className="hover:opacity-80">Calculator</a>
          <a href="#plans" className="hover:opacity-80">Plans</a>
          <a href="#faq" className="hover:opacity-80">FAQ</a>
        </nav>
        <ButtonPrimary href={`/api/go?plan=header`}>Get Leads</ButtonPrimary>
      </div>
    </header>
  );
}

function Hero({ onVideo }){
  return (
    <section className="relative overflow-hidden">
      <Glow />
      <div className="container grid md:grid-cols-2 items-center gap-8 py-16">
        <div>
          <span className="badge border-amber-200 bg-amber-50 text-amber-700">
            <Sparkles className="h-3 w-3" /> B2B Lead Generation & Prospect Lists
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mt-3">
            Fill Your Pipeline with <span className="bg-gradient-to-r from-amber-500 to-sky-500 bg-clip-text text-transparent">Qualified Buyers</span>
          </h1>
          <p className="mt-3 text-slate-600">
            Laser‑targeted, verified B2B contacts matched to your ICP — delivered as a clean CSV with emails, roles, company data & LinkedIn.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonPrimary href={`/api/go?plan=hero`}>
              Build My Prospect List <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonPrimary>
            <ButtonOutline onClick={onVideo}>
              <PlayCircle className="mr-2 h-5 w-5" /> 90‑sec overview
            </ButtonOutline>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {usp.map((u) => (
              <div key={u.text} className="flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 text-sm">
                <u.icon className="h-4 w-4" /> {u.text}
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="aspect-video overflow-hidden card grid place-items-center p-6">
            <div className="text-center">
              <BarChart3 className="mx-auto mb-4 h-12 w-12" />
              <p className="text-sm text-slate-600">Add a demo: sample list preview & reply‑rate chart.</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {counters.map((x) => <KPI key={x.l} k={x.k} l={x.l} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Calculator(){
  const [leads, setLeads] = useState(600);
  const [reply, setReply] = useState(0.08);
  const [meet, setMeet] = useState(0.35);
  const [close, setClose] = useState(0.22);
  const [acv, setAcv] = useState(2500);
  const meetings = Math.round(leads * reply * meet);
  const deals = Math.round(meetings * close);
  const revenue = Math.round(deals * acv);
  return (
    <section id="calc" className="container py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Pipeline Value Calculator</h2>
        <p className="mt-2 text-slate-600">Estimate the revenue impact of a verified prospect list</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Inputs">
          <label className="text-sm">Leads delivered<input className="mt-1 w-full rounded border px-3 py-2" type="number" value={leads} onChange={e=>setLeads(Number(e.target.value))} /></label>
          <label className="text-sm">Reply rate (0.01‑0.20)<input className="mt-1 w-full rounded border px-3 py-2" type="number" step="0.01" min="0" max="1" value={reply} onChange={e=>setReply(Number(e.target.value))} /></label>
          <label className="text-sm">Replies → Meetings %<input className="mt-1 w-full rounded border px-3 py-2" type="number" step="0.01" min="0" max="1" value={meet} onChange={e=>setMeet(Number(e.target.value))} /></label>
          <label className="text-sm">Close rate %<input className="mt-1 w-full rounded border px-3 py-2" type="number" step="0.01" min="0" max="1" value={close} onChange={e=>setClose(Number(e.target.value))} /></label>
          <label className="text-sm">Average contract value<input className="mt-1 w-full rounded border px-3 py-2" type="number" value={acv} onChange={e=>setAcv(Number(e.target.value))} /></label>
          <p className="text-xs text-slate-500">Demo defaults assume niche ICP + multi‑touch outreach.</p>
        </Card>
        <Card title={<span className="inline-flex items-center gap-2"><TrendingUp className="h-5 w-5" />Projected Outcomes</span>}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="kpi"><div className="text-xs uppercase text-slate-500">Meetings</div><div className="text-2xl font-extrabold">{meetings}</div></div>
            <div className="kpi"><div className="text-xs uppercase text-slate-500">Deals</div><div className="text-2xl font-extrabold">{deals}</div></div>
            <div className="kpi"><div className="text-xs uppercase text-slate-500">Revenue</div><div className="text-2xl font-extrabold text-amber-600">${revenue}</div></div>
          </div>
          <ButtonPrimary className="w-full mt-6" href={`/api/go?plan=calc`}>Order a Targeted List</ButtonPrimary>
        </Card>
      </div>
    </section>
  );
}

function ICPQuiz(){
  const [industry, setIndustry] = useState("SaaS");
  const [size, setSize] = useState("11‑50");
  const [role, setRole] = useState("Head of Marketing");
  const [geo, setGeo] = useState("US & Canada");
  const [out, setOut] = useState(null);
  function build(){
    const txt = `Target: ${industry} companies, size ${size}, persona ${role}, region ${geo}. Include company, domain, decision‑maker name & role, verified email, LinkedIn, size, industry, HQ.`;
    setOut(txt);
  }
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50/60">
      <div className="container">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">ICP Quick Builder</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <Card title="Industry"><input className="mt-1 w-full rounded border px-3 py-2" value={industry} onChange={e=>setIndustry(e.target.value)} /></Card>
          <Card title="Company size"><input className="mt-1 w-full rounded border px-3 py-2" value={size} onChange={e=>setSize(e.target.value)} /></Card>
          <Card title="Decision‑maker"><input className="mt-1 w-full rounded border px-3 py-2" value={role} onChange={e=>setRole(e.target.value)} /></Card>
          <Card title="Region"><input className="mt-1 w-full rounded border px-3 py-2" value={geo} onChange={e=>setGeo(e.target.value)} /></Card>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          <ButtonPrimary onClick={build}>Generate Brief</ButtonPrimary>
          <ButtonOutline href={`/api/go?plan=icp`}>Send to Researcher</ButtonOutline>
        </div>
        {out && (
          <div className="container max-w-3xl mt-6 card p-4 text-sm">
            <div className="mb-2 text-xs uppercase text-slate-500">Suggested brief</div>
            <textarea rows={4} className="w-full rounded border p-2" value={out} onChange={e=>setOut(e.target.value)} />
          </div>
        )}
      </div>
    </section>
  );
}

function Plans(){
  const tiers = [
    { name: "Starter", price: "$25", bullets: ["200 targeted leads","CSV + basic fields","48h delivery"], badge: "Quick start" },
    { name: "Growth", price: "$65", bullets: ["600 verified leads","Emails + LinkedIn + firmographics","Niche filters"], badge: "Most Popular" },
    { name: "Scale", price: "$120", bullets: ["1,500 multi‑channel leads","Custom columns & enrichment","ICP workshop + outreach tips"], badge: "For teams" },
  ];
  return (
    <section id="plans" className="container py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold">Choose Your Package</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tiers.map((t, idx) => (
          <Card key={t.name} title={<div className="flex items-center justify-between"><span>{t.name}</span><span className="text-2xl font-extrabold">{t.price}</span></div>} ring={idx===1}>
            <p className="text-xs text-amber-600">{t.badge}</p>
            <ul className="space-y-2 text-sm mt-3">
              {t.bullets.map(b => <li key={b} className="flex items-start gap-2"><ChevronDot />{b}</li>)}
            </ul>
            <ButtonPrimary className="w-full mt-6" href={`/api/go?plan=${encodeURIComponent(t.name)}`}>Order {t.name}</ButtonPrimary>
          </Card>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 mt-4">*Affiliate disclosure: we may earn a commission — no extra cost to you.</p>
    </section>
  );
}

function Footer(){
  return (
    <footer className="border-t bg-white/70 py-10">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} PipelinePilot. All rights reserved.</p>
        <p className="text-xs text-slate-500">We may earn a commission via affiliate links — no extra cost to you.</p>
      </div>
    </footer>
  );
}

function StickyCTA(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);
  if(!show) return null;
  return (
    <div className="sticky-cta">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm">Ready to fill your pipeline?</div>
        <ButtonPrimary href={`/api/go?plan=sticky`}>Get Leads</ButtonPrimary>
      </div>
    </div>
  );
}

export default function Page(){
  const [video, setVideo] = useState(false);
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <Hero onVideo={()=>setVideo(true)} />
        <Calculator />
        <ICPQuiz />
        <Plans />
        <section id="faq" className="container py-16">
          <FAQ />
        </section>
      </main>
      <Footer />
      <StickyCTA />

      {video && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="w-full max-w-3xl overflow-hidden rounded-2xl border bg-white shadow-2xl">
            <div className="aspect-video grid place-items-center text-sm text-slate-600">Drop your Loom/YouTube embed here</div>
            <div className="p-3 text-right"><button className="text-sm underline" onClick={()=>setVideo(false)}>Close</button></div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// --- tiny UI primitives (no external UI libs) ---

function cx(...classes){ return classes.filter(Boolean).join(" "); }

export function Anchor({ href, children, className, onClick }){
  return <a href={href} onClick={onClick} className={cx("inline-flex items-center", className)}>{children}</a>;
}

