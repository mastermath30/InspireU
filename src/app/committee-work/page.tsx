import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { COMMITTEE_WORK } from "@/lib/content";

export default function CommitteeWorkPage() {
  return (
    <>
      <Hero
        imageLabel="Hero: InspireU committee meeting"
        eyebrow="Join Us"
        title="Committee Work"
        subtitle="What committees do, how to start one, and how to get involved."
        height="short"
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-16">
          <SectionHeader align="center" title="Committee Information" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <Reveal className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h3 className="font-display italic font-extrabold tracking-tight text-2xl md:text-3xl text-primary">
                  {COMMITTEE_WORK.whyHeading}
                </h3>
                <div
                  aria-hidden="true"
                  className="h-px w-16 bg-gold/60"
                />
                <p className="font-sans text-base md:text-lg text-secondary leading-relaxed text-pretty">
                  {COMMITTEE_WORK.whyBody}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-display italic font-extrabold tracking-tight text-2xl md:text-3xl text-primary">
                  {COMMITTEE_WORK.howHeading}
                </h3>
                <div
                  aria-hidden="true"
                  className="h-px w-16 bg-gold/60"
                />
                <p className="font-sans text-base md:text-lg text-secondary leading-relaxed text-pretty">
                  {COMMITTEE_WORK.howBody}
                </p>
              </div>
            </Reveal>

            <Reveal className="relative flex items-center">
              <div className="w-full bg-elevated border border-gold-subtle rounded-3xl p-10 md:p-14 flex flex-col gap-8">
                <h3 className="font-display italic font-black tracking-tighter-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-[0.95]">
                  {COMMITTEE_WORK.ctaHeading}
                </h3>
                <div
                  aria-hidden="true"
                  className="h-px w-20 bg-gold"
                />
                <p className="font-sans text-base text-secondary max-w-md">
                  Reach out and tell us where you want to start a chapter. We will guide you through the next steps.
                </p>
                <div>
                  <CTAButton href={COMMITTEE_WORK.ctaHref} variant="white">
                    {COMMITTEE_WORK.ctaLabel}
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
