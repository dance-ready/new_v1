import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Talk With Us — Contact the Dance Ready Project",
  description:
    "Reach out to the Dance Ready Project — to book the Dance Ready Score for your studio, host an event, ask about Dansebridge or our courses, or partner with us.",
  alternates: { canonical: "/contact" },
};

const CONTACT_EMAIL = "info@danceready.org";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We'd Love to Hear From You"
        imageFallback={
          <div
            style={{
              background: "var(--cr)",
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
                fontSize: 110,
                fontWeight: 300,
                color: "rgba(28,28,26,0.07)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Hello.
            </p>
          </div>
        }
      >
        <h1 className="display lt">
          Talk <em>with us</em>
        </h1>
        <p className="lead lt">
          Whether you&apos;re booking the Dance Ready Score for your studio,
          asking about Dansebridge, exploring a partnership, or anything in
          between — we read every message.
        </p>
      </PageHero>

      <section className="sec">
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* form */}
          <div>
            <p className="ey">Send a Message</p>
            <h2 className="section">
              We&apos;ll respond <em>personally</em>
            </h2>
            <form action={`mailto:${CONTACT_EMAIL}`} method="post" encType="text/plain">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="form-row">
                <label htmlFor="role">I am a…</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Dancer, teacher, studio owner, healthcare provider…"
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="bp">
                Send Message
              </button>
            </form>
          </div>

          {/* info */}
          <div>
            <div className="infobox" style={{ marginBottom: 22 }}>
              <p
                className="ey"
                style={{ marginBottom: 12 }}
              >
                Direct Email
              </p>
              <p style={{ fontSize: 16, color: "var(--dk)", marginBottom: 6 }}>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{ color: "var(--ac)" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p style={{ fontSize: 13, color: "var(--mi)" }}>
                We typically respond within two business days.
              </p>
            </div>

            <div className="infobox">
              <p className="ey" style={{ marginBottom: 12 }}>
                Quick Links
              </p>
              <ul className="dlist" style={{ marginBottom: 0 }}>
                <li>
                  <Link href="/assessment">
                    Book the Dance Ready Score for your studio
                  </Link>
                </li>
                <li>
                  <Link href="/dansebridge">
                    Get started with Dansebridge Online
                  </Link>
                </li>
                <li>
                  <Link href="/education">
                    Explore upcoming courses &amp; workshops
                  </Link>
                </li>
                <li>
                  <Link href="/events">RSVP to an event</Link>
                </li>
                <li>
                  <Link href="/affiliates">Become an affiliate partner</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* host an event — repurposed from Events page */}
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
                organisations to bring the Dance Ready Score and wellness
                workshops directly to your dancers.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Hosting%20a%20DRP%20event`} className="bp">
                Email Us About Hosting
              </a>
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
    </>
  );
}
