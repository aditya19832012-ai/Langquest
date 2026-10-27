
import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";

export default function Profile() {
  return (
    <div className="page">
      <h1>👤 My Profile</h1>

      <Card title="🌟 Language Explorer" subtitle="Your learning profile">
        <div style={{ fontSize: 52 }}>🧑‍🚀</div>
        <h2>Guest Learner</h2>
        <p>🌍 Learning: Spanish</p>
      </Card>

      <Card title="📊 Your stats">
        <p>⚡ Total XP: 850</p>
        <p>🔥 Current streak: 5 days</p>
        <p>🏅 Achievements: 3</p>
        <ProgressBar value={60} label="Weekly learning goal" />
      </Card>
    </div>
  );
}
