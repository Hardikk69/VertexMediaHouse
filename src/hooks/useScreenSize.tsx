import { useEffect, useState } from "react";

export type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl";

const getScreenSize = (): ScreenSize => {
  if (typeof window === "undefined") return "xl"; // SSR fallback

  const width = window.innerWidth;

  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  return "sm";
};

export const useScreenSize = (): ScreenSize => {
  const [screen, setScreen] = useState<ScreenSize>(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreen(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
};
