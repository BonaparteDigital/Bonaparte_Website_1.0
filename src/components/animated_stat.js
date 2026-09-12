import React, { useEffect, useRef, useState } from "react";

const DURATION_MS = 1500;

// Splits "20+", "$15M+", "100%" etc. into a prefix, the number to animate,
// and a suffix -- so only the digits count up, everything else stays put.
const parseStat = (stat) => {
  const match = String(stat).match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: String(stat) };
  const [, prefix, digits, suffix] = match;
  return { prefix, target: parseInt(digits, 10), suffix };
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const AnimatedStat = ({ stat, label }) => {
  const { prefix, target, suffix } = parseStat(stat);
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / DURATION_MS, 1);
              setValue(Math.round(target * easeOutCubic(progress)));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);

            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <p className="text-5xl md:text-6xl font-black text-orange mb-2">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="text-olive-light text-lg">{label}</p>
    </div>
  );
};

export default AnimatedStat;
