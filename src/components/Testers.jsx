import Icon from "./Icon";
import testerSet from "../assets/testers/tester-set-3x3ml.webp";
import tester5ml from "../assets/testers/tester-5ml.webp";
import tester10ml from "../assets/testers/tester-10ml.webp";

const testerProducts = [
  {
    name: "باك التجربة (3 عطور × 3 مل)",
    sizeLabel: "3 تسترات × 3 مل",
    price: 70,
    image: testerSet,
    whatsappText: "مرحبًا، أود طلب باك التجربة (3 عطور × 3 مل) - 70 جنيه",
  },
  {
    name: "تستر 5 مل",
    sizeLabel: "5 مل",
    price: 45,
    image: tester5ml,
    whatsappText: "مرحبًا، أود طلب تستر بحجم 5 مل - 45 جنيه",
  },
  {
    name: "تستر 10 مل",
    sizeLabel: "10 مل",
    price: 80,
    image: tester10ml,
    whatsappText: "مرحبًا، أود طلب تستر بحجم 10 مل - 80 جنيه",
  },
];

export default function Testers() {
  return (
    <section className="py-section-padding bg-surface scroll-mt-24" id="testers">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-display-md text-on-surface mb-4">
            تيستر
          </h2>
          <p className="text-on-surface-variant mb-4">
            جرّب عطورك المفضلة قبل الشراء بالحجم الكامل
          </p>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {testerProducts.map((tester) => (
            <div key={tester.name} className="group flex flex-col h-full">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container mb-6 rounded-lg luxury-shadow">
                <img
                  src={tester.image}
                  alt={tester.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] px-3 py-1 font-bold rounded-full">
                  {tester.sizeLabel}
                </div>
              </div>

              <div className="text-center flex flex-col flex-grow">
                <h3 className="font-display-md text-[20px] text-on-surface mb-2 h-14 overflow-hidden line-clamp-2">
                  {tester.name}
                </h3>
                <div className="flex items-center justify-center gap-3 mt-auto mb-4">
                  <span className="text-primary font-bold text-lg">
                    {tester.price} ج.م
                  </span>
                </div>
                <a
                  href={`https://wa.me/201022750486?text=${encodeURIComponent(tester.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-on-secondary-fixed text-primary px-6 py-3 font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors w-full mt-2"
                >
                  <Icon name="chat" className="text-[18px]" />
                  اطلب عبر واتساب
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
