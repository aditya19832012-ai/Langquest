import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Settings() {
  const [sound, setSound] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [language, setLanguage] = useState("Spanish");
  const [saved, setSaved] = useState(false);

  return (
    <div className="page">
      <h1>⚙️ Settings</h1>

      <Card title="🎯 Learning preferences">
        <label>
          Learning language{" "}
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setSaved(false);
            }}
          >
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Japanese</option>
            <option>Korean</option>
            <option>Mandarin</option>
            <option>Hindi</option>
            <option>English</option>
          </select>
        </label>

        <p>
          <label>
            <input
              type="checkbox"
              checked={sound}
              onChange={(e) => {
                setSound(e.target.checked);
                setSaved(false);
              }}
            />{" "}
            🔊 Sound effects
          </label>
        </p>

        <p>
          <label>
            <input
              type="checkbox"
              checked={reminders}
              onChange={(e) => {
                setReminders(e.target.checked);
                setSaved(false);
              }}
            />{" "}
            🔔 Daily reminders
          </label>
        </p>

        <Button onClick={() => setSaved(true)}>Save preferences</Button>
        {saved && <p role="status">✅ Preferences saved for this screen.</p>}
      </Card>
    </div>
  );
}
