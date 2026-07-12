import { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function FilterTabs({ onFilter, filters = ["الكل"] }) {
  const [activeChip, setActiveChip] = useState("الكل");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef({});
  const containerRef = useRef(null);

  const handleChipClick = (chip) => {
    setActiveChip(chip);
    if (onFilter) onFilter(chip);
  };

  const updateUnderline = () => {
    const activeTab = tabsRef.current[activeChip];
    if (activeTab && containerRef.current) {
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      setUnderlineStyle({ left, width });
    }
  };

  // Run update on state change, filters change, or component mount
  useLayoutEffect(() => {
    // Small timeout ensures browser has finished layout paint
    const timer = setTimeout(updateUnderline, 30);
    return () => clearTimeout(timer);
  }, [activeChip, filters]);

  // Handle window resize to keep underline position aligned
  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeChip]);

  return (
    <section className="sticky top-[72px] z-40 bg-surface/90 backdrop-blur-sm border-y border-outline-variant/10 py-6">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div
          ref={containerRef}
          className="relative flex items-center gap-8 overflow-x-auto pb-2 no-scrollbar"
        >
          {filters.map((chip) => (
            <button
              key={chip}
              ref={(el) => (tabsRef.current[chip] = el)}
              onClick={() => handleChipClick(chip)}
              className={`pb-2 font-label-md text-label-md whitespace-nowrap transition-colors duration-300 relative ${
                activeChip === chip
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {chip}
            </button>
          ))}
          {/* Animated Gold Underline */}
          <div
            className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300 ease-in-out"
            style={{
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
