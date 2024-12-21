"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { PATHS } from "@/constants/paths";

interface BackProviderProps {
  children: ReactNode;
}

export default function BackProvider({ children }: BackProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === PATHS.HOME);
  }, [pathname]);

  useEffect(() => {
    const handleCapacitorBack = async () => {
      if (isHome) {
        console.log(Capacitor.getPlatform())
        if (Capacitor.getPlatform() === "android" || Capacitor.getPlatform() === "ios") {
          await App.exitApp();
        }
        // Si es web (ej: local, desktop browser), no hacemos nada
      } else {
        router.back();
      }
    };

    const handlePopState = () => {
      if (isHome) {
        if (Capacitor.getPlatform() === "android" || Capacitor.getPlatform() === "ios") {
          App.exitApp();
        }
      } else {
        router.back();
      }
    };

    const removeCapacitorListenerPromise = App.addListener(
      "backButton",
      handleCapacitorBack
    );

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      removeCapacitorListenerPromise.then((listener) => listener.remove());
    };
  }, [router, isHome]);

  return <>{children}</>;
}
