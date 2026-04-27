import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Events — Screenings, Workshops & Info Sessions",
  description:
    "Upcoming Dance Ready Project events: screenings, workshops, meet-and-greets, and info sessions designed to connect the dance community with research-based health resources.",
  alternates: { canonical: "/events" },
};

type EventItem = {
  type: string;
  isFree?: boolean;
  title: string;
  dateLabel: string;
  dateValue: string;
  locationLabel?: string;
  locationValue: string;
  description: string;
  cta: string;
};

const EVENTS: EventItem[] = [
  {
    type: "Free · Online",
    isFree: true,
    title: "DRS Info Session",
    dateLabel: "Wednesday, January 22nd",
    dateValue: "7:30 PM – 9:00 PM",
    locationValue: "Online — link sent on registration",
    description:
      "Learn everything about the Dance Ready Score — what it measures, how it works, and how it can transform your dancers' training.",
    cta: "Register Free",
  },
  {
    type: "In Person · DC",
    title: "Meet & Greet",
    dateLabel: "Friday, February 7th",
    dateValue: "5:30 PM – 7:30 PM",
    locationLabel: "St. James Restaurant",
    locationValue: "2017 14th St NW, Washington DC",
    description:
      "Connect with the Dance Ready Project team and fellow dancers in an informal, welcoming setting. Great conversation guaranteed.",
    cta: "RSVP Now",
  },
  {
    type: "In Person · DC",
    title: "DRS Day in DC",
    dateLabel: "Saturday, February 8th",
    dateValue: "1:00 PM – 4:00 PM",
    locationLabel: "The Viva School",
    locationValue: "1923 Vermont Ave NW Suite T002, Washington DC 20001",
    description:
      "A full afternoon of Dance Ready Score assessments and workshops. Leave with your score and a clear roadmap.",
    cta: "Book Your Spot",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us In Person & Online"
        imageFallback={
          <div
            style={{
              background: "var(--dk)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: 420,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 100,
                fontWeight: 300,
                color: "rgba(255,255,255,0.06)",
                lineHeight: 1,
              }}
            >
              2026
            </p>
          </div>
        }
      >
        <h1 className="display lt">
          Upcoming <em>Events</em>
        </h1>
        <p className="lead lt">
          Screenings, workshops, meet-and-greets, and info sessions — designed
          to connect the dance community with the resources they need.
        </p>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <p className="ey">On the Calendar</p>
          <h2 className="section">
            Don&apos;t miss <em>these</em>
          </h2>
          <div className="ev-grid">
            {EVENTS.map((e) => (
              <article className="ev-card" key={e.title}>
                <div className="ev-body">
                  <p className="ev-type">{e.type}</p>
                  {e.isFree && <span className="ev-free">Free Event</span>}
                  <div className="ev-title">{e.title}</div>
                  <div className="ev-meta">
                    <div className="ev-row">
                      <span style={{ flexShrink: 0, color: "var(--ac)" }}>
                        ◈
                      </span>
                      <div>
                        <span className="ev-label">{e.dateLabel}</span>
                        <span className="ev-val">{e.dateValue}</span>
                      </div>
                    </div>
                    <div className="ev-row">
                      <span style={{ flexShrink: 0, color: "var(--ac)" }}>
                        ◎
                      </span>
                      <div>
                        {e.locationLabel && (
                          <span className="ev-label">{e.locationLabel}</span>
                        )}
                        <span className="ev-val">{e.locationValue}</span>
                      </div>
                    </div>
                  </div>
                  <p className="ev-desc">{e.description}</p>
                  <Link
                    href="/contact"
                    className="bp"
                    style={{ fontSize: 12, padding: "9px 20px" }}
                  >
                    {e.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* host */}
      <section className="sec-cr">
        <div className="wrap">
          <div className="host-grid">
            <div>
              <p className="ey">Bring DRP to You</p>
              <h2 className="section sm">
                Host an event at your <em>studio or school</em>
              </h2>
              <p className="lead">
                We partner with studios, dance schools, companies, and
                organisations to bring the Dance Ready Score assessment and
                wellness workshops directly to your dancers.
              </p>
              <Link href="/contact" className="bp">
                Talk With Us
              </Link>
            </div>
            <div className="infobox">
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--mi)",
                  marginBottom: 16,
                }}
              >
                What&apos;s included in a hosted event
              </p>
              <ul className="dlist">
                <li>On-site Dance Ready Score assessments for all dancers</li>
                <li>Group results workshop with your team</li>
                <li>Corrective exercise and performance roadmap</li>
                <li>Follow-up consultation available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* "Get announcements first" — newsletter form is deferred; offer Talk With Us */}
      <section className="sec-dk" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          <p className="ey lt ct">Never Miss an Event</p>
          <h2 className="section lt" style={{ marginBottom: 10 }}>
            Get announcements <em>first</em>
          </h2>
          <p className="lead lt" style={{ marginBottom: 22 }}>
            Reach out and we&apos;ll keep you posted on new events, workshops,
            and info sessions near you.
          </p>
          <Link href="/contact" className="bl">
            Talk With Us
          </Link>
        </div>
      </section>
    </>
  );
}
