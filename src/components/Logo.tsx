import { Link } from "react-router-dom";
import logoDark from "@/assets/logo.png";
import logoLight from "@/assets/logo - Copy.png";

const Logo = ({ variant = "dark", size = "default" }: { variant?: "dark" | "light"; size?: "default" | "small" }) => {
  const src = variant === "light" ? logoLight : logoDark;
  const heightClass = size === "small" ? "h-[42px] md:h-[50px]" : "h-12 md:h-14";

  return (
    <Link to="/" className="block shrink-0">
      <img src={src} alt="Pixel2Pro" className={`${heightClass} w-auto object-contain`} />
    </Link>
  );
};

export default Logo;
