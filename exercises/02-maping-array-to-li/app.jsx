import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

const animalsInHTML = animals.map((singleAnimal, i) => {
	console.log("singlAnimal: ", singleAnimal);
	return <li key={i}>{singleAnimal}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
