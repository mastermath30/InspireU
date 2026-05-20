import Link from "next/link";
import Container from "./Container";
import InspireULogo from "./InspireULogo";
import { TikTokIcon, LinkedInIcon, InstagramIcon } from "./SocialIcons";

const SOCIALS = [
  { href: "https://www.tiktok.com/", label: "TikTok", Icon: TikTokIcon },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-gold-subtle mt-auto">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          <div className="flex flex-col gap-4">
            <InspireULogo size={72} />
            <p className="font-display italic text-base md:text-lg text-secondary max-w-xs">
              Unlocking Potential, Building Dreams
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <span className="font-display text-xs uppercase tracking-[0.24em] text-gold">
              Connect
            </span>
            <div className="flex items-center gap-5">
              {SOCIALS.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold transition-colors duration-300"
                >
                  <Icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <span className="font-display text-xs uppercase tracking-[0.24em] text-gold">
              Reach Out
            </span>
            <a
              href="mailto:inspireu.upbd@gmail.com"
              className="font-sans text-sm text-secondary hover:text-gold transition-colors"
            >
              inspireu.upbd@gmail.com
            </a>
            <Link
              href="/contact-us"
              className="font-sans text-sm text-secondary hover:text-gold transition-colors"
            >
              Contact form →
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gold-subtle flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
            © InspireU 2026 | All Rights Reserved
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Redmond, WA
          </p>
        </div>
      </Container>
    </footer>
  );
}
