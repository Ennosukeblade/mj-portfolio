import { motion, type Variants } from "framer-motion";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = ScrollLink as any;
import { NAME, SOCIAL_LINKS, TAGLINE } from "../data/data";
import { HeroProps } from "../types/types";

const TECH_STRIP = ["React", "TypeScript", "Node.js", "Python", "Django", "Docker", "GCP", "PostgreSQL", "TailwindCSS"];

const Hero: React.FC<HeroProps> = ({ greetingText, greetingDescription, buttonText }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center grid-bg overflow-hidden bg-base-100"
      id="home"
    >
      {/* Gradient blobs */}
      <div
        className="absolute top-20 right-10 w-80 h-80 bg-primary opacity-10 blur-3xl animate-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-10 w-64 h-64 bg-secondary opacity-10 blur-3xl animate-blob pointer-events-none"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent opacity-5 blur-3xl animate-blob pointer-events-none"
        style={{ animationDelay: "-2s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 py-24 max-w-6xl mx-auto w-full lg:px-16">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Available badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary border-opacity-40 bg-primary bg-opacity-10 text-sm text-accent-content font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-content animate-pulse" aria-hidden="true" />
              {greetingText}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6"
          >
            <span className="text-gradient block">{NAME.split(" ")[0]}</span>
            <span className="text-base-content block">{NAME.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-xl lg:text-2xl text-base-content opacity-60 font-light max-w-xl mb-4"
          >
            {TAGLINE}
          </motion.p>

          <motion.p
            variants={item}
            className="text-base text-base-content opacity-40 max-w-lg mb-10"
          >
            {greetingDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Link to="experience" spy={true} smooth={true} duration={500}>
              <button className="btn btn-primary rounded-full px-8 gap-2 font-semibold">
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </Link>
            <a
              href={`https://wa.me/${SOCIAL_LINKS.phone?.replace(/\D/g, "") ?? ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-ghost rounded-full px-8 font-semibold border border-base-300 hover:border-primary hover:text-primary transition-colors">
                Contact Me
              </button>
            </a>
            <a
              href="/Mouadh-Jenouiz-Resume.pdf"
              download="Mouadh-Jenouiz-Resume.pdf"
              className="btn btn-ghost rounded-full px-8 font-semibold border border-base-300 hover:border-primary hover:text-primary transition-colors"
              aria-label="Download resume (PDF)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Tech strip */}
          <motion.div variants={item} className="flex flex-wrap gap-2" aria-label="Technologies">
            {TECH_STRIP.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-base-200 text-base-content opacity-50 border border-base-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
