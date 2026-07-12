import Search from "./Search";

export default function CategoryHeader({ searchValue = "", onSearch }) {
  return (
    <header className="relative overflow-hidden pt-12 md:pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h1 className="font-display-lg text-display-lg md:text-[64px] mb-4 text-primary">
          العطور الرجالية
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
          مجموعة حصرية من أرقى العطور التي تجسد الرجولة العصرية والجاذبية الخالدة. صُممت بعناية لتمنحك حضوراً لا يُنسى في كل مناسبة.
        </p>
        <Search value={searchValue} onChange={onSearch} className="max-w-md mx-auto" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_50%_0%,_#f2ede5_0%,_transparent_70%)] pointer-events-none" />
    </header>
  );
}
