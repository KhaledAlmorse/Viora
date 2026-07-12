import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import WomenHero from "../components/WomenHero";
import FilterTabs from "../components/FilterTabs";
import WomenProductGrid from "../components/WomenProductGrid";
import PremiumFeatures from "../components/PremiumFeatures";
import Footer from "../components/Footer";
import products from "../data/products";

const womenProducts = products.filter((p) => p.category === "نسائي");

export default function WomenCategory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("الكل");

  const womenTags = useMemo(
    () => ["الكل", ...new Set(womenProducts.flatMap((p) => p.tags))],
    []
  );

  return (
    <div dir="rtl" className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />
      <main>
        <WomenHero searchValue={searchQuery} onSearch={setSearchQuery} />
        <FilterTabs onFilter={setActiveFilter} filters={womenTags} />
        <WomenProductGrid searchQuery={searchQuery} activeFilter={activeFilter} />
        <PremiumFeatures />
      </main>
      <Footer />
    </div>
  );
}
