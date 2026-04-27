import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Dansebridge Online — Conditioning for Dancers",
  description:
    "Dansebridge Online is a self-paced cross-training program designed by a specialist for dancers who want to move better, get stronger, and prevent injury. 30 minutes · 5 days/week · 6 weeks.",
  alternates: { canonical: "/dansebridge" },
};

const HERO_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/creen-hot-2023-03-02-at-11-09-116400caeda7866_lg.png";

const PROMISES = [
  "Get over that lingering injury you've been putting off",
  "Get your leg higher than it's been in three years",
  "Earn the attention of your choreographer",
  "Conquer that skill you've always struggled with",
  "Return to — and surpass — your pre-injury fitness level",
];

const TESTIMONIALS = [
  {
    quote:
      "In 30 minutes, I get my heart rate up and work muscles I didn't know I had. This class has become part of my routine!",
    name: "— Katrina M.",
  },
  {
    quote:
      "Lifting my legs is easier. My jumps have gotten better — I used to get stuck in the middle of my rond de jambe.",
    name: "— Valentina B.",
  },
  {
    quote:
      "My attitudes and arabesques have gotten a lot better, especially my attitudes — they were always on the not so good side!",
    name: "— Naima A.",
  },
  {
    quote:
      "I really feel my body working and changing. I think I should keep going with this kind of work!",
    name: "— Giorgia P.",
  },
];

export default function DansebridgePage() {
  return (
    <>
      <PageHero
        eyebrow="Online Conditioning Program"
        imageSrc={HERO_IMG}
        imageAlt="Dansebridge"
      >
        <h1 className="display lt">
          Danse<em>bridge</em> Online
        </h1>
        <p className="lead lt" style={{ marginBottom: 28 }}>
          A self-paced cross-training program designed by a specialist for
          dancers who want to move better, get stronger, and prevent injury.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/contact" className="ba">
            Sign Up for Dansebridge
          </Link>
          <Link href="#what-included" className="bg-btn">
            Learn More →
          </Link>
        </div>
      </PageHero>

      {/* definition / promise split */}
      <div className="split">
        <div
          style={{
            background: "var(--dk)",
            padding: "52px 6%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="db-def">
            <strong>Bridge</strong> [brij] <em>noun</em>
            <br />
            <br />A time, place, or means of connection and transition. The gap
            between where you are and where you want to be.
          </div>
        </div>
        <div className="sp" style={{ background: "var(--cr)" }}>
          <p className="ey">The Promise</p>
          <h2 className="section sm">
            What if you could <em>finally…</em>
          </h2>
          {PROMISES.map((p) => (
            <div className="pi" key={p}>
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* program */}
      <section className="sec-cr" id="what-included">
        <div className="wrap">
          <p className="ey">The Program</p>
          <h2 className="section">
            What&apos;s <em>included</em>
          </h2>
          <div className="prog-g">
            <div className="prog-c">
              <div className="prog-ico">◎</div>
              <div className="prog-t">Individual Assessment</div>
              <p className="prog-d">
                Identify your goals, establish your baseline, and receive
                recommendations on where to focus your training for maximum
                results.
              </p>
            </div>
            <div className="prog-c dk">
              <div className="prog-ico lt">◈</div>
              <div className="prog-t lt">6 Weeks of Training</div>
              <p className="prog-d lt">
                Specially designed progressive program. 30 minutes · 5 days a
                week · 6 weeks.
              </p>
            </div>
            <div className="prog-c dk">
              <div className="prog-ico lt">◑</div>
              <div className="prog-t lt">Check-In Calls</div>
              <p className="prog-d lt">
                Check in to troubleshoot issues as you work and grow stronger.
                You&apos;re not alone.
              </p>
            </div>
            <div className="prog-c">
              <div className="prog-ico">◉</div>
              <div className="prog-t">Community</div>
              <p className="prog-d">
                An encouraging community that keeps you accountable and
                connected throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="sec">
        <div className="wrap">
          <p className="ey">Hear From Dancers</p>
          <h2 className="section">
            Real results, real <em>dancers</em>
          </h2>
          <div className="g2" style={{ marginTop: 28 }}>
            {TESTIMONIALS.map((t) => (
              <div className="tcard" key={t.name}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <cite>{t.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline={
          <>
            Ready to work <em>smarter?</em>
          </>
        }
        actions={[{ label: "Get Me In Now", href: "/contact" }]}
      />
    </>
  );
}
