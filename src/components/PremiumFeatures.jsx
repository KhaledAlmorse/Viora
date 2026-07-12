import Icon from "./Icon";

const features = [
  { icon: "verified", title: "جودة مضمونة وثبات يدوم" },
  { icon: "local_shipping", title: "شحن سريع لكل المحافظات" },
  { icon: "feature_search", title: "تغليف أنيق للهدايا" },
  { icon: "spa", title: "خامات مختارة بعناية" },
];

export default function PremiumFeatures() {
  return (
    <section className="bg-surface-container-high py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-4">
              <Icon name={f.icon} className="text-4xl text-primary" />
              <h4 className="font-label-md text-label-md text-primary">{f.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
