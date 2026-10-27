
import Card from "../components/ui/Card";

const players = [
  { name: "Aarav", xp: 1250 },
  { name: "Mia", xp: 1100 },
  { name: "You", xp: 850 },
  { name: "Leo", xp: 720 },
  { name: "Sofia", xp: 640 },
];

export default function Leaderboard() {
  const sorted = [...players].sort((a, b) => b.xp - a.xp);

  return (
    <div className="page">
      <h1>🏆 Leaderboard</h1>
      <p>Demo rankings — real players will need a backend.</p>

      <Card title="🌟 Weekly champions">
        {sorted.map((player, index) => (
          <div
            key={player.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "14px 4px",
              borderBottom: "1px solid #eeeaf7",
              fontWeight: player.name === "You" ? 800 : 500,
            }}
          >
            <span>{["🥇", "🥈", "🥉"][index] || `${index + 1}.`} {player.name}</span>
            <span>⚡ {player.xp} XP</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
