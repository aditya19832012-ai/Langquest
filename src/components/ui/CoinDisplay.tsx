import "./ui.css";

type CoinDisplayProps = {
  coins: number;
  label?: string;
};

export default function CoinDisplay({
  coins,
  label = "Coins",
}: CoinDisplayProps) {
  const safeCoins = Math.max(0, Math.floor(coins));

  return (
    <div className="lq-coins" aria-label={`${safeCoins} ${label}`}>
      <span className="lq-coins__icon" aria-hidden="true">
        🪙
      </span>
      <span className="lq-coins__amount">
        {safeCoins.toLocaleString("en-IN")}
      </span>
    </div>
  );
}
