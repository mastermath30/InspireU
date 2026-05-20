import Hero from "@/components/Hero";
import Container from "@/components/Container";
import MissionBlock from "@/components/MissionBlock";
import { ABOUT_US, HOME_HERO, MISSION } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        imageLabel={HOME_HERO.imageLabel}
        title={HOME_HERO.title}
        subtitle={HOME_HERO.subtitle}
        height="tall"
        animateTitle
      />

      <section className="bg-base py-20 md:py-28">
        <Container>
          <MissionBlock
            imageLabel={MISSION.imageLabel}
            overlayTitle={MISSION.overlayTitle}
            body={MISSION.body}
            imageSide="left"
          />
        </Container>
      </section>

      <div className="border-t border-gold-subtle" aria-hidden="true" />

      <section className="bg-base py-20 md:py-28">
        <Container>
          <MissionBlock
            imageLabel={ABOUT_US.imageLabel}
            overlayTitle={ABOUT_US.overlayTitle}
            body={ABOUT_US.body}
            imageSide="right"
          />
        </Container>
      </section>
    </>
  );
}
