import Link from "next/link";

export default function TopBar() {
  return (
    <div className="topbar">
      New: DRP Insider Info Session —{" "}
      <Link href="/events">Register Now →</Link>
    </div>
  );
}
