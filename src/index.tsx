import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

import { store } from "./store/store";
import { AppRouter } from "./router/AppRouter";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
