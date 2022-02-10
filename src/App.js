import React, { useState } from "react";
import { Result } from "./components/Result";
import { Typing } from "./components/Typing";
import { Welcome } from "./components/Welcome";

function App() {
  const [step, setStep] = useState("welcome");
  const [stats, setStats] = useState({
    words: 0,
    second: 0,
  });

  const startGame = () => {
    setStep("typing");
  };

  const finishGame = (words, second) => {
		setStep("result");
		setStats({
			words,
      second,
    });
  };

  const steps = {
    welcome: <Welcome onClickCart={startGame} />,
    typing: <Typing onFinish={finishGame} />,
    result: <Result stats={stats} />,
  };
  return (
    <div className="App">
      <div className="common-rect">{steps[step]}</div>
    </div>
  );
}

export default App;
