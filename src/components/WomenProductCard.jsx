import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

const badgeBgMap = {
  primary: "bg-primary/90 text-white",
  tertiary: "bg-tertiary/90 text-white",
  secondary: "bg-secondary/90 text-white",
};

export default function WomenProductCard({ product }) {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const { slug, name, tag, badgeColor, description, image } = product;
  const cardRef = useRef(null);
  const inView = useInView(cardRef);

  const displayTag = selectedSize.discount || tag;

  const whatsappUrl = `https://wa.me/201022750486?text=${encodeURIComponent(
    `مرحباً، أريد طلب:\n${name}\nالحجم: ${selectedSize.label}\nالسعر: ${selectedSize.price} ج.م`
  )}`;

  return (
    <div
      onClick={() => navigate(`/product/${slug}`)}
      ref={cardRef}
      className={`group bg-white rounded-xl border border-outline-variant/30 overflow-hidden luxury-shadow transition-all duration-700 flex flex-col h-full no-underline cursor-pointer ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative aspect-[1/1.2] overflow-hidden bg-surface-container-lowest">
        <img
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          src={image}
          alt={name}
        />
        {displayTag && (
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span
              className={`${badgeBgMap[badgeColor] || badgeBgMap.primary} text-[10px] px-3 py-1 rounded-full font-bold`}
            >
              {displayTag}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 text-center flex-grow flex flex-col">
        <h3 className="font-display-md text-display-md text-primary mb-2 h-[80px] flex items-center justify-center overflow-hidden">
          {name}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-3 line-clamp-2 h-12">
          {description}
        </p>
        <div className="flex justify-center items-center gap-4 mb-6 mt-auto">
          <div className="flex flex-col text-center">
            <span className="text-primary font-bold text-xl">{selectedSize.price} ج.م</span>
            {selectedSize.oldPrice && (
              <span className="text-outline text-sm line-through decoration-error/40">
                {selectedSize.oldPrice} ج.م
              </span>
            )}
          </div>
          <div className="h-6 w-[1px] bg-outline-variant" />
          <div className="flex gap-1" onClick={(e) => e.preventDefault()}>
            {product.sizes.map((size) => (
              <button
                key={size.label}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`px-2 py-0.5 text-[11px] rounded transition-all font-bold ${
                  selectedSize.label === size.label
                    ? "bg-primary text-white"
                    : "bg-surface-container-highest text-on-surface-variant hover:bg-outline-variant"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full py-4 bg-on-secondary-fixed text-primary font-bold rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <Icon name="chat" className="text-xl" filled />
          اطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
