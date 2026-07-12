import Icon from "./Icon";

export default function LongevityStats({ longevity, sillage }) {
  if (!longevity && !sillage) return null;

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-surface-container-highest p-4 rounded-xl flex items-center gap-4">
        <Icon name="timer" className="text-primary" filled />
        <div>
          <span className="text-xs text-on-surface-variant block">ثبات العطر</span>
          <span className="font-bold">{longevity}</span>
        </div>
      </div>
      <div className="bg-surface-container-highest p-4 rounded-xl flex items-center gap-4">
        <Icon name="waves" className="text-primary" filled />
        <div>
          <span className="text-xs text-on-surface-variant block">درجة الفوحان</span>
          <span className="font-bold">{sillage}</span>
        </div>
      </div>
    </div>
  );
}
