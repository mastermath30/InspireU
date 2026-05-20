import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import StaggerGrid from "@/components/StaggerGrid";
import { CONTACT_DETAILS, CONTACT_INTRO } from "@/lib/content";
import type { ContactDetail } from "@/types/content";

const ICONS = {
  location: MapPin,
  email: Mail,
  phone: Phone,
} as const;

function DetailCard({ detail }: { detail: ContactDetail }) {
  const Icon = ICONS[detail.iconKey];
  const valueClass =
    "font-sans text-base md:text-lg text-primary leading-snug break-words";
  const value = detail.href ? (
    <a href={detail.href} className={`${valueClass} hover:text-gold transition-colors`}>
      {detail.value}
    </a>
  ) : (
    <span className={valueClass}>{detail.value}</span>
  );
  return (
    <div className="flex flex-col items-center text-center gap-4 p-8 bg-elevated border border-gold-subtle rounded-2xl">
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-base text-gold border border-gold-subtle">
        <Icon size={20} />
      </span>
      <span className="font-display text-xs uppercase tracking-[0.24em] text-gold">
        {detail.label}
      </span>
      {value}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Hero
        imageLabel="Hero: InspireU contact details"
        eyebrow="Talk to Us"
        title="Get in Touch"
        subtitle="We'd love to hear from students, supporters, and future partners."
        height="short"
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-16">
          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {CONTACT_DETAILS.map((detail) => (
              <DetailCard key={detail.iconKey} detail={detail} />
            ))}
          </StaggerGrid>

          <div className="border-t border-gold-subtle" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Contact"
                title={CONTACT_INTRO.heading}
                subtitle={CONTACT_INTRO.subtitle}
              />
            </div>
            <Reveal className="lg:col-span-7" delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
