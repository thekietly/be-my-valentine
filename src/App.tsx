import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const showAlert = () => {
    const currentLanguage = navigator.language; // Detects the current language
    alert(`Current language: ${currentLanguage}`);
  };
  return (
    <div className="space-x-4">
      <h1 className=""></h1>
      {/* Confirm button */}
      <Button variant="confirm" size="xlg" onClick={showAlert}>
        Yes
      </Button>

      {/* Reject button */}
      <Button variant="reject" size="xlg" onClick={showAlert}>
        No
      </Button>
    </div>
  );
}

export default App;
