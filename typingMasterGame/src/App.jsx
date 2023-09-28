import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      const data = await response.json();
      if (data.length > 0) {
        setWord(data[0]);
      }
    } catch (error) {
      console.error("Error Fetching Random word:", error);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    // Check if the user's input matches the current word
    if (input.toLowerCase() === word.toLowerCase()) {
      // Correct word
      setScore(score + 1);
      fetchRandomWord(); // Get a new random word
      setUserInput(""); // Clear input field
      setAccuracy(100); // Reset accuracy
    } else {
      // Calculate accuracy based on the current input
      const accuracyPercentage = (input.length / word.length) * 100;
      setAccuracy(accuracyPercentage);
    }
  };
  return (
    <div className="App text-center bg-black text-white p-5 flex-1 align-middle flex-col flex-wrap">
      <h1 className="font-bold py-4 text-4xl">Typing Master</h1>
      <p>Type The Word Below</p>
      <div className="word-display py-4 text-amber-400 text-3xl">{word}</div>
      <input
        type="text"
        value={userInput}
        className="px-3 py-3 bg-slate-500 w-56 my-3 mx-auto outline-none text-white"
        placeholder="Type the word here..."
        onChange={handleInputChange}
      />
      <div className="Score">Score: {score}</div>
      <div className="accuracy">Accuracy: {accuracy.toFixed(2)}%</div>
    </div>
  );
}

export default App;
