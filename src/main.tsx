import { createRoot } from "react-dom/client";
import App from './App.tsx'
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
