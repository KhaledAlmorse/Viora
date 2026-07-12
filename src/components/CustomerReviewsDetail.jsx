import Icon from "./Icon";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Icon key={i} name="star" className="text-primary" filled />);
    } else if (rating >= i - 0.5) {
      stars.push(<Icon key={i} name="star_half" className="text-primary" filled />);
    } else {
      stars.push(<Icon key={i} name="star" className="text-primary" />);
    }
  }
  return <div className="flex text-primary">{stars}</div>;
}

export default function CustomerReviewsDetail({ reviews }) {
  if (!reviews || !reviews.length) return null;

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-12 border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="font-display-md text-display-md text-primary mb-4">آراء العملاء</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl font-display font-bold text-primary">{avgRating}</div>
            <div>
              <div className="flex text-primary">
                {[1, 1, 1, 1, 1].map((_, i) => (
                  <Icon key={i} name="star" className="text-primary" filled />
                ))}
              </div>
              <span className="text-on-surface-variant text-sm">بناءً على {reviews.length} تقييم</span>
            </div>
          </div>
          <button className="w-full border-2 border-primary text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
            كتابة تقييم
          </button>
        </div>
        <div className="md:w-2/3 space-y-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <StarRating rating={review.rating} />
                </div>
                <span className="text-on-surface-variant text-xs">{review.date}</span>
              </div>
              <p className="text-on-surface">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
