import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PersonCard from "@/components/PersonCard";
import SectionHeader from "@/components/SectionHeader";
import StaggerGrid from "@/components/StaggerGrid";
import { ADVISORS, BOARD_MEMBERS } from "@/lib/content";

export default function OurTeamPage() {
  return (
    <>
      <Hero
        imageLabel="Hero: InspireU leadership team portrait"
        eyebrow="The People"
        title="Our Team"
        subtitle="The students and advisors behind InspireU."
        height="short"
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Leadership"
            title="Board of Directors"
            subtitle="Meet the Founders of InspireU"
          />
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {BOARD_MEMBERS.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                role={member.role}
                school={member.school}
                imageLabel={member.imageLabel}
                image={member.image}
                imagePosition={member.imagePosition}
              />
            ))}
          </StaggerGrid>
        </Container>
      </section>

      <div className="border-t border-gold-subtle" aria-hidden="true" />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Guidance"
            title="Advisors"
            subtitle="Meet the Advisors of InspireU"
          />
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {ADVISORS.map((advisor, idx) => (
              <PersonCard
                key={advisor.name ?? `advisor-${idx}`}
                name={advisor.name}
                role={advisor.role}
                school={advisor.title}
                imageLabel={
                  advisor.imageLabel ??
                  (advisor.name ? `Photo: ${advisor.name}` : "Photo: Adult Advisor")
                }
              />
            ))}
          </StaggerGrid>
        </Container>
      </section>
    </>
  );
}
