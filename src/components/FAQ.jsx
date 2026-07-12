const faqs = [
  {
    q: "ما هي مدة ثبات العطور؟",
    a: "عطور فيورا تتميز بتركيز عالٍ (Eau de Parfum) يضمن لك ثباتاً يدوم لأكثر من 24 ساعة على الملابس وفواحان ملحوظ في الساعات الأولى.",
  },
  {
    q: "هل تتوفر عينات للتجربة قبل الشراء؟",
    a: "نعم، نوفر بوكس العينات الذي يحتوي على 5 من أفضل عطورنا بحجم صغير ليتيح لك تجربة الروائح واختيار الأنسب لك.",
  },
  {
    q: "كيف يمكنني الطلب؟",
    a: 'يمكنك الطلب مباشرة عبر الضغط على زر "اطلب عبر واتساب" الموجود تحت كل منتج، وسيقوم فريق خدمة العملاء بالرد عليك فوراً لتأكيد طلبك.',
  },
];

export default function FAQ() {
  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-3xl mx-auto px-margin-mobile">
        <div className="text-center mb-12">
          <h2 className="font-display-md text-display-md text-on-surface mb-4">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-surface-container-low p-6 rounded-lg cursor-pointer"
            >
              <summary className="flex justify-between items-center font-label-md text-label-md text-on-surface list-none">
                {item.q}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
