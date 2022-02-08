import React, { useState } from "react";
import { Result } from "./components/Result";
import { Typing } from "./components/Typing";
import { Welcome } from "./components/Welcome";

function App() {
  const [step, setStep] = useState("welcome");

  const startGame = () => {
    setStep("typing");
  };

  const steps = {
    welcome: <Welcome onClickCart={startGame} />,
    typing: <Typing />,
    result: <Result />,
  };
  return (
    <div className="App">
      <div className="common-rect">{steps[step]}</div>
    </div>
  );
}

export default App;
