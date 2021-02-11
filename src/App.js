import React from "react";

import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "id-attribute" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Snowy",
      animal: "Dog",
      breed: "Pomeranian",
    }),
    React.createElement(Pet, {
      name: "Sheru",
      animal: "Dog",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Shaahab",
      animal: "Parrot",
      breed: "Hushiyarpuriya",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
