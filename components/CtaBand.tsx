import Link from "next/link";

type Action = {
  label: string;
  href: string;
  variant?: "light" | "ghost";
};

type Props = {
  headline: React.ReactNode;
  actions: Action[];
};

export default function CtaBand({ headline, actions }: Props) {
  return (
    <section className="cta-band">
      <h2>{headline}</h2>
      <div className="cta-acts">
        {actions.map((a) => (
          <Link
            key={a.href + a.label}
            href={a.href}
            className={a.variant === "ghost" ? "bg-btn" : "bl"}
          >
            {a.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
