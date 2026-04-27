import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About — The Dance Ready Project",
  description:
    "Founded by physical therapists and lifelong dancers Dr. Sheyi Ojofeitimi and Dr. Danelle Dickson, the Dance Ready Project bridges dance science and studio practice through education, screening, and conditioning.",
  alternates: { canonical: "/about" },
};

const HERO_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/samantha-weisburg-h-cx-s-6g-unsplash5fccd7626bbc4_lg.jpg";

const SHEYI_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/20230414-0007644d9d5fa6e1a_lg.jpg";

const DANELLE_IMG =
  "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/5fccd2f593d88_lg.jpg";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        imageSrc={HERO_IMG}
        imageAlt="Dancers"
      >
        <h1 className="display lt">
          About the Dance Ready <em>Project™</em>
        </h1>
      </PageHero>

      {/* vision / mission */}
      <div className="vision-g">
        <div className="vc">
          <p className="ey">Our Vision</p>
          <h2 className="ah">Elevating the standard of care for dancers.</h2>
          <p className="lead">
            To bridge the gap between dance science and studios — bringing
            evidence-based practice to every dancer, at every level, in every
            institution.
          </p>
        </div>
        <div className="vc">
          <p className="ey">Our Mission</p>
          <h2 className="ah">Empowering dancers through knowledge and tools.</h2>
          <p className="lead">
            To empower dancers and dance organisations with research-based
            education, screening tools, and conditioning programs that improve
            performance and reduce injury across the lifespan.
          </p>
        </div>
      </div>

      {/* arms */}
      <section className="sec-cr">
        <div className="wrap">
          <p className="ey">Our Approach</p>
          <h2 className="section">
            Three arms, one <em>integrated</em> model
          </h2>
          <div className="arms">
            <div className="arm">
              <div className="an">01</div>
              <div className="at">Education</div>
              <p className="ad">
                Through workshops, webinars, studio consultations, and online
                content, we equip dancers, educators, and healthcare providers
                with critical information about dancer health, injury risk, and
                performance readiness.
              </p>
              <Link href="/education" className="bu" style={{ marginTop: 16 }}>
                Learn More →
              </Link>
            </div>
            <div className="arm">
              <div className="an">02</div>
              <div className="at">Fitness Assessment</div>
              <p className="ad">
                The Dance Ready Score™ is used by studios, companies, and
                schools across the country to proactively support dancer health
                and inform training decisions.
              </p>
              <Link href="/assessment" className="bu" style={{ marginTop: 16 }}>
                Learn More →
              </Link>
            </div>
            <div className="arm">
              <div className="an">03</div>
              <div className="at">Dance Conditioning</div>
              <p className="ad">
                Customised interventions and conditioning programs that help
                dancers strengthen weaknesses, enhance performance, and prevent
                future injuries — grounded in sports science.
              </p>
              <Link href="/dansebridge" className="bu" style={{ marginTop: 16 }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* founders */}
      <section className="sec">
        <div className="wrap">
          <p className="ey">Leadership</p>
          <h2 className="section">
            Our <em>founders</em>
          </h2>
          <div className="founders">
            <article className="founder">
              <div className="f-img">
                <Image
                  src={SHEYI_IMG}
                  alt="Dr. Sheyi Ojofeitimi"
                  fill
                  sizes="(max-width: 900px) 100vw, 200px"
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                />
              </div>
              <div className="f-body">
                <div className="f-name">Dr. Sheyi Ojofeitimi</div>
                <div className="f-role">Co-Founder · PT, DPT, OCS</div>
                <div className="f-creds">
                  <span className="fc">Alvin Ailey Dance Foundation</span>
                  <span className="fc">Dance/USA Board</span>
                  <span className="fc">ADAM Center</span>
                </div>
                <div className="f-bio">
                  <p>
                    Licensed physical therapist and Director of Therapy Services
                    at the Alvin Ailey Dance Foundation. Her work has reduced
                    overuse injuries by 37% and time-loss injuries by 33%.
                  </p>
                  <p>
                    Published researcher and co-author of{" "}
                    <em>
                      Dance Injuries: Reducing Risk and Maximizing Performance
                    </em>
                    . Has worked with Wicked, The Book of Mormon, Free Style
                    Love Supreme, and other major Broadway productions.
                  </p>
                </div>
              </div>
            </article>
            <article className="founder">
              <div className="f-img">
                <Image
                  src={DANELLE_IMG}
                  alt="Dr. Danelle Dickson"
                  fill
                  sizes="(max-width: 900px) 100vw, 200px"
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                />
              </div>
              <div className="f-body">
                <div className="f-name">Dr. Danelle Dickson</div>
                <div className="f-role">Co-Founder · PT, DPT, OCS</div>
                <div className="f-creds">
                  <span className="fc">Performance Plus PT</span>
                  <span className="fc">IADMS Member</span>
                  <span className="fc">DAE Podcast Host</span>
                </div>
                <div className="f-bio">
                  <p>
                    Licensed physical therapist, Performing Arts specialist, and
                    creator of Dansebridge Online. With 42 years in dance and 17
                    years in clinical practice, she has worked with thousands of
                    dancers at pre-professional and professional levels.
                  </p>
                  <p>
                    Has worked with Netflix&apos;s Bridgerton, Alvin Ailey, and
                    Tony Award-winning productions. Featured in APTA Magazine
                    (2022) for innovation in clinical practice.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        headline={
          <>
            Get your best <em>dance life.</em>
          </>
        }
        actions={[
          { label: "Start Your Journey", href: "/contact" },
          { label: "View Events →", href: "/events", variant: "ghost" },
        ]}
      />
    </>
  );
}
