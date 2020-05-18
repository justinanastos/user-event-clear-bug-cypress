import React from "react";
import "./App.css";

function App() {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  return (
    <div className="App">
      <label>
        input
        <input
          type="text"
          defaultValue="default content"
          onChange={() => setButtonClicked(true)}
        />
      </label>
      {buttonClicked && <div>button was clicked</div>}
    </div>
  );
}

export default App;
