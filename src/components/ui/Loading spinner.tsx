import "./ui.css";

type LoadingSpinnerProps = {
  size?: number;
  label?: string;
};

export default function LoadingSpinner({
  size = 36,
  label = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <div className="lq-spinner-container" role="status">
      <span
        className="lq-spinner"
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
      <span className="lq-spinner__label">{label}</span>
    </div>
  );
}
