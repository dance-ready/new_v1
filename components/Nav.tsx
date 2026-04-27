"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/dansebridge", label: "Dansebridge" },
  { href: "/education", label: "Education" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/affiliates", label: "Affiliates" },
];

const SIGN_IN_URL =
  process.env.NEXT_PUBLIC_ZENLER_LOGIN_URL ?? "https://www.danceready.org/login";

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="nav">
      <div className="nav-in">
        <Link href="/" className="logo">
          <span className="lm">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v12M1 7h12M3 3l8 8M11 3l-8 8"
                stroke="#FDFCFA"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Dance Ready Project
        </Link>
        <ul className="navul">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? "on" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={SIGN_IN_URL}>
          Sign In
        </a>
      </div>
    </nav>
  );
}
