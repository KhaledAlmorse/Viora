import { Link } from "react-router-dom";

export default function ProductInfo({ product, selectedSize }) {
  const { subtitle, description, breadcrumbLabel, categoryLink } = product;

  const price = selectedSize ? selectedSize.price : product.price;
  const oldPrice = selectedSize ? selectedSize.oldPrice : product.oldPrice;
  const discount = selectedSize ? selectedSize.discount : product.discount;

  return (
    <header>
      <nav className="flex gap-2 text-on-surface-variant font-label-sm text-label-sm mb-4">
        <Link to="/" className="hover:text-primary">الرئيسية</Link>
        <span>/</span>
        <Link to={categoryLink} className="hover:text-primary">{breadcrumbLabel}</Link>
        <span>/</span>
        <span className="text-primary font-bold">{product.name}</span>
      </nav>
      <h1 className="font-display-lg text-display-lg text-primary mb-2">{product.name}</h1>
      <h2 className="font-headline-lg text-headline-lg text-on-surface-variant">{subtitle}</h2>
      <div className="flex items-center gap-4 mt-4">
        <span className="font-display-md text-display-md text-primary">{price} ج.م</span>
        {oldPrice && (
          <span className="text-on-surface-variant line-through text-body-lg">{oldPrice} ج.م</span>
        )}
        {discount && (
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm">{discount}</span>
        )}
      </div>
      <div className="space-y-4 mt-6">
        <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">{description}</p>
      </div>
    </header>
  );
}
