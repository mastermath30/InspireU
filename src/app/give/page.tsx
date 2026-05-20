import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { GIVE_PAGE, SITE } from "@/lib/content";

export default function GivePage() {
  return (
    <>
      <Hero
        imageLabel="Hero: Support InspireU"
        eyebrow="Donate"
        title={GIVE_PAGE.title}
        subtitle="Every contribution helps us reach more students."
        height="short"
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col text-center gap-8 max-w-2xl mx-auto">
            <p className="font-sans text-lg md:text-xl text-secondary text-balance leading-relaxed">
              {GIVE_PAGE.body}
            </p>
            <div
              aria-hidden="true"
              className="h-px w-20 bg-gold/60 mx-auto"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={`mailto:${SITE.email}`} variant="white">
                Email Us
              </CTAButton>
              <CTAButton href="/contact-us" variant="ghost">
                Contact Form
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
