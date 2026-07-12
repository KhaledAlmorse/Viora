import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const quickLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "عطور رجالية", to: "/category/men" },
  { label: "عطور نسائية", to: "/category/women" },
  { label: "من نحن", to: "/#about", hash: "about" },
];
const supportLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Shipping Info",
  "WhatsApp Concierge",
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="font-display-md text-display-md text-primary mb-6 inline-block no-underline">
            VIORA PERFUMES
          </Link>
          <p className="text-on-surface-variant text-body-md max-w-sm mb-8">
            مؤسسة مصرية رائدة في صناعة العطور الفاخرة، نسعى لتقديم تجربة عطرية
            استثنائية تجمع بين الرقي والسعر المناسب.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Icon name="share" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Icon name="notifications" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">
            روابط سريعة
          </h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={(e) => {
                    if (link.hash && location.pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById(link.hash);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-on-surface-variant hover:text-primary transition-colors text-label-sm no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">
            الدعم والمساعدة
          </h4>
          <ul className="space-y-4">
            {supportLinks.map((l, i) => (
              <li key={l}>
                <a
                  href={
                    i === supportLinks.length - 1
                      ? "https://wa.me/201022750486?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A3%D8%AD%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B7%D9%88%D8%B1"
                      : "#"
                  }
                  target={i === supportLinks.length - 1 ? "_blank" : undefined}
                  rel={
                    i === supportLinks.length - 1
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    i === supportLinks.length - 1
                      ? "text-primary font-bold underline transition-colors text-label-sm"
                      : "text-on-surface-variant hover:text-primary transition-colors text-label-sm"
                  }
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-outline-variant/30 bg-surface-container-low/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 text-center flex-wrap">
          <a
            href="tel:+2001098101014"
            className="text-on-surface-variant text-label-sm flex items-center gap-1.5 hover:text-primary transition-colors no-underline"
          >
            <span dir="ltr">+20 01098101014</span>
            <Icon name="call" className="text-primary text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/khaled-elmorse-manea-53863623b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant text-label-sm flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors no-underline group"
          >
            <span>LinkedIn</span>
            <svg className="w-4 h-4 text-primary group-hover:text-[#0A66C2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <span className="text-primary font-bold text-label-sm flex items-center gap-1.5">
            Khaled Elmorse Manea
            <Icon name="person" className="text-primary text-base" />
          </span>

          <span className="text-on-surface-variant text-label-sm flex items-center gap-1.5">
            <span className="tracking-wide">Designed &amp; Developed by </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
