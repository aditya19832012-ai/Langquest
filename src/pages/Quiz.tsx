
import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ui/ProgressBar";

const questions = [
  { q: "How do you say 'Hello' in Spanish?", a: "Hola", options: ["Hola", "Adios", "Gracias"] },
  { q: "What does 'Gracias' mean?", a: "Thank you", options: ["Goodbye", "Thank you", "Please"] },
  { q: "What does 'Adios' mean?", a: "Goodbye", options: ["Hello", "Goodbye", "Sorry"] },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function submit() {
    if (!selected) return;
    if (selected === questions[index].a) setScore((s) => s + 1);

    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected("");
    }
  }

  function restart() {
    setIndex(0);
    setSelected("");
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="page">
        <Card title="🏆 Quiz complete!" subtitle={`You scored ${score} out of ${questions.length}`}>
          <Button onClick={restart}>Play again ↻</Button>
        </Card>
      </div>
    );
  }

  const question = questions[index];

  return (
    <div className="page">
      <h1>🧠 Quick Quiz</h1>
      <ProgressBar value={((index + 1) / questions.length) * 100} label={`Question ${index + 1}/${questions.length}`} />
      <Card title={question.q}>
        {question.options.map((option) => (
          <Button
            key={option}
            variant={selected === option ? "secondary" : "outline"}
            onClick={() => setSelected(option)}
          >
            {option}
          </Button>
        ))}
        <p>⭐ Score: {score}</p>
        <Button onClick={submit} disabled={!selected}>Submit answer →</Button>
      </Card>
    </div>
  );
}
