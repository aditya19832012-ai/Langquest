
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="page" style={{ textAlign: "center", paddingTop: 60 }}>
      <div style={{ fontSize: 80 }}>🪐</div>
      <h1>Oops! Lost in space.</h1>
      <p>This page isn't part of our learning universe yet.</p>

      <Button onClick={() => window.location.assign("/")}>
        🏠 Back to home
      </Button>
    </div>
  );
}
