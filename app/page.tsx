import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const dynamic = "force-static";

const HERO_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/645a93aed751a_1683657646_web-images_lg.jpg";

const BRANDS = [
  "Alvin Ailey",
  "Pivot Dancer",
  "Dance Inst. of Washington",
  "Netflix — Bridgerton",
  "Broadway Productions",
  "Univ. of Maryland",
  "Black Dance Change Makers",
  "Freed of London",
  "Healthy Dancer Summer",
  "Kirov Ballet",
];

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="hero-txt">
          <p className="ey">Dance Medicine · Performance Science</p>
          <h1 className="display">
            Reducing injury risk, <em>elevating</em> performance.
          </h1>
          <p className="lead" style={{ maxWidth: 420, marginBottom: 38 }}>
            We serve dancers across the lifespan — from students to
            professionals — through research-based education, screening tools,
            and conditioning programs.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/assessment" className="ba">
              Get Your Dance Ready Score
            </Link>
            <Link href="/about" className="ghost-dk">
              Our Mission →
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <Image
            src={HERO_IMG}
            alt="Dancer"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </section>

      {/* stats */}
      <section className="stats">
        <div className="stat">
          <div className="sn">37%</div>
          <div className="sl">Reduction in overuse injuries</div>
        </div>
        <div className="stat">
          <div className="sn">33%</div>
          <div className="sl">Reduction in time-loss injuries</div>
        </div>
        <div className="stat">
          <div className="sn">13+</div>
          <div className="sl">Major organisations served</div>
        </div>
      </section>

      {/* three pillars */}
      <section className="sec-cr">
        <div className="wrap">
          <p className="ey">Our Model</p>
          <h2 className="section">
            Three integrated <em>arms</em> of care
          </h2>
          <p className="lead" style={{ maxWidth: 520, marginBottom: 0 }}>
            An evidence-based framework that bridges the gap between dance
            science and studio practice.
          </p>
          <div className="pillars">
            <div className="pillar">
              <div className="pn">01</div>
              <div className="pt">Assessment</div>
              <p className="pd">
                The Dance Ready Score™ acts as a GPS for dancers — pinpointing
                current fitness level and providing a roadmap to peak
                performance.
              </p>
              <ul className="pbul">
                <li>Unbiased, science-based guidelines</li>
                <li>Immediate results &amp; real-time feedback</li>
                <li>No professional licensure required</li>
              </ul>
              <Link href="/assessment" className="bu">
                Explore DRS →
              </Link>
            </div>
            <div className="pillar">
              <div className="pn">02</div>
              <div className="pt">Conditioning</div>
              <p className="pd">
                Dansebridge Online — a self-paced cross-training program
                specifically designed for dancers to build strength and prevent
                injury.
              </p>
              <ul className="pbul">
                <li>Research-based progressive programming</li>
                <li>30 min · 5 days/week · 6 weeks</li>
                <li>Supervised with check-in calls</li>
              </ul>
              <Link href="/dansebridge" className="bu">
                Explore Dansebridge →
              </Link>
            </div>
            <div className="pillar">
              <div className="pn">03</div>
              <div className="pt">Education</div>
              <p className="pd">
                Workshops, webinars, and online content equipping dancers and
                educators with critical knowledge about dancer health.
              </p>
              <ul className="pbul">
                <li>Functional anatomy workshops</li>
                <li>Performance &amp; technique enhancement</li>
                <li>Sleep &amp; immune health lectures</li>
              </ul>
              <Link href="/education" className="bu">
                Explore Education →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline={
          <>
            Ready to <em>dance smarter,</em> not harder?
          </>
        }
        actions={[
          { label: "Book a Consultation", href: "/contact" },
          { label: "View Events →", href: "/events", variant: "ghost" },
        ]}
      />

      {/* trusted by */}
      <section className="sec">
        <div className="wrap">
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--mi)",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            Trusted by leading organisations
          </p>
          <div className="bgrid">
            {BRANDS.map((b) => (
              <div className="bitem" key={b}>
                <span className="bname">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
