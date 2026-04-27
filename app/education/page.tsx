import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Education — Workshops & Courses for Dancers",
  description:
    "Workshops, webinars, and online content equipping dancers, educators, and healthcare providers with critical knowledge about dancer health, injury risk, and performance readiness.",
  alternates: { canonical: "/education" },
};

const HERO_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/0-uscles-keleton-ull-160786c6e82038_lg.jpg";

const TEACHER_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/raining-eries-thumbnail617568da4fe83-lg63b38975bcbee_lg.png";

const COURSES = [
  {
    title: "Technique Enhancement",
    sub: "Unleash your potential",
    items: [
      "Technique correction principles",
      "Ways to improve turnout safely",
      "Best exercises to increase flexibility",
    ],
  },
  {
    title: "Wellness Workshops",
    sub: "Learn the inner workings of your body",
    items: [
      "Nutrition for dancers",
      "Mental health & performance",
      "Sleep & immune health",
    ],
  },
  {
    title: "Anatomy for Dancers",
    sub: "3D views of the body in motion",
    items: [
      "Muscles, bones & joints in depth",
      "Structures used in dance movement",
      "Biomechanics behind technique",
    ],
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Is Power"
        imageSrc={HERO_IMG}
        imageAlt="Education"
      >
        <h1 className="display lt">
          Educational <em>Offerings</em>
        </h1>
        <p className="lead lt">
          Equipping dancers, educators, and healthcare providers with critical
          knowledge about dancer health, injury risk, and performance readiness.
        </p>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <p className="ey">What We Teach</p>
          <h2 className="section">
            Built for every <em>stage</em> of your journey
          </h2>
          <div className="edu-grid">
            {COURSES.map((c) => (
              <div className="edu-card" key={c.title}>
                <span className="edu-soon">Coming Soon</span>
                <div className="edu-ct">{c.title}</div>
                <div className="edu-sub">{c.sub}</div>
                <ul className="edu-list">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link href="/contact" className="bu">
                  Notify Me →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* featured teacher course */}
      <div className="split" style={{ background: "var(--cr)" }}>
        <div className="sp">
          <span className="feat-badge">Featured Course</span>
          <h2 className="section sm">
            For Dance <em>Teachers</em>
          </h2>
          <p className="lead">
            Join DRP&apos;s co-founders for a four-week course to unlock dance
            teachers&apos; potential — covering the science and practice behind
            excellent teaching.
          </p>
          <ul className="dlist">
            <li>
              Health &amp; wellness concepts including warm-up and cool-down
              science
            </li>
            <li>Anatomy and biomechanics behind foundational dance technique</li>
            <li>
              Effective cueing for turnout, port de bras &amp; core alignment
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="bp">
              Enrol Now
            </Link>
            <Link href="/events" className="ghost-dk">
              Watch the Replay →
            </Link>
          </div>
        </div>
        <div
          style={{
            background: "var(--cr)",
            overflow: "hidden",
            minHeight: 400,
            position: "relative",
          }}
        >
          <Image
            src={TEACHER_IMG}
            alt="Teacher course"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* "Stay informed" — newsletter form is deferred for v1; show a Talk-with-us CTA instead */}
      <section className="sec-dk" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <p className="ey lt ct">Stay Informed</p>
          <h2 className="section lt" style={{ marginBottom: 10 }}>
            Stay up to date on <em>industry trends</em>
          </h2>
          <p className="lead lt" style={{ marginBottom: 24 }}>
            Reach out to learn about the latest in dance medicine, education,
            and performance science.
          </p>
          <Link href="/contact" className="bl">
            Talk With Us
          </Link>
        </div>
      </section>

      <CtaBand
        headline={
          <>
            Want to <em>work with us?</em>
          </>
        }
        actions={[{ label: "Connect With Us", href: "/contact" }]}
      />
    </>
  );
}
