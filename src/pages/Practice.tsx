
import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const activities = [
  { title: "🧠 Vocabulary", desc: "Revise words you've learned." },
  { title: "🎧 Listening", desc: "Practice understanding spoken words." },
  { title: "✍️ Writing", desc: "Build simple sentences." },
];

export default function Practice() {
  const [active, setActive] = useState("");

  return (
    <div className="page">
      <h1>💪 Practice Zone</h1>
      <p>Small practice sessions make a big difference.</p>

      {activities.map((activity) => (
        <Card key={activity.title} title={activity.title} subtitle={activity.desc}>
          <Button onClick={() => setActive(activity.title)}>
            Start practice
          </Button>
        </Card>
      ))}

      {active && (
        <Card title={active}>
          <p>This practice activity is ready for lesson content.</p>
          <Button variant="outline" onClick={() => setActive("")}>
            Back
          </Button>
        </Card>
      )}
    </div>
  );
}
