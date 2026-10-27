
import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CoinDisplay from "../components/ui/CoinDisplay";

const items = [
  { id: 1, name: "❤️ Heart refill", price: 100, icon: "💖" },
  { id: 2, name: "🔥 Streak freeze", price: 150, icon: "🧊" },
  { id: 3, name: "🎭 Mascot hat", price: 200, icon: "🎩" },
];

export default function Shop() {
  const [coins, setCoins] = useState(250);
  const [message, setMessage] = useState("");

  function buy(id: number, price: number, name: string) {
    if (coins < price) {
      setMessage("Not enough coins yet. Keep learning! 🌱");
      return;
    }

    setCoins((current) => current - price);
    setMessage(`${name} purchased in this demo! 🎉`);
  }

  return (
    <div className="page">
      <h1>🛍️ Reward Shop</h1>
      <CoinDisplay coins={coins} />

      {items.map((item) => (
        <Card key={item.id} title={`${item.icon} ${item.name}`}>
          <p>Price: 🪙 {item.price}</p>
          <Button onClick={() => buy(item.id, item.price, item.name)}>
            Buy reward
          </Button>
        </Card>
      ))}

      {message && <p role="status">{message}</p>}
    </div>
  );
}
