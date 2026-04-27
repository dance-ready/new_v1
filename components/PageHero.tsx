import Image from "next/image";

type Props = {
  eyebrow: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFallback?: React.ReactNode;
  children: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  imageSrc,
  imageAlt,
  imageFallback,
  children,
}: Props) {
  return (
    <div className="ph">
      <div className="ph-vis">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        ) : (
          imageFallback
        )}
      </div>
      <div className="ph-dk">
        <p className="ey lt">{eyebrow}</p>
        {children}
      </div>
    </div>
  );
}
