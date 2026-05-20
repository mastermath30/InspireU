import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import { CHARITY_EVENTS } from "@/lib/content";

function renderBody(event: (typeof CHARITY_EVENTS)[number]) {
  if (event.body) {
    return <p>{event.body}</p>;
  }
  if (event.bodyLines && event.bodyLines.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        {event.bodyLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    );
  }
  return undefined;
}

export default function CharityWorkPage() {
  return (
    <>
      <Hero
        imageLabel="Hero: InspireU charity events highlight reel"
        eyebrow="Impact"
        title="Charity Work"
        subtitle="A look at the donations, partnerships, and events we've put together."
        height="short"
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-24 md:gap-32">
          {CHARITY_EVENTS.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              layout={event.layout}
              images={event.images}
              body={renderBody(event)}
            />
          ))}
        </Container>
      </section>
    </>
  );
}
