const Pet = ({ name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
