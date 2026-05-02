import React from "react";
import { FadeUp } from "../components/FadeUp";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import ProjectPanel from "../components/comics/ProjectPanel";
import ComicChapter from "../components/comics/comicChapter";
import { experience, experienceYears } from "../data/experience";
import { projects, projectsCountToWords } from "../data/projects";
import { skills } from "../data/skills";
import "../styles/comics.css";
import { getMonths, toRoman } from "../utils/date";

export default function Comics() {
  return (
    <div
      className="relative min-h-screen comics-container"
      style={{
        backgroundColor: "#f5e9cf",
        color: "#0a0a0a",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* NEWSPRINT BG layer */}
      <div className="fixed inset-0 newsprint pointer-events-none" />
      {/* Global halftone dot overlay */}
      <div className="fixed inset-0 dots-black pointer-events-none opacity-[0.04]" />

      {/* ============== NAV ============== */}
      <nav className="nav-comic sticky top-0 z-50">
        <div className="max-w-300 mx-auto px-5 h-12 flex items-center justify-between">
          <div className="bangers text-xl" style={{ letterSpacing: "0.08em" }}>
            ★ PRANJAL COMICS ★
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5 bangers text-sm tracking-wider">
              <a
                href="#origin"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                ORIGIN
              </a>
              <a
                href="#powers"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                POWERS
              </a>
              <a
                href="#issues"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                ISSUES
              </a>
              <a
                href="#record"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                RECORD
              </a>
              <a
                href="#fanmail"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                FAN MAIL
              </a>
            </div>
            <ThemeSwitcher variant="comic" />
          </div>
        </div>
      </nav>

      {/* ============== ISSUE HEADER STRIP ============== */}
      <div className="issue-strip relative z-10">
        <div className="max-w-300 mx-auto px-5 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <div
              className="bangers text-2xl"
              style={{ color: "#fbbf24", letterSpacing: "0.1em" }}
            >
              {getMonths(new Date().getMonth())} {new Date().getFullYear()} ★
              No. 001
            </div>
            <div className="bangers text-sm opacity-80">
              ONE WIZARD · TEN SKILLS · {projectsCountToWords} MISSIONS · ONE
              FRONTEND
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bangers text-lg px-3 py-0.5 bg-yellow-400 text-black">
              ₹ 35 / FREE
            </div>
            <div className="bangers text-sm">
              APPROVED ★ BY THE CODE AUTHORITY
            </div>
          </div>
        </div>
      </div>

      {/* ============== HERO / COVER ============== */}
      <section className="relative z-10 max-w-300 mx-auto px-5 pt-12 pb-8">
        <div
          className="panel-comic relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          }}
        >
          {/* Action burst bg */}
          <div className="absolute inset-0 action-burst opacity-25" />
          {/* Halftone dots bottom left */}
          <div className="absolute bottom-0 left-0 w-60 h-60 dots-red opacity-40" />
          {/* Speed lines top right */}
          <div className="absolute top-0 right-0 w-48 h-48 speed-lines opacity-15" />

          <div className="relative p-8 md:p-16">
            {/* Caption box top */}
            <div className="caption-box inline-block text-[14px] md:text-[16px] mb-6">
              ★ ORIGIN STORY: CHAPTER ONE ★<br />
              MEANWHILE, IN PUNE, INDIA...
            </div>

            {/* TITLE */}
            <h1 className="title-huge">PRANJAL</h1>
            <h2
              className="bowlby mt-4"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)",
                color: "#0a0a0a",
                lineHeight: 1,
                textShadow: "3px 3px 0 #dc2626",
              }}
            >
              THE INTERFACE
              <br />
              ENGINEER!
            </h2>

            {/* POW starburst floating */}
            <div className="absolute top-8 right-8 hidden md:block shake-slow">
              <div
                className="starburst"
                style={{ fontSize: "2.2rem", padding: "40px" }}
              >
                {experienceYears}
                <br />
                YRS!
              </div>
            </div>

            {/* Speech bubble */}
            <div className="mt-10 max-w-xl">
              <div className="speech">
                <p className="marker text-[18px] md:text-[22px] leading-tight">
                  "{experienceYears} years in the field! A frontend-focused
                  software engineer turning complex AI/ML workflows into
                  interfaces designed for the fastest user in the universe!"
                </p>
                <div
                  className="bangers text-[12px] mt-2 text-right"
                  style={{ color: "#dc2626" }}
                >
                  — OUR HERO!
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { k: experienceYears, v: "YEARS!", color: "#dc2626" },
                { k: "35%", v: "LIGHTER BUNDLES!", color: "#3b82f6" },
                { k: "95%", v: "TEST COVERAGE!", color: "#16a34a" },
                { k: projects.length, v: "ISSUES SHIPPED!", color: "#7c3aed" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="panel-thin p-4 text-center relative"
                  style={{ background: "#fef3c7" }}
                >
                  <div
                    className="bowlby text-4xl md:text-5xl"
                    style={{
                      color: s.color,
                      WebkitTextStroke: "2px #0a0a0a",
                      textShadow: "3px 3px 0 #0a0a0a",
                    }}
                  >
                    {s.k}
                  </div>
                  <div
                    className="bangers text-xs mt-1"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== MARQUEE: ONOMATOPOEIA ============== */}
      <div className="relative z-10 my-6">
        <div className="comic-hr" />
        <div className="bg-black py-4 overflow-hidden">
          <div className="flex marq whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 pr-6">
                {[
                  "POW!",
                  "REACT.JS",
                  "BAM!",
                  "TYPESCRIPT",
                  "WHAM!",
                  "NEXT.JS",
                  "ZAP!",
                  "AI INTERFACES",
                  "KAPOW!",
                  "REDUX",
                  "BOOM!",
                  "TAILWIND",
                  "SNIKT!",
                  "AZURE",
                  "THWIP!",
                  "GRAPHQL",
                ].map((w, j) => (
                  <React.Fragment key={j}>
                    <span
                      className="bangers text-4xl"
                      style={{
                        color: [
                          "#fbbf24",
                          "#dc2626",
                          "#3b82f6",
                          "#16a34a",
                          "#f97316",
                        ][j % 5],
                        WebkitTextStroke: "2px #0a0a0a",
                        textShadow: "3px 3px 0 #0a0a0a",
                        transform: `rotate(${(j % 2 === 0 ? -1 : 1) * (2 + (j % 3))}deg)`,
                        display: "inline-block",
                      }}
                    >
                      {w}
                    </span>
                    <span className="text-2xl" style={{ color: "#fbbf24" }}>
                      ★
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="comic-hr" />
      </div>

      {/* ============== ORIGIN STORY / SUMMARY ============== */}
      <section
        id="origin"
        className="relative z-10 max-w-300 mx-auto px-5 py-12"
      >
        <ComicChapter num="01" label="ORIGIN STORY" sfx="ORIGIN!" />

        <FadeUp>
          <div
            className="panel-comic p-8 md:p-12 relative overflow-hidden"
            style={{ background: "#fef3c7" }}
          >
            {/* Corner dots */}
            <div className="absolute top-0 right-0 w-40 h-40 dots-red opacity-60" />
            <div className="absolute bottom-0 left-0 w-32 h-32 dots-blue opacity-50" />

            {/* CLASSIFIED stamp */}
            <div className="absolute top-6 right-6 stamp text-sm">
              TRUE STORY!
            </div>

            <div className="relative">
              <div className="caption-box inline-block mb-6 text-[15px]">
                ★ OUR TALE BEGINS... ★
              </div>

              <h2
                className="bangers leading-[0.95] mb-8"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
              >
                A FULL-STACK-FOCUSED
                <br />
                <span
                  style={{ color: "#dc2626", WebkitTextStroke: "1px #0a0a0a" }}
                >
                  SOFTWARE ENGINEER
                </span>
                <br />
                WITH{" "}
                <span
                  style={{
                    background: "#fbbf24",
                    padding: "0 12px",
                    border: "3px solid #0a0a0a",
                    display: "inline-block",
                    transform: "rotate(-2deg)",
                    boxShadow: "4px 4px 0 #0a0a0a",
                  }}
                >
                  {experienceYears} YEARS
                </span>{" "}
                OF EXPERIENCE!
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                  <div className="tag-comic mb-3">★ FIELD REPORT ★</div>
                  <p className="inter text-[16px] md:text-[18px] leading-[1.6] font-medium">
                    Strong expertise in{" "}
                    <strong style={{ background: "#fbbf24", padding: "0 4px" }}>
                      React, TypeScript, and Next.js
                    </strong>
                    , with hands-on experience translating complex AI/ML
                    workflows into intuitive user experiences. Currently
                    deployed as Digital Specialist Engineer, developing
                    enterprise-grade applications and AI-driven dashboards.
                  </p>
                </div>
                <div>
                  <div
                    className="tag-comic mb-3"
                    style={{ background: "#dc2626", color: "#fef3c7" }}
                  >
                    ★ THE MISSION ★
                  </div>
                  <p className="inter text-[16px] md:text-[18px] leading-[1.6] font-medium">
                    A proven collaborator across the guilds of{" "}
                    <strong
                      style={{
                        background: "#3b82f6",
                        color: "#fef3c7",
                        padding: "0 4px",
                      }}
                    >
                      design, backend, and product
                    </strong>{" "}
                    — with an unwavering focus on clean, testable, and
                    performance-optimized code. Building component-driven
                    architectures that scale.
                  </p>
                </div>
              </div>

              {/* Bottom sfx */}
              <div className="mt-10 text-center">
                <div
                  className="sfx-text text-7xl md:text-8xl"
                  style={{ color: "#dc2626" }}
                >
                  AND SO... IT BEGINS!
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============== TWO-PANEL ABOUT ============== */}
      <section className="relative z-10 max-w-300 mx-auto px-5 py-12">
        <ComicChapter num="02" label="POWERS & ABILITIES" sfx="POWER UP!" />

        <div className="grid grid-cols-12 gap-5">
          <FadeUp className="col-span-12 md:col-span-7">
            <div
              className="panel-comic p-8 md:p-10 relative min-h-125 flex flex-col justify-between overflow-hidden"
              style={{ background: "#3b82f6", color: "#fef3c7" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 dots-yellow opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 speed-lines opacity-20" />

              <div className="relative">
                <div
                  className="caption-box inline-block mb-5"
                  style={{ background: "#fbbf24", color: "#0a0a0a" }}
                >
                  ★ POWER #01: COMPONENT CRAFT ★
                </div>
                <h3
                  className="bangers text-4xl md:text-6xl leading-[0.95] mb-6"
                  style={{
                    WebkitTextStroke: "2px #0a0a0a",
                    textShadow: "4px 4px 0 #0a0a0a",
                  }}
                >
                  COMPONENT-DRIVEN!
                  <br />
                  PIXEL-PERFECT!
                  <br />
                  <span style={{ color: "#fbbf24" }}>PERFORMANCE-FIRST!</span>
                </h3>
              </div>

              <div
                className="relative thought-bubble"
                style={{ color: "#0a0a0a", maxWidth: "440px" }}
              >
                <p className="inter text-[15px] md:text-[16px] leading-normal font-medium">
                  Strong experience designing component-driven architectures and
                  reusable UI systems. Fluent in the React ecosystem — Hooks,
                  Redux Toolkit, Context API, Next.js — and translating Figma
                  into pixel-exact, responsive, accessible interfaces.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-5">
            <div
              className="panel-comic p-8 md:p-10 relative min-h-125 flex flex-col justify-between overflow-hidden"
              style={{ background: "#dc2626", color: "#fef3c7" }}
            >
              <div className="absolute inset-0 action-burst opacity-20" />
              <div className="absolute top-0 right-0 w-32 h-32 dots-yellow opacity-50" />

              <div className="relative">
                <div className="caption-box inline-block mb-5">
                  ★ POWER #02: AI INTERFACES ★
                </div>
                <h3
                  className="bangers text-4xl md:text-5xl leading-[0.95] mb-6"
                  style={{
                    WebkitTextStroke: "2px #0a0a0a",
                    textShadow: "4px 4px 0 #0a0a0a",
                  }}
                >
                  AI INTERFACES!
                  <br />
                  <span style={{ color: "#fbbf24" }}>LIVE DASHBOARDS!</span>
                  <br />
                  REAL-TIME DATA!
                </h3>
              </div>

              <div
                className="relative thought-bubble"
                style={{ color: "#0a0a0a", maxWidth: "380px" }}
              >
                <p className="inter text-[15px] leading-normal font-medium">
                  Built interactive dashboards for AI agent pipelines — live
                  logs, latency metrics, execution states. Integrated REST and
                  GraphQL APIs hand-in-hand with backend teams.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== KPI POW PANELS ============== */}
      <section className="relative z-10 max-w-300 mx-auto px-5 py-12">
        <div className="grid grid-cols-12 gap-5">
          {[
            {
              k: "35%",
              v: "LIGHTER BUNDLES!",
              desc: "Lazy loading, memoization, code splitting.",
              bg: "#dc2626",
              fg: "#fef3c7",
              sfx: "ZOOM!",
            },
            {
              k: "95%",
              v: "TEST COVERAGE!",
              desc: "Peak Jest + React Testing Library coverage.",
              bg: "#16a34a",
              fg: "#fef3c7",
              sfx: "SHIELD!",
            },
            {
              k: experienceYears,
              v: "YEARS ACTIVE!",
              desc: "Shipping production interfaces non-stop.",
              bg: "#7c3aed",
              fg: "#fef3c7",
              sfx: "BAM!",
            },
          ].map((s, i) => (
            <FadeUp key={i} className="col-span-12 md:col-span-4">
              <div
                className="panel-comic p-8 relative min-h-85 flex flex-col justify-between overflow-hidden"
                style={{ background: s.bg, color: s.fg }}
              >
                <div className="absolute inset-0 dots-yellow opacity-20" />
                <div
                  className="absolute top-2 right-2 sfx-text text-3xl"
                  style={{ transform: "rotate(12deg)" }}
                >
                  {s.sfx}
                </div>

                <div className="relative flex items-start justify-between">
                  <div
                    className="tag-comic"
                    style={{ background: "#fef3c7", color: "#0a0a0a" }}
                  >
                    STAT #0{i + 1}
                  </div>
                </div>

                <div className="relative">
                  <div className="giant-num text-8xl md:text-9xl">{s.k}</div>
                  <div
                    className="bangers text-2xl mt-2"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {s.v}
                  </div>
                  <p className="inter text-[14px] mt-3 font-medium opacity-90">
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============== ISSUES / PROJECTS ============== */}
      <section
        id="issues"
        className="relative z-10 max-w-300 mx-auto px-5 py-12"
      >
        <ComicChapter
          num="03"
          label="THE COMPLETE COLLECTION"
          sfx={`${projectsCountToWords} ISSUES!`}
        />

        <div className="grid grid-cols-12 gap-5">
          {projects.slice(0, 2).map((p, i) => (
            <FadeUp key={p.name} className="col-span-12 md:col-span-6">
              <ProjectPanel p={p} size="large" />
            </FadeUp>
          ))}
          {projects.slice(2, 5).map((p, i) => (
            <FadeUp key={p.name} className="col-span-12 md:col-span-4">
              <ProjectPanel p={p} size="medium" />
            </FadeUp>
          ))}
          {projects.slice(5, 9).map((p, i) => (
            <FadeUp key={p.name} className="col-span-6 md:col-span-3">
              <ProjectPanel p={p} size="small" />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============== ARSENAL / SKILLS ============== */}
      <section
        id="powers"
        className="relative z-10 max-w-300 mx-auto px-5 py-12"
      >
        <ComicChapter num="04" label="ALL SKILLS REVEALED!" sfx="SKILLS!" />

        <div className="grid grid-cols-12 gap-5">
          {skills.map((s, i) => {
            const spanMap = [
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
            const darkFg =
              ["#fbbf24", "#3b82f6", "#dc2626", "#f97316"].includes(s.bg) ||
              s.bg === "#0a0a0a" ||
              s.bg === "#7c3aed" ||
              s.bg === "#16a34a" ||
              s.bg === "#ec4899" ||
              s.bg === "#0ea5e9";
            const textColor =
              s.bg === "#fbbf24" || s.bg === "#f97316" ? "#0a0a0a" : "#fef3c7";

            return (
              <FadeUp key={s.title} className={spanMap[i]}>
                <div
                  className="panel-comic p-6 md:p-8 relative min-h-70 flex flex-col justify-between overflow-hidden"
                  style={{ background: s.bg, color: textColor }}
                >
                  {/* Halftone decoration */}
                  <div className="absolute top-0 right-0 w-28 h-28 dots-yellow opacity-30" />
                  <div
                    className="absolute -bottom-4 -left-4 text-5xl"
                    style={{ transform: "rotate(-12deg)", opacity: 0.25 }}
                  >
                    {s.sfx}
                  </div>

                  <div className="relative flex items-start justify-between">
                    <div>
                      <div
                        className="tag-comic mb-3"
                        style={{ background: "#0a0a0a", color: "#fbbf24" }}
                      >
                        POWER #{String(i + 1).padStart(2, "0")}
                      </div>
                      <div
                        className="bangers text-sm"
                        style={{ letterSpacing: "0.1em", opacity: 0.9 }}
                      >
                        {s.subtitle}
                      </div>
                    </div>
                    <div className="text-4xl">{s.sfx}</div>
                  </div>

                  <div className="relative">
                    <h3
                      className="bangers text-4xl md:text-5xl leading-[0.95] mt-4"
                      style={{
                        WebkitTextStroke:
                          textColor === "#fef3c7" ? "1px #0a0a0a" : "0",
                        textShadow:
                          textColor === "#fef3c7"
                            ? "3px 3px 0 #0a0a0a"
                            : "3px 3px 0 " +
                              (s.bg === "#fbbf24" ? "#dc2626" : "#0a0a0a"),
                      }}
                    >
                      {s.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="inter text-[12px] font-semibold px-3 py-1.5"
                          style={{
                            background: "#fef3c7",
                            border: "2px solid #0a0a0a",
                            color: "#0a0a0a",
                            boxShadow: "2px 2px 0 #0a0a0a",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ============== DOCTRINE + PURSUING ============== */}
      <section className="relative z-10 max-w-300 mx-auto px-5 py-12">
        <div className="grid grid-cols-12 gap-5">
          <FadeUp className="col-span-12 md:col-span-8">
            <div
              className="panel-comic p-8 md:p-12 relative min-h-90 flex flex-col justify-between"
              style={{ background: "#fef3c7" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 dots-red opacity-40" />
              <div className="relative">
                {/* <div className="caption-box inline-block mb-5">
                  ★ THE CREED ★
                </div> */}
                <h3 className="bangers text-4xl md:text-5xl leading-[0.95] mb-5">
                  FROM{" "}
                  <span
                    style={{
                      background: "#dc2626",
                      color: "#fef3c7",
                      padding: "0 10px",
                      border: "3px solid #0a0a0a",
                      display: "inline-block",
                      transform: "rotate(-1deg)",
                    }}
                  >
                    REQUIREMENT
                  </span>{" "}
                  TO{" "}
                  <span
                    style={{
                      background: "#16a34a",
                      color: "#fef3c7",
                      padding: "0 10px",
                      border: "3px solid #0a0a0a",
                      display: "inline-block",
                      transform: "rotate(1deg)",
                    }}
                  >
                    PRODUCTION!
                  </span>
                </h3>
                <p className="inter text-[16px] leading-[1.6] font-medium max-w-xl">
                  Comfortable across the full development lifecycle —
                  requirement analysis, UI architecture, development, testing,
                  and production issue resolution. A strong collaborator in
                  Agile cross-functional teams, working with designers, backend
                  engineers, and product managers to deliver production-ready
                  features!
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-4">
            <div
              className="panel-comic p-8 relative min-h-90 flex flex-col justify-between overflow-hidden"
              style={{ background: "#dc2626", color: "#fef3c7" }}
            >
              <div className="absolute inset-0 action-burst opacity-15" />
              <div className="relative">
                <div className="caption-box inline-block mb-4">
                  ★ NEXT ISSUE ★
                </div>
                <h3
                  className="bangers text-4xl md:text-5xl leading-[0.95]"
                  style={{
                    WebkitTextStroke: "2px #0a0a0a",
                    textShadow: "3px 3px 0 #0a0a0a",
                    color: "#fbbf24",
                  }}
                >
                  COMING
                  <br />
                  SOON!
                </h3>
              </div>
              <div className="relative inter text-[15px] font-semibold space-y-1.5 leading-tight">
                <div>→ Advanced frontend architecture</div>
                <div>→ Scalable UI systems</div>
                <div>→ AI-powered web apps</div>
                <div
                  className="bangers text-2xl mt-3"
                  style={{ color: "#fbbf24", letterSpacing: "0.05em" }}
                >
                  STAY TUNED, TRUE BELIEVER!
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== SERVICE RECORD ============== */}
      <section
        id="record"
        className="relative z-10 max-w-300 mx-auto px-5 py-12"
      >
        <ComicChapter num="05" label="THE SERVICE LOG" sfx="HISTORY!" />

        <FadeUp>
          <div
            className="panel-comic p-6 md:p-10 relative overflow-hidden"
            style={{ background: "#fef3c7" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 dots-red opacity-30" />

            <div className="relative space-y-6">
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="panel-thin p-5 md:p-6 relative flex items-center gap-5 flex-wrap"
                  style={{ background: e.active ? "#fbbf24" : "#ffffff" }}
                >
                  {/* Insignia */}
                  <div
                    className="shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bowlby text-4xl md:text-5xl"
                    style={{
                      background: e.active ? "#dc2626" : "#0a0a0a",
                      color: "#fbbf24",
                      border: "4px solid #0a0a0a",
                      boxShadow: "4px 4px 0 #0a0a0a",
                      transform: `rotate(${e.active ? -3 : 3}deg)`,
                      WebkitTextStroke: "1px #fef3c7",
                    }}
                  >
                    {e.insignia}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div
                        className="bangers text-3xl md:text-4xl"
                        style={{ letterSpacing: "0.04em" }}
                      >
                        {e.company}
                      </div>
                      {e.active && (
                        <div
                          className="bangers text-sm px-3 py-1"
                          style={{
                            background: "#dc2626",
                            color: "#fef3c7",
                            border: "2px solid #0a0a0a",
                            boxShadow: "2px 2px 0 #0a0a0a",
                            letterSpacing: "0.1em",
                          }}
                        >
                          ● CURRENT!
                        </div>
                      )}
                    </div>
                    <div className="inter text-[14px] md:text-[15px] font-semibold mt-1">
                      {e.role}
                    </div>
                  </div>

                  {/* Period */}
                  <div className="text-right">
                    <div
                      className="bangers text-sm"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {e.period}
                    </div>
                    <div className="inter text-[11px] mt-1 font-bold opacity-70">
                      {e.classification}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div
                className="sfx-text text-4xl md:text-5xl"
                style={{ color: "#dc2626" }}
              >
                TO BE CONTINUED...
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============== CONTACT / FAN MAIL ============== */}
      <section
        id="fanmail"
        className="relative z-10 max-w-300 mx-auto px-5 py-12"
      >
        <FadeUp>
          <div
            className="panel-comic p-8 md:p-16 relative text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #dc2626 100%)",
            }}
          >
            <div className="absolute inset-0 action-burst opacity-20" />
            <div className="absolute top-0 left-0 w-40 h-40 dots-black opacity-30" />
            <div className="absolute bottom-0 right-0 w-40 h-40 dots-black opacity-30" />

            <div className="relative">
              <div
                className="caption-box inline-block mb-6"
                style={{ background: "#0a0a0a", color: "#fbbf24" }}
              >
                ★ FAN MAIL · LETTERS TO THE HERO ★
              </div>

              <h2
                className="bowlby leading-[0.85] mb-6"
                style={{
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  color: "#fbbf24",
                  WebkitTextStroke: "4px #0a0a0a",
                  textShadow: "6px 6px 0 #0a0a0a",
                }}
              >
                ASSEMBLE!
              </h2>

              <div className="thought-bubble inline-block max-w-xl">
                <p
                  className="marker text-[18px] md:text-[22px] leading-tight"
                  style={{ color: "#0a0a0a" }}
                >
                  "Open to senior frontend roles and interesting collaborations.
                  Transmit via the channel of your choosing — the fastest signal
                  is email!"
                </p>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="mailto:shikhar.pranjal3@gmail.com"
                  className="bangers text-xl px-8 py-4 tracking-widest transition hover:scale-105 inline-block"
                  style={{
                    background: "#0a0a0a",
                    color: "#fbbf24",
                    border: "4px solid #0a0a0a",
                    boxShadow: "6px 6px 0 #fef3c7, 6px 6px 0 4px #0a0a0a",
                    transform: "rotate(-2deg)",
                  }}
                >
                  ⚡ SEND AN EMAIL!
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjalshikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bangers text-xl px-6 py-4 tracking-widest transition hover:scale-105 inline-block"
                  style={{
                    background: "#fef3c7",
                    color: "#0a0a0a",
                    border: "4px solid #0a0a0a",
                    boxShadow: "6px 6px 0 #0a0a0a",
                    transform: "rotate(1deg)",
                  }}
                >
                  LINKEDIN!
                </a>
                <a
                  href="https://github.com/pranjalshikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bangers text-xl px-6 py-4 tracking-widest transition hover:scale-105 inline-block"
                  style={{
                    background: "#fef3c7",
                    color: "#0a0a0a",
                    border: "4px solid #0a0a0a",
                    boxShadow: "6px 6px 0 #0a0a0a",
                    transform: "rotate(-1deg)",
                  }}
                >
                  GITHUB!
                </a>
              </div>

              <div
                className="mt-10 bangers text-sm md:text-base"
                style={{ color: "#0a0a0a", letterSpacing: "0.1em" }}
              >
                ✉️ shikhar.pranjal3@gmail.com ✉️
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============== END OF ISSUE FOOTER ============== */}
      <footer className="relative z-10 mt-10">
        <div className="comic-hr" />
        <div style={{ background: "#0a0a0a" }}>
          <div className="max-w-300 mx-auto px-5 py-12 text-center">
            <div
              className="bowlby"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                lineHeight: 0.85,
                color: "#fbbf24",
                WebkitTextStroke: "3px #fbbf24",
                textShadow: "5px 5px 0 #dc2626",
              }}
            >
              THE END!
            </div>
            <div
              className="bangers text-xl mt-4"
              style={{ color: "#fef3c7", letterSpacing: "0.1em" }}
            >
              ★ BUT WAIT — THERE'S MORE! ★
            </div>
            <div
              className="marker text-[16px] md:text-[18px] mt-4"
              style={{ color: "#fbbf24" }}
            >
              Pranjal will return in the next issue...
            </div>
            <div
              className="inter text-[12px] mt-6 opacity-70"
              style={{ color: "#fef3c7" }}
            >
              PRANJAL COMICS · {getMonths(new Date().getMonth())}{" "}
              {new Date().getFullYear()} · No. 001 · PUNE, INDIA
              <br />© {toRoman(new Date().getFullYear())} · ENGINEERED WITH
              REACT, TYPESCRIPT, AND ENTIRELY TOO MUCH CAFFEINE
            </div>
          </div>
        </div>
        <div className="comic-hr" />
      </footer>
    </div>
  );
}
