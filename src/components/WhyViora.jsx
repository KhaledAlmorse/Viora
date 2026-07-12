import Icon from "./Icon";

const features = [
  {
    icon: "eco",
    title: "خامات مختارة بعناية",
    desc: "أجود الزيوت العطرية العالمية",
  },
  {
    icon: "schedule",
    title: "ثبات يدوم",
    desc: "تركيبة تدوم لأكثر من 24 ساعة",
  },
  {
    icon: "local_shipping",
    title: "شحن لجميع المحافظات",
    desc: "توصيل سريع وآمن لباب المنزل",
  },
  {
    icon: "featured_seasonal_and_gifts",
    title: "تغليف أنيق للهدايا",
    desc: "لمسة فاخرة تليق بأحبائكم",
  },
];

export default function WhyViora() {
  return (
    <section className="py-section-padding bg-surface-container-low scroll-mt-24" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-display-md text-on-surface mb-4">
            لماذا فيورا؟
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface p-8 text-center rounded-lg luxury-shadow flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/10"
            >
              <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={f.icon} className="text-3xl" />
              </div>
              <h3 className="font-label-md text-label-md text-on-surface mb-2">
                {f.title}
              </h3>
              <p className="text-label-sm text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
