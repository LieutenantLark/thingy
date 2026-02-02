import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { BotDetails } from "./components/BotDetails";
import { CreatorProfile } from "./components/CreatorProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "bot/:id", Component: BotDetails },
      { path: "creator/:id", Component: CreatorProfile },
    ],
  },
]);
