import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = { className?: string; priority?: boolean; variant?: "default" | "light" };

export function BrandLogo({ className, priority = false, variant = "default" }: BrandLogoProps) {
  return (
    <span className={"brand" + (className ? " " + className : "")}>
      <Image className="brand__logo" src={variant === "light" ? siteConfig.brand.logoLight : siteConfig.brand.logo} alt={siteConfig.brand.name} width={710} height={325} priority={priority} unoptimized sizes="(max-width: 640px) 170px, 210px" />
    </span>
  );
}
