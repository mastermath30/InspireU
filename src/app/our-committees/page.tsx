import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PersonCard from "@/components/PersonCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import StaggerGrid from "@/components/StaggerGrid";
import { COMMITTEES } from "@/lib/content";

export default function OurCommitteesPage() {
  return (
    <>
      <Hero
        imageLabel="Hero: InspireU committee leaders at high schools"
        eyebrow="Chapters"
        title="Our Committees"
        subtitle="Meet the students leading InspireU at their schools."
        height="short"
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-20 md:gap-28">
          <SectionHeader
            align="center"
            title="Committees Across Washington State"
            subtitle="Six high schools, one shared mission."
          />

          {COMMITTEES.map((committee) => (
            <div key={committee.id} className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-4">
                <h3 className="font-display italic font-extrabold tracking-tighter-display text-3xl md:text-4xl lg:text-5xl text-primary text-balance">
                  {committee.school}
                </h3>
                <div
                  aria-hidden="true"
                  className="h-px w-20 bg-gold/60"
                />
              </Reveal>
              <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {committee.officers.map((officer, i) => (
                  <PersonCard
                    key={`${committee.id}-${i}`}
                    name={officer.name}
                    role={officer.role}
                    imageLabel={
                      officer.imageLabel ?? `Photo: ${officer.role}`
                    }
                  />
                ))}
              </StaggerGrid>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
