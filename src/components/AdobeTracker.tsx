import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    _satellite?: {
      track: (eventName: string, data?: any) => void;
    };
    adobeDataLayer?: any[];
  }
}

function formatPageName(pathname: string): string {
  if (pathname === "/") return "Home";
  return pathname
    .replace(/^\//, "")
    .split(/[-/]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function AdobeTracker() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname;
    const pageName = formatPageName(pagePath);

    // Method A: Direct Call (recommended if not using ACDL extension)
    if (window._satellite && typeof window._satellite.track === "function") {
      window._satellite.track("page-view", {
        pageName,
        pagePath,
      });
    }

    // Method B: Adobe Client Data Layer (ACDL)
    window.adobeDataLayer = window.adobeDataLayer || [];
    window.adobeDataLayer.push({
      event: "page-view",
      page: {
        name: pageName,
        path: pagePath,
      },
    });
  }, [location]);

  return null;
}
