import Icon from "./Icon";

const reviews = [
  {
    text: "عاوز اقولك بسم الله ما شاء الله البرفيوم اللي اخدته منك ريحته تحفة اوي وكمان ثباته ما شاء الله، وبالذات البرفيوم اللي هو Stronger with you ريحته جميلة.",
    name: "Ahmed",
    initial: "أ.",
  },
  {
    text: "عايزة اقلك اني من اول لما اختارتها وانا عاملة برش بجد، ريحتها تحفة عجبت ماما وتيتا كمان تقريباً ماما هترش منها اكتر مني. بس بجد انت شاطر جداً والبرفيوم تحفة، واستني شوية البراند هينافس فيكتوريا.",
    name: "Gana",
    initial: "ج.",
  },
  {
    text: "بجد كلمة تحفة قليلة، والتجهيز والأوردر كله تحفة وجميل بشكل خيالي.",
    name: "Sama",
    initial: "س.",
  },
];

export default function Reviews() {
  return (
    <section className="py-section-padding bg-surface-container-highest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-display-md text-on-surface mb-4">
            آراء عملائنا
          </h2>
          <p className="text-on-surface-variant">
            فخورون بثقتكم في جودة منتجاتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-surface p-8 rounded-lg luxury-shadow border border-outline-variant/10"
            >
              <div className="flex gap-1 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" filled />
                ))}
              </div>
              <p className="text-body-md text-on-surface mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center font-bold text-primary">
                  {r.initial}
                </div>
                <div className="text-label-sm">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
