
import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ui/ProgressBar";

const questions = [
  { word: "Hola", options: ["Hello", "Goodbye", "Please"], answer: "Hello" },
  { word: "Gracias", options: ["Sorry", "Thanks", "Good night"], answer: "Thanks" },
];

export default function Lesson() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const [feedback, setFeedback] = useState("");

  const question = questions[index];

  function checkAnswer() {
    if (!choice) return;
    setFeedback(choice === question.answer ? "✅ Correct!" : "❌ Try again!");
  }

  function nextQuestion() {
    setIndex((i) => (i + 1) % questions.length);
    setChoice("");
    setFeedback("");
  }

  return (
    <div className="page">
      <h1>📚 Spanish Lesson</h1>
      <ProgressBar value={((index + 1) / questions.length) * 100} label="Lesson progress" />

      <Card title={`What does "${question.word}" mean?`}>
        {question.options.map((option) => (
          <Button
            key={option}
            variant={choice === option ? "secondary" : "outline"}
            onClick={() => { setChoice(option); setFeedback(""); }}
          >
            {option}
          </Button>
        ))}
        <p>{feedback}</p>
        <Button onClick={feedback.startsWith("✅") ? nextQuestion : checkAnswer}>
          {feedback.startsWith("✅") ? "Next →" : "Check answer"}
        </Button>
      </Card>
    </div>
  );
}
