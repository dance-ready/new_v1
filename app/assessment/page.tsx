import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Dance Ready Score — Baseline Fitness Assessment",
  description:
    "The Dance Ready Score™ is a research-based baseline fitness assessment for dancers — pinpointing your current performance capacity and producing a clear roadmap to reduce injury risk.",
  alternates: { canonical: "/assessment" },
};

const HERO_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/ance-eady-screen60d5636b1af0c_lg.jpeg";

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Baseline Fitness Assessment"
        imageSrc={HERO_IMG}
        imageAlt="Dance Ready Score"
      >
        <h1 className="display lt">
          Dance Ready <em>Score™</em>
        </h1>
        <p className="lead lt">
          Like all athletes, dancers benefit from knowing their fitness baseline
          before beginning a training season.
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
          <div>
            <p className="ey">What is the DRS?</p>
            <h2 className="section">
              Your performance <em>GPS</em>
            </h2>
            <p className="lead">
              The Dance Ready Score acts as a GPS for dancers — pinpointing
              current fitness level, identifying goals, and providing a clear
              roadmap to achieve them.
            </p>
            <ul className="dlist">
              <li>Identifies strengths to build upon</li>
              <li>Highlights vulnerabilities that may lead to injury</li>
              <li>Delivers real-time insights into performance capacity</li>
              <li>Reduces risk of injuries and optimises performance</li>
              <li>
                Safeguards financial stability through decreased injury costs
              </li>
            </ul>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="bp">
                Get the Dance Ready Score
              </Link>
              <Link href="/contact" className="ghost-dk">
                Talk with us →
              </Link>
            </div>
          </div>
          <div>
            <div className="pq">
              &ldquo;The DRS provides a framework for structured wellness that
              serves as an adjunct to technique training.&rdquo;
            </div>
            <div
              style={{
                border: "1px solid var(--bd)",
                padding: 28,
                marginTop: 20,
              }}
            >
              <p className="ey" style={{ marginBottom: 12 }}>
                How DRS is different
              </p>
              <ul className="dlist">
                <li>Immediate results &amp; real-time feedback</li>
                <li>Language dancers and administrators understand</li>
                <li>Results for both dancers &amp; administrators</li>
                <li>No licensure required to administer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="sec-dk">
        <div className="wrap">
          <p className="ey lt">Process</p>
          <h2 className="section lt">
            How it <em>works</em>
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-n">01</div>
              <div className="step-t">Assessment</div>
              <p className="step-d">
                Dancers go through fitness testing and receive their scores.
                Quick, non-invasive screening with immediate feedback on
                performance capacity.
              </p>
            </div>
            <div className="step">
              <div className="step-n">02</div>
              <div className="step-t">Workshop</div>
              <p className="step-d">
                Review your scores and understand the implications for training,
                performance, and injury risk.
              </p>
            </div>
            <div className="step">
              <div className="step-n">03</div>
              <div className="step-t">Performance Enhancement</div>
              <p className="step-d">
                Receive a structured framework to address results. Corrective
                exercise prescriptions tailored to your unique profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* audience */}
      <section className="sec-cr">
        <div className="wrap">
          <p className="ey">Who It&apos;s For</p>
          <h2 className="section">
            Built for <em>dancers</em> and administrators
          </h2>
          <div className="g2" style={{ marginTop: 28 }}>
            <div className="aud-card">
              <div className="aud-top">
                <div className="aud-ov">
                  <div className="aud-title">For Dancers</div>
                </div>
              </div>
              <div className="aud-body">
                <p className="lead" style={{ marginBottom: 12 }}>
                  Unlock the secrets to your dance performance.
                </p>
                <ol style={{ paddingLeft: 16 }}>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Understand your body through detailed analysis
                  </li>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Identify your strengths and vulnerabilities
                  </li>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Understand how injuries affect performance
                  </li>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Find a clear path to improving your dance capacity
                  </li>
                </ol>
              </div>
            </div>
            <div className="aud-card">
              <div className="aud-top">
                <div className="aud-ov">
                  <div className="aud-title">For Administrators</div>
                </div>
              </div>
              <div className="aud-body">
                <p className="lead" style={{ marginBottom: 12 }}>
                  Protect your organisation&apos;s fiscal bottom line.
                </p>
                <ol style={{ paddingLeft: 16 }}>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Understand injury trends in your organisation
                  </li>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Assess the performance capacity of your dancers
                  </li>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Evaluate ability to meet choreography demands
                  </li>
                  <li
                    style={{
                      fontSize: 14,
                      color: "var(--mi)",
                      padding: "4px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    Access a framework for performance enhancement
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline={
          <>
            Ready to know your <em>Dance Ready Score?</em>
          </>
        }
        actions={[
          { label: "Get the Dance Ready Score", href: "/contact" },
        ]}
      />
    </>
  );
}
