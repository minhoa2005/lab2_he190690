import { useTheme } from "../context/ThemeContext";
import { Button } from "react-bootstrap";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="d-flex justify-content-between align-items-center gap-3 mb-4">
      <div>
        <h1 className="h3 mb-1">Mini Movie Manager</h1>
      </div>
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}
      </Button>
    </header>
  );
}
