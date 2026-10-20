import React from "react";
import { useEffect, useState } from "react";

export default function StatCounter({
  target = 200,
  duration = 2000,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime;
    let frame;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = reduceMotion
        ? 1
        : Math.min((timestamp - startTime) / duration, 1);

      setValue(target * progress);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return (
    <span>
      {value.toFixed(0)}
    </span>
  );
}