import "./ui.css";

type ProgressBarProps = {
  value: number;
  max?: number;
  label?: string;
  showPercent?: boolean;
};

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = true,
}: ProgressBarProps) {
  const percent =
    max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div className="lq-progress">
      {(label || showPercent) && (
        <div className="lq-progress__header">
          {label && <span>{label}</span>}
          {showPercent && <span>{Math.round(percent)}%</span>}
        </div>
      )}

      <div
        className="lq-progress__track"
        role="progressbar"
        aria-valuenow={Math.round(percent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "Progress"}
      >
        <div
          className="lq-progress__fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
