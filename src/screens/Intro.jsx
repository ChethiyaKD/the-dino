import React from "react";
import "../styles/intro.scss";

import Button from "../components/Button";

import sajibosa from "../assets/images/saji_bosa_big.png";
import ghost from "../assets/images/ghost.svg";

export default function Intro({ setStep }) {
  const handleLetsGo = () => {
    setStep(3);
  };

  const buttonProps = {
    text: "Let's goooo....",
    onClick: handleLetsGo,
  };

  return (
    <div className="container">
      <div className="title">
        Meet <strong>Saji bosa</strong> <img src={sajibosa} alt="" />
      </div>
      <div className="interesting-description">
        <strong>Saji bosa</strong> is scared of nothing but ghosts..{" "}
        <img src={ghost} alt="" />
      </div>
      <div className="interesting-description-small">
        Just don't let <strong>Saji bosa</strong> get scared and score as much
        as you can 👍
      </div>
      <div className="controls">
        <strong>Controls:</strong> Jump ={">"} Mouse Click / Tap
      </div>
      <div className="button-wrapper">
        <Button props={buttonProps} />
      </div>
    </div>
  );
}
