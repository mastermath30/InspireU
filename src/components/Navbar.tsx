"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import InspireULogo from "./InspireULogo";
import CTAButton from "./CTAButton";
import {
  EASE_OUT_EXPO,
  fadeUp,
  staggerContainer,
  useReducedMotion,
} from "@/lib/motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-team", label: "Our Team" },
  { href: "/charity-work", label: "Charity Work" },
  { href: "/our-committees", label: "Our Committees" },
  { href: "/committee-work", label: "Committee Work" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-base/90 backdrop-blur-md border-b border-gold-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center" aria-label="InspireU home">
          <InspireULogo size={56} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group font-display text-sm font-medium tracking-[0.16em] uppercase py-1 transition-colors duration-300 ${
                  active ? "text-gold" : "text-primary hover:text-gold-bright"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold origin-left"
                  initial={false}
                  animate={{ scaleX: active ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                  style={{
                    transformOrigin: "left",
                    pointerEvents: "none",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/give" variant="white">
            Give
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-primary hover:text-gold transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden fixed inset-0 top-20 z-40 bg-deep/98 backdrop-blur-lg overflow-y-auto"
            initial={reduced ? { y: 0 } : { y: "-100%" }}
            animate={{ y: "0%" }}
            exit={reduced ? { y: 0 } : { y: "-100%" }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          >
            <motion.nav
              className="flex flex-col items-stretch gap-1 px-6 py-8"
              aria-label="Mobile"
              variants={staggerContainer(0.06, 0.18)}
              initial="hidden"
              animate="show"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.div key={link.href} variants={fadeUp}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block font-display text-2xl font-bold tracking-tight py-4 border-b border-gold-subtle transition-colors ${
                        active
                          ? "text-gold"
                          : "text-primary hover:text-gold-bright"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={fadeUp}
                className="pt-8 self-start"
                onClick={closeMenu}
              >
                <CTAButton href="/give" variant="white">
                  Give
                </CTAButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
