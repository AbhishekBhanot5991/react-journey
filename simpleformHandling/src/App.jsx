import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('')
    console.log("I am clicked");
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" disabled={!username}>click me</button>
      </form>
    </>
  );
}

export default App;
