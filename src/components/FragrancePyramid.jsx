import Icon from "./Icon";

const levels = [
  { icon: "filter_1", label: "إفتتاحية العطر (Top)", key: "top" },
  { icon: "filter_2", label: "قلب العطر (Heart)", key: "heart" },
  { icon: "filter_3", label: "قاعدة العطر (Base)", key: "base" },
];

export default function FragrancePyramid({ notes }) {
  if (!notes || (!notes.top && !notes.heart && !notes.base)) return null;

  return (
    <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 space-y-6">
      <h3 className="font-headline-lg text-headline-lg text-primary flex items-center gap-2">
        <Icon name="temp_preferences_custom" />
        الهرم العطري
      </h3>
      <div className="space-y-8 relative">
        {levels.map((level) => (
          <div key={level.key} className="flex items-start gap-4">
            <div className="bg-primary-container p-2 rounded-full mt-1">
              <Icon name={level.icon} className="text-on-primary-container text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">{level.label}</h4>
              <p className="text-on-surface-variant text-body-md">{notes[level.key]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
