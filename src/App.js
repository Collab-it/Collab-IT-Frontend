import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Here's the TextEdit component.</h3>
        <textarea
          rows="10"
          cols="50"
          placeholder="Write something here..."
        ></textarea>
      </div>
    </div>
  );
}

export default App;
