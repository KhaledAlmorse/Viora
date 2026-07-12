import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import SizeSelector from "../components/SizeSelector";
import FragrancePyramid from "../components/FragrancePyramid";
import LongevityStats from "../components/LongevityStats";
import RelatedProducts from "../components/RelatedProducts";
import CustomerReviewsDetail from "../components/CustomerReviewsDetail";
import { getProductBySlug } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useMemo(() => getProductBySlug(id), [id]);
  const [selectedSize, setSelectedSize] = useState(() => (product && product.sizes && product.sizes.length > 0) ? product.sizes[0] : null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize(null);
    }
  }, [product]);

  const whatsappUrl = useMemo(() => {
    if (!product || !selectedSize) return "#";
    const msg = `مرحباً، أريد طلب:\n${product.name}\nالحجم: ${selectedSize.label}\nالسعر: ${selectedSize.price} ج.م`;
    return `https://wa.me/201022750486?text=${encodeURIComponent(msg)}`;
  }, [product, selectedSize]);

  if (!product) {
    return (
      <div dir="rtl" className="bg-surface text-on-surface min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display-lg text-display-lg text-primary mb-4">المنتج غير موجود</h1>
            <p className="text-on-surface-variant mb-8">عذراً، لم نتمكن من العثور على هذا المنتج.</p>
            <Link
              to="/"
              className="bg-primary text-white px-8 py-4 rounded-lg font-label-md inline-block hover:opacity-90 transition-opacity"
            >
              العودة إلى المتجر
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div dir="rtl" className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ProductGallery images={[product.image, ...product.gallery]} />
          <div className="flex flex-col space-y-8">
            <ProductInfo product={product} selectedSize={selectedSize} />
            {product.sizes && product.sizes.length > 0 && (
              <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />
            )}
            <FragrancePyramid notes={product.fragrancePyramid} />
            <LongevityStats longevity={product.longevity} sillage={product.sillage} />
            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full bg-on-secondary-fixed text-primary px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all luxury-shadow active:scale-95 ${
                  clicked ? "scale-95" : ""
                }`}
                onMouseDown={() => setClicked(true)}
                onMouseUp={() => setClicked(false)}
                onMouseLeave={() => setClicked(false)}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.605 6.046L0 24l6.108-1.603a11.83 11.83 0 005.94 1.597h.005c6.637 0 12.033-5.393 12.035-12.031a11.77 11.77 0 00-3.486-8.413z" />
                </svg>
                اطلب عبر واتساب
              </a>
            </div>
          </div>
        </div>
        <RelatedProducts slugs={product.related} />
        <CustomerReviewsDetail reviews={product.reviews} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
