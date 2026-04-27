import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Affiliate Partners — Products We Trust",
  description:
    "Products we trust and recommend for dancers — with exclusive discounts available through the Dance Ready Project.",
  alternates: { canonical: "/affiliates" },
};

const PARTNERS = [
  {
    logo: "KT",
    name: "KTape MySkin Kinesiotape",
    desc: "Kinesiotape designed for athletes of all skin tones. Crafted to provide superior performance and visibility on diverse skin.",
    discount: "25% Off",
    code: "DRP25",
  },
  {
    logo: "ION",
    name: "ION Performance Products",
    desc: "All-natural performance body care crafted specifically for athletes. Clean ingredients, high performance — designed to support recovery and daily training.",
    discount: "25% Off",
    code: "DANCEREADY",
  },
  {
    logo: "CX",
    name: "Crosspuncture® Therapy",
    desc: "Versatile therapy tool for trigger points, acupuncture points, tense muscles, and sore joints. Used by practitioners and athletes for targeted relief.",
    discount: "Special Pricing",
    code: undefined,
  },
];

export default function AffiliatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Discounts"
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
                fontSize: 120,
                fontWeight: 300,
                color: "rgba(28,28,26,0.07)",
                lineHeight: 1,
              }}
            >
              DRP
            </p>
          </div>
        }
      >
        <h1 className="display lt">
          Affiliate <em>Partners</em>
        </h1>
        <p className="lead lt">
          Products we trust and recommend for dancers. Exclusive discounts
          available through Dance Ready Project.
        </p>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <p className="ey">Our Partners</p>
          <h2 className="section">
            Products we <em>genuinely</em> trust
          </h2>
          <div className="aff-grid" style={{ marginTop: 32 }}>
            {PARTNERS.map((p) => (
              <article className="aff-card" key={p.name}>
                <div className="aff-logo">{p.logo}</div>
                <div className="aff-name">{p.name}</div>
                <p className="aff-desc">{p.desc}</p>
                <span className="disc">{p.discount}</span>
                <br />
                {p.code && (
                  <>
                    <span className="dcode">{p.code}</span>
                    <br />
                  </>
                )}
                <Link href="/contact" className="bu" style={{ marginTop: 10 }}>
                  Shop with Discount →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-cr">
        <div
          className="wrap"
          style={{ maxWidth: 600, textAlign: "center", margin: "0 auto" }}
        >
          <p className="ey ct">Partner With Us</p>
          <h2 className="section" style={{ marginBottom: 12 }}>
            Become an <em>affiliate</em>
          </h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            We partner with brands whose products we genuinely use and trust for
            dancers. If you have a product that serves the dance community,
            we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="bp">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
