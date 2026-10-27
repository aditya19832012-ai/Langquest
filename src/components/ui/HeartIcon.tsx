import "./ui.css";

type HeartIconProps = {
  filled?: boolean;
  size?: number;
  label?: string;
};

export default function HeartIcon({
  filled = true,
  size = 26,
  label,
}: HeartIconProps) {
  return (
    <span
      className={`lq-heart ${filled ? "is-filled" : "is-empty"}`}
      style={{ fontSize: size }}
      role="img"
      aria-label={label || (filled ? "Full heart" : "Empty heart")}
    >
      {filled ? "♥" : "♡"}
    </span>
  );
}
