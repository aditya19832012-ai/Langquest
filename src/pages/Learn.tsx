
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const units = [
  { title: "🌱 First Words", detail: "Greetings and basics", done: true },
  { title: "🍎 Everyday Objects", detail: "Learn 10 new words", done: false },
  { title: "💬 Simple Sentences", detail: "Build your first sentences", done: false },
];

export default function Learn() {
  return (
    <div className="page">
      <h1>🗺️ Learning Path</h1>
      <p>Every lesson takes you one step further.</p>

      {units.map((unit) => (
        <Card key={unit.title} title={unit.title} subtitle={unit.detail}>
          <Button
            variant={unit.done ? "secondary" : "primary"}
            onClick={() => window.location.assign("/lesson")}
          >
            {unit.done ? "Review lesson" : "Start lesson"}
          </Button>
        </Card>
      ))}
    </div>
  );
}
