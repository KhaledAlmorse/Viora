import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function ProductCard({ product, badge }) {
  const navigate = useNavigate();
  const { name, slug, image, sizes } = product;

  // Default to 100ml price
  const defaultSize = sizes?.[0] || { label: "100 مل", price: 549, oldPrice: 599 };
  const price = defaultSize.price;
  const oldPrice = defaultSize.oldPrice;

  const whatsappUrl = `https://wa.me/201022750486?text=${encodeURIComponent(
    `مرحباً، أريد طلب:\n${name}\nالحجم: ${defaultSize.label}\nالسعر: ${defaultSize.price} ج.م`
  )}`;

  return (
    <div
      onClick={() => navigate(`/product/${slug}`)}
      className="group flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-square h-64 overflow-hidden bg-surface-container mb-6 rounded-lg luxury-shadow">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url("${image}")` }}
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-primary text-white text-[10px] px-3 py-1 font-bold rounded-full">
            {badge}
          </div>
        )}
      </div>

      <div className="text-center flex flex-col flex-grow">
        <h3 className="font-display-md text-[20px] text-on-surface mb-2 h-14 overflow-hidden line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-3 mt-auto mb-4">
          <span className="text-primary font-bold text-lg">{price} ج.م</span>
          {oldPrice && (
            <span className="text-on-surface-variant/50 line-through text-sm">
              {oldPrice} ج.م
            </span>
          )}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-on-secondary-fixed text-primary px-6 py-3 font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors w-full mt-2"
        >
          <Icon name="chat" className="text-[18px]" />
          اطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
