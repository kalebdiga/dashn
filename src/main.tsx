import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TimerProvider } from "./context/TimerContext.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TimerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TimerProvider>
    </Provider>
  </StrictMode>
);
