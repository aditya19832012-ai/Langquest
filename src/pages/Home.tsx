
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ui/ProgressBar";
import CoinDisplay from "../components/ui/CoinDisplay";

export default function Home() {
  return (
    <div className="page">
      <h1>🌍 Welcome to LangQuest!</h1>
      <p>Learn a language. Play your way.</p>

      <CoinDisplay coins={250} />

      <Card title="🔥 Your streak" subtitle="You're building a habit!">
        <h2>5 days in a row</h2>
        <ProgressBar value={65} label="Daily goal" />
      </Card>

      <Card title="🗺️ Continue your journey">
        <p>Spanish · Unit 1 · Lesson 3</p>
        <Button onClick={() => window.location.assign("/learn")}>
          Continue learning →
        </Button>
      </Card>
    </div>
  );
}
