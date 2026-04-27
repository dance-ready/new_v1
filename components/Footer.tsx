import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/dansebridge", label: "Dansebridge" },
  { href: "/education", label: "Education" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-in">
        <div>
          <Link href="/" className="f-logo">
            Dance Ready Project
          </Link>
          <p className="f-tag">
            Reducing injury risk and elevating performance for dancers across
            the lifespan.
          </p>
        </div>
        <div className="f-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="f-copy">
        © {new Date().getFullYear()} Dance Ready Project. All rights reserved.
      </p>
    </footer>
  );
}
