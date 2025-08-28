import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root element
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

// Create root only once and store it
let root = createRoot(container);

// Render the app
root.render(<App />);

// Hot module replacement support for development
if (import.meta.hot) {
  import.meta.hot.accept("./App", () => {
    // Re-render the app when App.tsx changes
    root.render(<App />);
  });
}
