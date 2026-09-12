import React from "react";

// Height is animated via a grid-rows trick (0fr -> 1fr) rather than a fixed
// max-height, so it works smoothly regardless of each answer's length.
const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-green/20">
    <button
      className="w-full text-left py-5 flex justify-between items-center gap-4 font-semibold text-lg text-green"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{q}</span>
      <span className="shrink-0 text-orange text-2xl font-light">{isOpen ? "−" : "+"}</span>
    </button>
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="pb-5 text-green/80 leading-relaxed">{a}</p>
      </div>
    </div>
  </div>
);

export default FaqItem;
