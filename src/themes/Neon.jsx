import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { ProjectBentoCard } from "../components/ProjectBentoCard";
import { SectionHeader } from "../components/SectionHeader";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import {
  experience as experienceData,
  experienceYearsToWords,
} from "../data/experience";
import {
  projectsCountToWords,
  projects as projectsData,
} from "../data/projects";
import { skills as skillsData } from "../data/skills";
import { stats } from "../data/stats";
import { tickerItems } from "../data/ticker";
import { useCursorSpring } from "../hooks/useCursorSpring";
import { useLocalTime } from "../hooks/useLocalTime";
import { neon, resolveColor } from "./neon/palette";

const projects = projectsData.map((p) => ({ ...p, color: resolveColor(p) }));
const experience = experienceData.map((e) => ({
  ...e,
  color: resolveColor(e),
}));
const skills = skillsData.map((s) => ({ ...s, color: resolveColor(s) }));
const ticker = tickerItems.map((t) => ({ ...t, color: resolveColor(t) }));

const SKILL_SPAN = [
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
];

const CURRENT_FOCUS = [
  "Advanced frontend architecture",
  "Scalable UI systems",
  "AI-powered web apps",
  "System design & HLD",
];

export default function Neon() {
  const { x: cursorXSpring, y: cursorYSpring } = useCursorSpring();
  const time = useLocalTime();

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundColor: "#050505",
        color: "#e5e5e5",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Base layers */}
      <div className="fixed inset-0 bg-base pointer-events-none" />
      <div className="grain" />

      {/* Soft cursor glow */}
      <motion.div
        className="cursor-glow"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />

      {/* ============== NAV ============== */}
      <nav className="nav-dark sticky top-0 z-40">
        <div className="max-w-300 mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full pulse-dot"
              style={{ backgroundColor: neon.lime }}
            />
            <span className="mono text-[12px] tracking-wide">
              pranjal.sinha
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 text-[12px] text-dim mono">
              {["about", "work", "stack", "log", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="hover:text-white transition hidden sm:inline"
                >
                  {link}
                </a>
              ))}
            </div>
            <ThemeSwitcher variant="dark" />
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-300 mx-auto px-6 py-10">
        {/* ============== HERO ============== */}
        <section className="pt-8 pb-6">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div className="chip">
              <div
                className="w-1.5 h-1.5 rounded-full pulse-dot"
                style={{ backgroundColor: neon.lime }}
              />
              <span style={{ color: neon.lime }}>Available</span>
              <span className="text-dim">· for senior frontend roles</span>
            </div>
            <div className="mono text-[11px] text-dim tracking-wider hidden sm:flex gap-4">
              <span>PUNE · IN</span>
              <span>·</span>
              <span>{time} IST</span>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
          >
            A frontend engineer
            <br />
            crafting{" "}
            <span className="hero-accent serif italic font-normal">
              intelligent
            </span>{" "}
            interfaces
            <br />
            for the modern web.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-mid text-[17px] mt-8 max-w-xl leading-normal"
          >
            {experienceYearsToWords} years in. Full-stack-focused software
            engineer translating complex AI/ML workflows into interfaces
            designed to feel effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-[13px] font-medium inline-flex items-center gap-2 transition hover:scale-[1.02]"
              style={{ background: neon.lime, color: "#050505" }}
            >
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#work"
              className="mono text-[13px] text-mid hover:text-white transition"
            >
              view work →
            </a>
          </motion.div>
        </section>

        {/* ============== BENTO GRID — STATS + ABOUT ============== */}
        <section id="about" className="pt-12 grid grid-cols-12 gap-4">
          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="card card-accent card-glow col-span-12 p-10 md:p-12 min-h-110 flex flex-col justify-between"
            style={{ "--accent": neon.lime }}
          >
            <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
            <div>
              <div className="mono text-[11px] tracking-wider text-dim mb-6">
                // THE SUMMARY
              </div>
              <h2
                className="serif italic"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  lineHeight: 1.08,
                  color: "#fafafa",
                }}
              >
                Full-stack-focused engineer turning complex{" "}
                <span style={{ color: neon.lime }}>AI/ML workflows</span> into
                interfaces people actually want to use.
              </h2>
            </div>
            <p className="text-mid text-[15px] leading-[1.6] mt-10">
              Strong expertise in React, TypeScript, and Next.js. Currently
              deployed as a Frontend Specialist Engineer, building
              enterprise-grade applications and AI-driven dashboards that
              translate complex backend workflows into intuitive UIs. A proven
              collaborator across design, backend, and product — focused on
              clean, testable, performance-optimized code.
            </p>
          </motion.div>

          {/* Stat cards */}
          {stats.map(({ label, value, sub, color, icon: Icon, size }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05 }}
              className="card card-accent col-span-12 md:col-span-4 p-8 min-h-52.5 flex flex-col justify-between"
              style={{ "--accent": color }}
            >
              <div className="flex items-center justify-between">
                <div className="mono text-[10px] tracking-wider text-dim">
                  {label}
                </div>
                <Icon className="w-3.5 h-3.5" style={{ color }} />
              </div>
              <div>
                <div
                  className="big-num"
                  style={{
                    fontSize: size,
                    color,
                    textShadow: `0 0 32px ${color}30`,
                  }}
                >
                  {value}
                </div>
                <div className="text-mid text-[13px] mt-1">{sub}</div>
              </div>
            </motion.div>
          ))}

          {/* Current role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="card card-accent card-glow col-span-12 md:col-span-7 p-8 md:p-10 min-h-60 flex flex-col justify-between"
            style={{ "--accent": neon.amber }}
          >
            <div className="flex items-center justify-between">
              <div className="mono text-[10px] tracking-wider text-dim">
                // CURRENT ASSIGNMENT
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: neon.lime }}
                />
                <span className="mono text-[10px]" style={{ color: neon.lime }}>
                  ACTIVE
                </span>
              </div>
            </div>
            <div>
              <div
                className="serif italic text-[48px] md:text-[60px] leading-none"
                style={{ color: "#fafafa" }}
              >
                {experience[0].company}
              </div>
              <div className="text-mid text-[15px] mt-2">
                {experience[0].role} · {experience[0].period}
              </div>
              <div className="text-dim text-[13px] mt-1">
                Crafting frontend technologies and interfaces for enterprise
                clients, with a focus on AI-driven applications and scalable UI
                systems.
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="card card-accent col-span-6 md:col-span-3 p-8 min-h-60 flex flex-col justify-between"
            style={{ "--accent": neon.sky }}
          >
            <div className="mono text-[10px] tracking-wider text-dim">
              // LOCATION
            </div>
            <div>
              <div
                className="serif italic text-[28px] leading-tight"
                style={{ color: "#fafafa" }}
              >
                Pune,
                <br />
                Maharashtra
              </div>
              <div className="mono text-[10px] mt-3 text-dim">
                18.52°N · 73.85°E
              </div>
              <div
                className="mono text-[11px] mt-4"
                style={{ color: neon.sky }}
              >
                {time} IST
              </div>
            </div>
          </motion.div>

          {/* Shipped count */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="card card-accent col-span-6 md:col-span-2 p-6 min-h-60 flex flex-col justify-between"
            style={{ "--accent": neon.coral }}
          >
            <div className="mono text-[10px] tracking-wider text-dim">
              // SHIPPED
            </div>
            <div>
              <div
                className="big-num text-[72px]"
                style={{
                  color: neon.coral,
                  textShadow: `0 0 28px ${neon.coral}30`,
                }}
              >
                {projects.length}
              </div>
              <div className="text-mid text-[12px]">projects</div>
            </div>
          </motion.div>
        </section>

        {/* ============== TICKER ============== */}
        <section
          className="py-6 mt-6 border-y overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex marquee-track whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 pr-8">
                {ticker.map((w, j) => (
                  <React.Fragment key={j}>
                    <span
                      className="serif italic text-2xl"
                      style={{ color: w.color }}
                    >
                      {w.text}
                    </span>
                    <span className="mono text-sm text-dim">/</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ============== CAPABILITIES ============== */}
        <section className="pt-16">
          <SectionHeader
            label="01 — CAPABILITIES"
            title="What I build."
            color={neon.lime}
          />
          <div className="grid grid-cols-12 gap-4">
            {[
              {
                num: "// 01",
                accent: neon.cyan,
                heading: (
                  <>
                    Component-driven. Pixel-perfect.{" "}
                    <span style={{ color: neon.cyan }}>Performance-first.</span>
                  </>
                ),
                body: "Strong experience designing component-driven architectures and building reusable UI systems that improve development speed, maintainability, and consistency across large applications. Fluent in the React ecosystem — Hooks, Redux Toolkit, Context API, Next.js — and equally comfortable translating a Figma file into a pixel-exact, responsive, accessible interface.",
              },
              {
                num: "// 02",
                accent: neon.magenta,
                heading: (
                  <>
                    AI interfaces. Live dashboards.{" "}
                    <span style={{ color: neon.magenta }}>Real-time data.</span>
                  </>
                ),
                body: "Built interactive dashboards and visualization systems to monitor AI agent pipelines — live logs, latency metrics, and execution states — using modern frontend visualization libraries. Hands-on integrating REST and GraphQL APIs with backend teams to design efficient contracts and optimized data flows.",
              },
            ].map(({ num, accent, heading, body }) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="card card-accent card-glow col-span-12 md:col-span-6 p-10 min-h-105 flex flex-col justify-between"
                style={{ "--accent": accent }}
              >
                <div>
                  <div className="mono text-[10px] tracking-wider text-dim mb-4">
                    {num}
                  </div>
                  <h3
                    className="serif italic text-[32px] md:text-[36px] leading-[1.1] mb-5"
                    style={{ color: "#fafafa" }}
                  >
                    {heading}
                  </h3>
                  <p className="text-mid text-[15px] leading-[1.65]">{body}</p>
                </div>
                <a className="arrow-link mt-6" style={{ "--accent": accent }}>
                  Read more →
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============== WORK / PROJECTS ============== */}
        <section id="work" className="pt-16">
          <SectionHeader
            label="02 — WORK"
            title={`${projectsCountToWords} selected projects.`}
            color={neon.magenta}
          />
          <div className="grid grid-cols-12 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="col-span-12 lg:col-span-4"
              >
                <ProjectBentoCard p={p} size="medium" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============== STACK / SKILLS ============== */}
        <section id="stack" className="pt-16">
          <SectionHeader
            label="03 — STACK"
            title="The complete toolset."
            color={neon.cyan}
          />
          <div className="grid grid-cols-12 gap-4">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                  className={SKILL_SPAN[i]}
                  style={{ "--accent": s.color }}
                >
                  <div className="card card-accent p-8 min-h-60 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="mono text-[10px] tracking-wider text-dim mb-3">
                          // 0{i + 1}
                        </div>
                        <h3
                          className="text-[20px] font-semibold"
                          style={{ color: "#fafafa", letterSpacing: "-0.02em" }}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{
                          background: `${s.color}10`,
                          border: `1px solid ${s.color}30`,
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: s.color }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-6">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="skill-chip"
                          style={{ "--accent": s.color }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============== DOCTRINE + FOCUS ============== */}
        <section className="pt-10 grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="card card-accent card-glow col-span-12 md:col-span-8 p-10 min-h-70 flex flex-col justify-between"
            style={{ "--accent": neon.amber }}
          >
            <div>
              <div className="mono text-[10px] tracking-wider text-dim mb-4">
                // OPERATIONAL DOCTRINE
              </div>
              <h3
                className="serif italic text-[32px] md:text-[40px] leading-[1.05]"
                style={{ color: "#fafafa" }}
              >
                From <span style={{ color: neon.amber }}>requirement</span> to
                production — and everything in between.
              </h3>
            </div>
            <p className="text-mid text-[15px] leading-[1.6] max-w-xl mt-6">
              Comfortable across the full development lifecycle — requirement
              analysis, UI architecture, development, testing, and production
              issue resolution. A strong collaborator in Agile cross-functional
              teams, working with designers, backend engineers, and product
              managers to deliver production-ready features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card card-accent card-glow col-span-12 md:col-span-4 p-8 min-h-70 flex flex-col justify-between"
            style={{ "--accent": neon.mint }}
          >
            <div>
              <div className="mono text-[10px] tracking-wider text-dim mb-3">
                // CURRENT FOCUS
              </div>
              <h3
                className="serif italic text-[24px] leading-[1.1] mb-5"
                style={{ color: "#fafafa" }}
              >
                Deeper magics, pursued.
              </h3>
            </div>
            <div className="space-y-2.5">
              {CURRENT_FOCUS.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: neon.mint }}
                  />
                  <span className="text-mid text-[13px]">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ============== EXPERIENCE LOG ============== */}
        <section id="log" className="pt-16">
          <SectionHeader
            label="04 — LOG"
            title="Service record."
            color={neon.amber}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="card p-8 md:p-10"
          >
            <div
              className="divide-y"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="py-6 first:pt-0 last:pb-0 grid grid-cols-12 gap-4 items-center"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-[14px] font-bold"
                      style={{
                        background: e.active
                          ? `${e.color}15`
                          : "rgba(255,255,255,0.04)",
                        border: `1px solid ${e.active ? e.color + "40" : "rgba(255,255,255,0.08)"}`,
                        color: e.active ? e.color : "#a3a3a3",
                      }}
                    >
                      {e.company[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <div
                          className="text-[18px] font-semibold"
                          style={{
                            color: "#fafafa",
                            letterSpacing: "-0.015em",
                          }}
                        >
                          {e.company}
                        </div>
                        {e.active && (
                          <div
                            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                            style={{
                              background: `${e.color}15`,
                              border: `1px solid ${e.color}40`,
                            }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full pulse-dot"
                              style={{ backgroundColor: e.color }}
                            />
                            <span
                              className="mono text-[10px]"
                              style={{ color: e.color }}
                            >
                              active
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-mid text-[14px]">
                    {e.role}
                  </div>
                  <div className="col-span-12 md:col-span-3 mono text-[12px] text-dim md:text-right">
                    {e.period}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ============== CONTACT ============== */}
        <section id="contact" className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="card card-accent card-glow relative p-12 md:p-20 text-center overflow-hidden"
            style={{ "--accent": neon.lime }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at top, ${neon.lime}08 0%, transparent 50%), radial-gradient(ellipse at bottom, ${neon.cyan}08 0%, transparent 50%)`,
              }}
            />
            <div className="relative">
              <div className="chip mx-auto mb-6">
                <div
                  className="w-1.5 h-1.5 rounded-full pulse-dot"
                  style={{ backgroundColor: neon.lime }}
                />
                <span style={{ color: neon.lime }}>Available</span>
              </div>
              <h2
                className="hero-title mb-6"
                style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
              >
                Let's build
                <br />
                <span className="hero-accent serif italic font-normal">
                  something good.
                </span>
              </h2>
              <p className="text-mid text-[17px] max-w-xl mx-auto mb-10">
                Open to senior frontend roles and interesting collaborations.
                Fastest reply is on email.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a
                  href="mailto:shikhar.pranjal3@gmail.com"
                  className="px-6 py-3 rounded-full text-[14px] font-medium inline-flex items-center gap-2 transition hover:scale-[1.02]"
                  style={{ background: neon.lime, color: "#050505" }}
                >
                  Email me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjalshikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-[14px] font-medium border transition hover:border-white/30"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "#e5e5e5",
                  }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pranjalshikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-[14px] font-medium border transition hover:border-white/30"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "#e5e5e5",
                  }}
                >
                  GitHub
                </a>
              </div>
              <div className="mono text-[12px] text-dim mt-10 tracking-wider">
                shikhar.pranjal3@gmail.com
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============== FOOTER ============== */}
        <footer
          className="pt-12 pb-8 mt-12 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mono text-[11px] text-dim tracking-wider">
            <div>© 2026 pranjal shikhar sinha</div>
            <div className="flex items-center gap-2">
              {[neon.lime, neon.cyan, neon.magenta].map((c, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full dot-${i + 1}`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <span className="ml-2">pune · india</span>
            </div>
            <div>react · typescript · craft</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
