import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./screens/Home";
import Intro from "./screens/Intro";
import Game from "./screens/Game";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      {step === 1 && <Home setStep={setStep} />}
      {step === 2 && <Intro setStep={setStep} />}
      {step === 3 && <Game setStep={setStep} />}
    </div>
  );
}

export default App;
