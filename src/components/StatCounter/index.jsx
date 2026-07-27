import { useEffect, useState } from "react";

export default function StatCounter({
  target = 200,
  duration = 2000,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setValue(target * progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {value.toFixed(0)}
    </span>
  );
}