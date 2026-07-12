import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import CategoryHeader from "../components/CategoryHeader";
import FilterTabs from "../components/FilterTabs";
import MenProductGrid from "../components/MenProductGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import products from "../data/products";

const menProducts = products.filter((p) => p.category === "رجالي");

export default function MenCategory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("الكل");

  const menTags = useMemo(
    () => ["الكل", ...new Set(menProducts.flatMap((p) => p.tags))],
    []
  );

  return (
    <div dir="rtl" className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />
      <CategoryHeader searchValue={searchQuery} onSearch={setSearchQuery} />
      <FilterTabs onFilter={setActiveFilter} filters={menTags} />
      <MenProductGrid searchQuery={searchQuery} activeFilter={activeFilter} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
