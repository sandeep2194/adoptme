import React from "react";

import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "id-attribute" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Snowy",
  //     animal: "Dog",
  //     breed: "Pomeranian",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Sheru",
  //     animal: "Dog",
  //     breed: "Mixed",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Shaahab",
  //     animal: "Parrot",
  //     breed: "Hushiyarpuriya",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Snowy" animal="Dog" breed="pomerian" />
      <Pet name="Pepper" animal="Bird" breed="Cocktail" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
