import React, { useState } from "react";
import "./App.css";
import image from "./image.svg"

function App() {
  const emojiDictionary = {
    "🙁": "sad",
    "😁": "happy",
    "😂": "laughing",
    "😡": "angry",
    "😳": "shocked",
    "😍": "feeling loved",
    "😴": "sleepy head",
    "😈": "devilish intention",
    "😑": "pissed off",
    "🥺": "pleading face",
    "😱": "shocked in fear",
    "😰": "anxious face"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our dictionary";
    }

    setMeaning(meaning);
  }

  function clickEmojiHandler(item) {
    console.log(item);
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <aside>
      <img src={image}></img>
      </aside>
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="put an emoji here to know the meaning"
        onChange={emojiInputHandler}
      ></input>

      <div id="meaning">{meaning}</div>

      <div id="emoji">
        {emojiWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => {
                clickEmojiHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}


export default App;
