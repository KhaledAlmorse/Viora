import { Link } from "react-router-dom";
import Icon from "./Icon";
import heroImg from "../assets/hero.webp";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxurious perfume bottle with white roses"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-surface/40 to-surface" />
      </div>

      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-label-md text-label-md tracking-[0.2em] mb-4 uppercase">
            Essence of Luxury
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-2">
            VIORA PERFUMES
          </h1>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            عطور تُعبر عنك
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-md">
            جودة فاخرة بأسعار تناسبك. نؤمن بأن العطر ليس مجرد رائحة، بل هو
            هوية ترافقك في كل لحظة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/category/men"
              className="bg-primary text-white px-10 py-4 font-label-md text-label-md rounded-lg text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Icon name="male" />
              تسوق الرجالي
            </Link>
            <Link
              to="/category/women"
              className="border gold-border text-primary px-10 py-4 font-label-md text-label-md rounded-lg text-center hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="female" />
              تسوق النسائي
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
