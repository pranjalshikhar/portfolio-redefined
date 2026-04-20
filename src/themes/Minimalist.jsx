import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { FadeUp } from "../components/FadeUp";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { experience, experienceYears } from "../data/experience";
import { projects, projectsCountToWords } from "../data/projects";
import { skills } from "../data/skills";

export default function Minimalist() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#fbfbfd",
        color: "#1d1d1f",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          letter-spacing: -0.015em;
        }

        /* Apple type scale */
        .apple-display {
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 1;
        }
        .apple-headline {
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.0625;
        }
        .apple-title {
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.1;
        }
        .apple-body {
          font-weight: 400;
          letter-spacing: -0.011em;
          line-height: 1.47;
        }
        .apple-eyebrow {
          font-weight: 500;
          letter-spacing: -0.005em;
          font-size: 14px;
        }

        .text-display { font-size: clamp(3rem, 7.5vw, 5.5rem); }
        .text-mega { font-size: clamp(2.5rem, 5vw, 4rem); }
        .text-title-1 { font-size: clamp(1.75rem, 3vw, 2.5rem); }
        .text-title-2 { font-size: clamp(1.5rem, 2vw, 2rem); }

        /* Apple blue for links */
        .link-apple {
          color: #0071e3;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: -0.011em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: opacity 0.2s;
        }
        .link-apple:hover { text-decoration: underline; }

        /* Apple buttons */
        .btn-primary {
          background: #0071e3;
          color: #fff;
          border-radius: 980px;
          padding: 12px 22px;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: -0.011em;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #0077ed; }

        .btn-secondary {
          background: transparent;
          color: #0071e3;
          border: 1px solid #0071e3;
          border-radius: 980px;
          padding: 12px 22px;
          font-size: 17px;
          font-weight: 400;
          transition: all 0.2s;
        }
        .btn-secondary:hover { background: #0071e3; color: #fff; }

        /* Cards — Apple uses 18-22px radius for hero cards */
        .tile {
          border-radius: 22px;
          overflow: hidden;
          position: relative;
          background: #fff;
        }

        .tile-dark { color: #f5f5f7; }
        .tile-light { color: #1d1d1f; }

        .noise-soft {
          position: absolute; inset: 0;
          opacity: 0.04;
          mix-blend-mode: overlay;
          pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }

        /* Nav */
        .nav-apple {
          background: rgba(251, 251, 253, 0.72);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .nav-link {
          font-size: 12px;
          color: #1d1d1f;
          opacity: 0.8;
          transition: opacity 0.2s;
          letter-spacing: -0.005em;
        }
        .nav-link:hover { opacity: 1; }

        /* Status dot */
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #30d158;
          animation: ping 2s infinite;
        }
        @keyframes ping {
          0%, 100% { box-shadow: 0 0 0 0 rgba(48,209,88,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(48,209,88,0); }
        }

        /* Subtle lift on tiles */
        .lift { transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
        .lift:hover { transform: translateY(-3px); }

        /* Apple's signature 4-unit gap */
        .apple-gap { gap: 10px; }
      `}</style>

      {/* NAV */}
      <nav className="nav-apple sticky top-0 z-50">
        <div className="max-w-[1024px] mx-auto px-5 h-11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M13.0355 10.6316C13.0152 8.23421 14.9899 7.03632 15.0813 6.9821C13.9142 5.28421 12.0964 5.05263 11.4547 5.03158C9.92258 4.87368 8.45146 5.92632 7.67447 5.92632C6.88329 5.92632 5.69599 5.05263 4.39607 5.07895C2.71857 5.10526 1.16258 6.05789 0.307 7.57368C-1.44675 10.6579 -0.142751 15.2 1.5271 17.7C2.36138 18.9263 3.33931 20.3026 4.62505 20.2526C5.88036 20.2 6.34761 19.4368 7.87329 19.4368C9.38532 19.4368 9.82189 20.2526 11.132 20.2263C12.4742 20.2 13.3187 18.9789 14.1238 17.7421C15.083 16.3316 15.4739 14.9526 15.4892 14.8842C15.4588 14.8737 13.0558 13.9474 13.0355 10.6316Z"
                fill="#1d1d1f"
              />
              <path
                d="M10.7022 3.58421C11.3794 2.73158 11.8415 1.55263 11.7146 0.357895C10.7327 0.4 9.52013 1.02105 8.81961 1.85789C8.19308 2.59474 7.63059 3.82105 7.77773 4.98947C8.87796 5.07368 10.0025 4.42632 10.7022 3.58421Z"
                fill="#1d1d1f"
              />
            </svg>
            <span className="text-[15px] font-medium tracking-tight">
              Pranjal
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-7">
              <a href="#summary" className="nav-link hidden sm:inline">
                Overview
              </a>
              <a href="#work" className="nav-link hidden sm:inline">
                Work
              </a>
              <a href="#skills" className="nav-link hidden sm:inline">
                Skills
              </a>
              <a href="#experience" className="nav-link hidden sm:inline">
                Experience
              </a>
              <a href="#contact" className="nav-link hidden sm:inline">
                Contact
              </a>
            </div>
            <ThemeSwitcher variant="light" />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="pt-16 pb-20 px-5"
      >
        <div className="max-w-[1024px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 mb-6"
          >
            <div className="status-dot" />
            <span className="apple-eyebrow text-[#1d1d1f]/70 text-[12px]">
              Available for senior frontend roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="apple-display text-display"
          >
            Pranjal Shikhar Sinha.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] md:text-[36px] apple-headline mt-4 text-[#1d1d1f]/90"
            style={{ letterSpacing: "-0.022em" }}
          >
            Engineered for the modern frontend.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="apple-body text-[19px] text-[#1d1d1f]/60 mt-5 max-w-2xl mx-auto"
          >
            A software engineer in Pune building scalable web applications and
            AI-driven interfaces. Three years in, and still obsessed with the
            craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#work"
              className="btn-primary inline-flex items-center gap-1.5"
            >
              See the work
            </a>
            <a href="#contact" className="link-apple">
              Get in touch <ChevronRightTiny />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================== */}
      {/* SUMMARY — hero-size card like apple.com's main product  */}
      {/* ====================================================== */}
      <Section id="summary">
        <FadeUp>
          <div
            className="tile tile-dark p-10 md:p-20 min-h-[560px] flex flex-col justify-between"
            style={{
              background:
                "radial-gradient(ellipse at 20% 20%, rgba(120,119,198,0.35), transparent 50%), radial-gradient(ellipse at 80% 10%, rgba(255,119,198,0.3), transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(120,219,226,0.3), transparent 55%), #0a0a0f",
            }}
          >
            <div className="noise-soft" />
            <div className="relative">
              <div className="apple-eyebrow mb-4" style={{ color: "#86868b" }}>
                The summary
              </div>
              <h2 className="apple-display text-mega max-w-4xl">
                Full-stack-focused engineer{" "}
                <span style={{ color: "#86868b" }}>
                  turning complex AI/ML workflows into interfaces people
                  actually want to use.
                </span>
              </h2>
            </div>

            <div className="relative mt-16">
              <p className="apple-body text-[19px] md:text-[21px] text-white/70 max-w-3xl leading-[1.5]">
                Three-plus years building scalable, high-performance web
                applications with React, TypeScript, and modern JavaScript.
                Currently shipping enterprise-grade applications and AI-driven
                dashboards that translate complex backend workflows into
                intuitive UIs. Strong collaborator across design, backend, and
                product — with a focus on clean, testable, and
                performance-optimized code.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 pt-10 border-t border-white/10">
                {[
                  { k: "3+", v: "years of experience" },
                  { k: "35%", v: "bundle size reduced" },
                  { k: "95%", v: "peak test coverage" },
                  { k: "9", v: "projects shipped" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="apple-display text-[48px] md:text-[56px] text-white">
                      {s.k}
                    </div>
                    <div className="apple-body text-[13px] text-white/55 mt-1">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* ====================================================== */}
      {/* ABOUT — two-up split (light + dark) like apple iPad/Mac */}
      {/* ====================================================== */}
      <Section>
        <FadeUp>
          <SectionHeader
            eyebrow="About"
            title="What I do."
            subtitle="And why it matters."
          />
        </FadeUp>

        <div className="grid grid-cols-12 gap-[10px]">
          <FadeUp className="col-span-12 md:col-span-6">
            <div className="tile lift p-10 md:p-12 min-h-[520px] flex flex-col justify-between bg-white">
              <div className="apple-eyebrow text-[#86868b]">The practice</div>
              <div>
                <h3 className="apple-headline text-title-1 mb-5">
                  Component-driven.{" "}
                  <span className="text-[#86868b]">
                    Pixel-perfect. Performance-first.
                  </span>
                </h3>
                <p className="apple-body text-[17px] text-[#1d1d1f]/70 mb-4">
                  Strong experience designing component-driven architectures and
                  building reusable UI systems that improve development speed,
                  maintainability, and consistency across large applications.
                </p>
                <p className="apple-body text-[17px] text-[#1d1d1f]/70">
                  Fluent across the React ecosystem — Hooks, Redux Toolkit,
                  Context API, Next.js — and equally comfortable translating a
                  Figma file into a pixel-exact, responsive, accessible
                  interface.
                </p>
                <a className="link-apple mt-6 inline-flex">
                  Learn more <ChevronRightTiny />
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-6">
            <div
              className="tile tile-dark lift p-10 md:p-12 min-h-[520px] flex flex-col justify-between relative"
              style={{
                background:
                  "linear-gradient(135deg, #0a0e27 0%, #1e3a8a 50%, #312e81 100%)",
              }}
            >
              <div className="noise-soft" />
              <div className="relative apple-eyebrow text-white/60">
                The craft
              </div>
              <div className="relative">
                <h3 className="apple-headline text-title-1 mb-5">
                  AI interfaces.{" "}
                  <span className="text-white/50">
                    Live dashboards. Real-time data.
                  </span>
                </h3>
                <p className="apple-body text-[17px] text-white/70 mb-4">
                  Built interactive dashboards and visualization systems to
                  monitor AI agent pipelines — live logs, latency metrics, and
                  execution states — using modern frontend visualization
                  libraries.
                </p>
                <p className="apple-body text-[17px] text-white/70">
                  Hands-on integrating REST and GraphQL APIs, collaborating with
                  backend teams to design efficient contracts and optimized data
                  flows.
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-1 text-[17px]"
                  style={{ color: "#2997ff" }}
                >
                  Learn more <ChevronRightTiny />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ====================================================== */}
      {/* STAT TILES — like iPhone "18-core GPU" callouts         */}
      {/* ====================================================== */}
      <Section>
        <div className="grid grid-cols-12 gap-[10px]">
          <FadeUp className="col-span-12 md:col-span-4">
            <div className="tile lift p-10 min-h-[340px] flex flex-col justify-between bg-white">
              <div className="apple-eyebrow text-[#86868b]">Performance</div>
              <div>
                <div
                  className="apple-display text-[88px] leading-none"
                  style={{
                    background: "linear-gradient(135deg, #ff375f, #ff9500)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  35%
                </div>
                <p className="apple-body text-[15px] text-[#1d1d1f]/60 mt-3">
                  Bundle size reduced and load times improved through lazy
                  loading, memoization, and route-based code splitting.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-4">
            <div
              className="tile lift p-10 min-h-[340px] flex flex-col justify-between"
              style={{ background: "#1d1d1f", color: "#f5f5f7" }}
            >
              <div className="apple-eyebrow text-white/60">Test coverage</div>
              <div>
                <div
                  className="apple-display text-[88px] leading-none"
                  style={{
                    background: "linear-gradient(135deg, #32d74b, #30d158)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  95%
                </div>
                <p className="apple-body text-[15px] text-white/60 mt-3">
                  Peak coverage across Jest and React Testing Library — unit and
                  integration, production-grade quality gates.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-4">
            <div className="tile lift p-10 min-h-[340px] flex flex-col justify-between bg-white">
              <div className="apple-eyebrow text-[#86868b]">Experience</div>
              <div>
                <div
                  className="apple-display text-[88px] leading-none"
                  style={{
                    background: "linear-gradient(135deg, #0071e3, #5856d6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {experienceYears}
                </div>
                <p className="apple-body text-[15px] text-[#1d1d1f]/60 mt-3">
                  Years shipping production interfaces — across enterprise
                  applications, AI-driven dashboards, and full-stack features.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ====================================================== */}
      {/* WORK — apple-style product grid                         */}
      {/* ====================================================== */}
      <Section id="work">
        <FadeUp>
          <SectionHeader
            eyebrow="Selected work"
            title={`${projectsCountToWords} projects. One philosophy.`}
            subtitle="A mix of developer tools, landing experiences, and full product explorations."
          />
        </FadeUp>

        <div className="grid grid-cols-12 gap-[10px]">
          {/* Two-up hero */}
          {projects.slice(0, 2).map((p) => (
            <FadeUp key={p.name} className="col-span-12 md:col-span-6">
              <ProjectCard p={p} size="large" />
            </FadeUp>
          ))}

          {/* Three-up medium */}
          {projects.slice(2, 5).map((p) => (
            <FadeUp key={p.name} className="col-span-12 md:col-span-4">
              <ProjectCard p={p} size="medium" />
            </FadeUp>
          ))}

          {/* Four-up small */}
          {projects.slice(5, 9).map((p) => (
            <FadeUp key={p.name} className="col-span-6 md:col-span-3">
              <ProjectCard p={p} size="small" />
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* ====================================================== */}
      {/* TECHNICAL SKILLS — full breakdown, apple grid style     */}
      {/* ====================================================== */}
      <Section id="skills">
        <FadeUp>
          <SectionHeader
            eyebrow="Technical skills"
            title="The complete stack."
            subtitle="Everything from language fundamentals to scalable frontend architecture."
          />
        </FadeUp>

        <div className="grid grid-cols-12 gap-[10px]">
          {skills.map((s, i) => {
            // Size variance for visual rhythm
            const spanMap = [
              "col-span-12 md:col-span-6", // Languages - big
              "col-span-12 md:col-span-6", // Frameworks - big
              "col-span-12 md:col-span-4", // Styling
              "col-span-12 md:col-span-4", // Backend
              "col-span-12 md:col-span-4", // Databases
              "col-span-12 md:col-span-6", // Cloud
              "col-span-12 md:col-span-6", // Testing
              "col-span-12 md:col-span-6", // Design
              "col-span-12 md:col-span-6", // SE Concepts
            ];
            // alternate bg tone
            const dark = [1, 5, 7].includes(i);
            return (
              <FadeUp key={s.title} className={spanMap[i]}>
                <div
                  className="tile lift p-8 md:p-10 min-h-[260px] flex flex-col justify-between relative"
                  style={{
                    background: dark
                      ? "linear-gradient(135deg, #1d1d1f 0%, #2c2c2e 100%)"
                      : "#ffffff",
                    color: dark ? "#f5f5f7" : "#1d1d1f",
                  }}
                >
                  {dark && <div className="noise-soft" />}
                  <div className="relative">
                    <div
                      className="apple-eyebrow"
                      style={{
                        color: dark ? "rgba(255,255,255,0.55)" : "#86868b",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} · Skill set
                    </div>
                    <h3 className="apple-headline text-title-2 mt-3">
                      {s.title}
                    </h3>
                  </div>
                  <div className="relative flex flex-wrap gap-2 mt-6">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-[13px] apple-body border"
                        style={{
                          background: dark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.04)",
                          borderColor: dark
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(0,0,0,0.06)",
                          color: dark ? "rgba(255,255,255,0.9)" : "#1d1d1f",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      {/* ====================================================== */}
      {/* ADDITIONAL CAPABILITIES — short prose tiles             */}
      {/* ====================================================== */}
      <Section>
        <FadeUp>
          <SectionHeader
            eyebrow="Capabilities"
            title="How I work."
            subtitle="The habits and practices behind the code."
          />
        </FadeUp>

        <div className="grid grid-cols-12 gap-[10px]">
          <FadeUp className="col-span-12 md:col-span-8">
            <div className="tile lift p-10 md:p-12 bg-white min-h-[380px] flex flex-col justify-between">
              <div className="apple-eyebrow text-[#86868b]">
                End-to-end ownership
              </div>
              <div>
                <h3 className="apple-headline text-title-1 mb-5">
                  From requirement to{" "}
                  <span className="text-[#86868b]">
                    production — and everything between.
                  </span>
                </h3>
                <p className="apple-body text-[17px] text-[#1d1d1f]/70 max-w-xl">
                  Comfortable across the full development lifecycle —
                  requirement analysis, UI architecture, development, testing,
                  and production issue resolution. A strong collaborator in
                  Agile cross-functional teams, working with designers, backend
                  engineers, and product managers to deliver production-ready
                  features.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-4">
            <div
              className="tile lift p-8 md:p-10 min-h-[380px] flex flex-col justify-between relative"
              style={{
                background: "linear-gradient(135deg, #ff9500 0%, #ff375f 100%)",
                color: "#fff",
              }}
            >
              <div className="noise-soft" />
              <div className="relative apple-eyebrow text-white/80">
                Interests
              </div>
              <div className="relative">
                <h3 className="apple-headline text-title-2 mb-3">
                  Advanced frontend architecture & AI-powered web applications.
                </h3>
                <p className="apple-body text-[15px] text-white/80">
                  Always reading, building, and pushing toward system design
                  depth.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ====================================================== */}
      {/* EXPERIENCE                                              */}
      {/* ====================================================== */}
      <Section id="experience">
        <FadeUp>
          <SectionHeader
            eyebrow="Experience"
            title="A deliberate path."
            subtitle="Still climbing — with intent."
          />
        </FadeUp>

        <FadeUp>
          <div className="tile bg-white p-6 md:p-10">
            <div className="divide-y divide-black/[0.06]">
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="py-6 md:py-7 grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-semibold text-[17px]"
                      style={{ background: e.gradient }}
                    >
                      {e.company[0]}
                    </div>
                    <div>
                      <div className="apple-title text-[20px]">{e.company}</div>
                      {e.active && (
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                          <span className="text-[12px] text-[#30d158] font-medium">
                            Currently here
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-8 md:col-span-4 apple-body text-[15px] text-[#1d1d1f]/75">
                    {e.role}
                  </div>
                  <div className="col-span-4 md:col-span-3 apple-body text-[13px] text-[#86868b] text-right">
                    {e.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* ====================================================== */}
      {/* CONTACT                                                 */}
      {/* ====================================================== */}
      <Section id="contact">
        <FadeUp>
          <div
            className="tile p-12 md:p-20 text-center relative"
            style={{
              background: "linear-gradient(180deg, #fafafa 0%, #e8e8ed 100%)",
            }}
          >
            <div className="apple-eyebrow text-[#86868b] mb-5">Contact</div>
            <h2 className="apple-display text-display mb-5">
              Let's build something good.
            </h2>
            <p className="apple-body text-[19px] text-[#1d1d1f]/60 max-w-xl mx-auto mb-10">
              Open to senior frontend roles and interesting collaborations.
              Fastest reply is on email.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="mailto:shikhar.pranjal3@gmail.com"
                className="btn-primary inline-flex items-center gap-1.5"
              >
                Email me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjalshikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/pranjalshikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* FOOTER — Apple's dense grey footer */}
      <footer
        className="border-t border-black/[0.08] mt-10"
        style={{ backgroundColor: "#f5f5f7" }}
      >
        <div className="max-w-[1024px] mx-auto px-5 py-6 text-[12px] text-[#86868b]">
          <p className="max-w-3xl leading-[1.5]">
            Copyright © 2026 Pranjal Shikhar Sinha. All rights reserved. Based
            in Pune, Maharashtra. Designed and built with care, in React and
            TypeScript.
          </p>
          <div className="mt-4 pt-4 border-t border-black/[0.08] flex items-center justify-between flex-wrap gap-3">
            <div className="flex gap-5">
              <a
                href="mailto:shikhar.pranjal3@gmail.com"
                className="hover:underline"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/pranjalshikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/pranjalshikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.behance.net/pranjalshikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Behance
              </a>
            </div>
            <div>Pune, IN</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Helpers ---------- */

function Section({ children, id }) {
  return (
    <section id={id} className="max-w-[1024px] mx-auto px-5 mb-[10px]">
      {children}
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center pt-20 pb-12">
      <div className="apple-eyebrow text-[#0071e3] mb-3">{eyebrow}</div>
      <h2 className="apple-display text-mega">
        {title}
        {subtitle && (
          <>
            <br />
            <span className="text-[#86868b]">{subtitle}</span>
          </>
        )}
      </h2>
    </div>
  );
}

function ProjectCard({ p, size }) {
  const sizes = {
    large: {
      h: "min-h-[460px]",
      pad: "p-10 md:p-12",
      titleCls: "text-[44px] md:text-[56px]",
      headCls: "text-[28px] md:text-[34px]",
    },
    medium: {
      h: "min-h-[360px]",
      pad: "p-8 md:p-10",
      titleCls: "text-[36px] md:text-[42px]",
      headCls: "text-[22px] md:text-[26px]",
    },
    small: {
      h: "min-h-[280px]",
      pad: "p-6 md:p-7",
      titleCls: "text-[26px] md:text-[30px]",
      headCls: "text-[17px]",
    },
  }[size];

  const color = p.theme === "dark" ? "#f5f5f7" : "#1d1d1f";
  const muted =
    p.theme === "dark" ? "rgba(255,255,255,0.55)" : "rgba(29,29,31,0.6)";

  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer">
      <div
        className={`tile lift ${sizes.pad} ${sizes.h} flex flex-col justify-between relative`}
        style={{ background: p.bg, color }}
      >
        <div className="noise-soft" />
        <div className="relative flex items-start justify-between">
          <div className="apple-eyebrow" style={{ color: muted }}>
            {p.tag}
          </div>
          <ArrowUpRight className="w-4 h-4" style={{ color: p.accent }} />
        </div>
        <div className="relative">
          <div
            className={`apple-display ${sizes.titleCls} leading-[0.95]`}
            style={{ color: p.accent }}
          >
            {p.name}
          </div>
          {size !== "small" && (
            <div
              className={`apple-headline ${sizes.headCls} mt-2`}
              style={{ color }}
            >
              {p.headline}
            </div>
          )}
          <p
            className={`apple-body mt-2.5 ${size === "small" ? "text-[12.5px]" : "text-[15px]"} max-w-md`}
            style={{ color: muted }}
          >
            {p.desc}
          </p>
          {size === "large" && (
            <div
              className="mt-5 inline-flex items-center gap-1 text-[15px]"
              style={{ color: p.accent }}
            >
              Open project <ChevronRightTiny />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

function ChevronRightTiny() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M4 2L7 5L4 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
