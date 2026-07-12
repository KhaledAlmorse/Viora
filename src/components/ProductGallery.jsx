export default function ProductGallery({ images }) {
  const mainImg = images[0] || "";
  const thumbs = images.slice(1, 5);

  return (
    <div className="grid grid-cols-4 gap-4 sticky top-24">
      <div className="col-span-4 aspect-[4/5] rounded-xl overflow-hidden luxury-shadow border border-outline-variant/20">
        <img
          className="w-full h-full object-cover"
          src={mainImg}
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      </div>
      {thumbs.map((img, i) => (
        <div
          key={i}
          className={`col-span-1 aspect-square rounded-lg overflow-hidden border ${i === 0 ? "border-primary/20" : "border-outline-variant/20"} ${i === thumbs.length - 1 ? "relative cursor-pointer group" : ""}`}
        >
          <img
            className="w-full h-full object-cover"
            src={img}
            alt=""
            loading="lazy"
          />
          {i === thumbs.length - 1 && (
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-white">zoom_in</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
