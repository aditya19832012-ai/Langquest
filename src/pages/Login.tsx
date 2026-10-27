
import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Demo only: real login will work after authentication is connected.");
  }

  return (
    <div className="page">
      <h1>🚀 Welcome back!</h1>
      <p>Your next language adventure awaits.</p>

      <Card title="🔐 Sign in to LangQuest">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              display: "block",
              width: "100%",
              boxSizing: "border-box",
              padding: 12,
              margin: "8px 0 16px",
              borderRadius: 12,
              border: "1px solid #ded5ff",
            }}
          />

          <Button type="submit">Continue →</Button>
        </form>

        {message && <p role="status">{message}</p>}
      </Card>
    </div>
  );
}
