import { useState } from "react";
import profileImg from "../../assets/images/profile.png";
import { ChevronDown, ChevronRight, Divide, Star } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black ">
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 p-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />

                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-linear-to-r from-primary via-secondary/50 to-primary/30 bg-clip-text text-transparent">
                React.js Developer & UI/UX Enthusiast
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg text-white/80 max-w-[550px] mb-8">
                Crafting seamless web experiences with React.js. Passionate
                about UI/UX design and creating intuitive interfaces. Let's
                build something amazing together!
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[12px] px-[26px] py-[13px] text-base font-medium border border-white">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat) => (
                  <div
                    key={stat.id}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/80 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column Content */}
          <FadeIn delay={1000}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden ">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Profile Image */}
                <div className="relative m-[1px] h-[calc(100%-2px)] rounded-2xl overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Developer Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tech Stack Icons */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={1200}>
                    <div className="flex items-center gap-4 bg-black/50 backdrop-blur-lg px-6 py-4 border border-white/10 rounded-full">
                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMongodb className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-white transition-colors animate-bounce duration-300"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

    </section>
  );
};

export default Hero;
