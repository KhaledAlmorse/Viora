import womanHeroImg from "../assets/Womanhero.webp";
import Search from "./Search";

export default function WomenHero({ searchValue = "", onSearch }) {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin-desktop py-12 md:py-20 overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="font-display-lg text-display-lg md:text-6xl text-primary mb-6">
            العطور النسائية
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg leading-relaxed">
            انغمسي في عالم من الأنوثة والرقي مع تشكيلتنا المختارة من العطور الفاخرة. عبير يجسد الأناقة والجاذبية في كل رشة، صمم ليرافقك في أجمل لحظاتك.
          </p>
          <Search value={searchValue} onChange={onSearch} className="max-w-md" />
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow group transition-all duration-700">
          <img
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src={womanHeroImg}
            alt="Luxury perfume collection for women"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
