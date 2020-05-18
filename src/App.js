import React from "react";
import "./App.css";

function App() {
  const [eventFired, setEventFired] = React.useState(false);

  return (
    <div className="App">
      <label>
        input
        <input
          type="text"
          defaultValue="default content"
          onChange={() => setEventFired(true)}
        />
      </label>
      {eventFired && <div>onChange event was fired</div>}
    </div>
  );
}

export default App;
