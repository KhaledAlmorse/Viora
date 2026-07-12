import Icon from "./Icon";

export default function Search({ value = "", onChange, placeholder = "ابحث عن عطر...", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Icon
        name="search"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-outline"
      />
      <input
        className="w-full bg-surface-container-low hover:bg-surface-container transition-colors duration-300 border-none rounded-xl py-4 pr-12 pl-4 focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline/60 font-body-md"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
