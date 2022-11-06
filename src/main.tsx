import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // TODO: turn on <React.StrictMode>
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
  // </React.StrictMode>
);
