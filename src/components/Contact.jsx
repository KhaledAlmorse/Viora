import Icon from "./Icon";

export default function Contact() {
  return (
    <section className="py-section-padding bg-surface-bright scroll-mt-24" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary-container p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-on-primary-container text-center md:text-right">
            <h2 className="font-display-md text-display-md mb-4">
              تواصل مع مستشار العطور
            </h2>
            <p className="text-body-lg">
              هل تحتاج لمساعدة في اختيار العطر المناسب لشخصيتك أو كهدية؟
            </p>
          </div>
          <a
            href="https://wa.me/201022750486?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A3%D8%AD%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B7%D9%88%D8%B1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-on-secondary-fixed text-primary px-12 py-5 rounded-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform luxury-shadow"
          >
            <Icon name="chat" className="text-2xl" />
            تحدث معنا على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
