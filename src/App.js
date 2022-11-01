import React, { useState } from "react";
import "./styles.css";

var animalEmojiDictionary = {
  "🐶": "Dog Face",
  "🐱": "Cat Face",
  "🐯": "Tiger Face",
  "🦘": "Kangaroo",
  "🐧": "Penguin",
  "🐾": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🐇": "Rabbit"
};

var emojisWeKnow = Object.keys(animalEmojiDictionary);

export default function App() {
  function emojiClickHandler(emoji) {
    var mean = animalEmojiDictionary[emoji];
    setMeaning(mean);
  }

  var [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var mean = animalEmojiDictionary[userInput];

    if (mean === undefined) {
      mean =
        "Sorry we don't have that emoji in our database. Just do a google search for this.";
    }
    setMeaning(mean);
  }
  return (
    <div className="App">
      <h1>inside outtt!</h1>
      <input onChange={inputHandler} />
      <h2>{meaning}</h2>

      <h3> Animal emojis in our database </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
