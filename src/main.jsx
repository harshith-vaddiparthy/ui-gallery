import { createRoot } from "react-dom/client";
import UiGallery from "./components/UiGallery.jsx";
import "./styles/standalone.css";

createRoot(document.getElementById("root")).render(
  <>
    <a className="ui-skip" href="#ui-gallery">Skip to gallery</a>
    <header className="ui-site-header">
      <a href="https://www.harshith.com" aria-label="Harshith Vaddiparthy home">H®</a>
      <a href="https://www.harshith.com/ui">View on harshith.com</a>
    </header>
    <UiGallery />
    <footer className="ui-site-footer">Harshith Vaddiparthy · <a href="https://www.harshith.com">AI consultant &amp; product builder</a></footer>
  </>,
);
