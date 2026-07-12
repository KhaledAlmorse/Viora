export default function SizeSelector({ sizes, selectedSize, onSelect }) {
  return (
    <div className="space-y-4">
      <span className="block font-label-md text-label-md text-on-surface">اختر الحجم</span>
      <div className="flex gap-4">
        {sizes.map((size) => {
          const isSelected = selectedSize && selectedSize.label === size.label;
          return (
            <button
              key={size.label}
              onClick={() => onSelect && onSelect(size)}
              className={`px-6 py-3 rounded-xl flex flex-col items-center min-w-[100px] transition-all ${
                isSelected
                  ? "border-2 border-primary bg-primary/5"
                  : "border-2 border-outline-variant hover:border-primary/50"
              }`}
            >
              <span className={`font-bold ${isSelected ? "text-primary" : "text-on-surface"}`}>
                {size.label}
              </span>
              <span className={`text-xs ${isSelected ? "text-primary/70" : "text-on-surface-variant"}`}>
                {size.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
