"use client";

import { useEffect } from "react";

const METRICOOL_HASH = "93e34045a3462bc5c2ad81ae0e30f0e0";
const METRICOOL_SCRIPT = "https://tracker.metricool.com/resources/be.js";

declare global {
  interface Window {
    beTracker?: {
      t: (config: { hash: string }) => void;
    };
  }
}

/**
 * Loads the Metricool analytics beacon after cookie consent is granted.
 */
export function MetricoolTracker() {
  useEffect(() => {
    function init() {
      window.beTracker?.t({ hash: METRICOOL_HASH });
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = METRICOOL_SCRIPT;
    script.onload = init;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
