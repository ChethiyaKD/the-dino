import React from "react";
import "../styles/home.scss";

import Button from "../components/Button";

import pixArt from "../assets/images/pixart.png";

export default function Home({ setStep }) {
  const handleButton = () => {
    setStep(2);
  };
  const buttonProps = {
    text: "Let's play a game instead",
    onClick: handleButton,
  };

  return (
    <div className="container">
      <img src={pixArt} alt="" />
      <div className="title">This website is still under construction 🔨</div>
      <div className="boring-description">
        This website will be up and running with another stunning UX. <br />
        Anyways I'm out of UI/UX ideas so only the god 🧖🏼‍♂️ knows when. 💁🏻‍♂️
      </div>
      <div className="button-wrapper">
        <Button props={buttonProps} />
      </div>
    </div>
  );
}
