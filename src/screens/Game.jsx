import React, { useRef, useEffect } from "react";
import { useState } from "react";

import "../styles/game.scss";

import whatsappIcon from "../assets/images/whatsapp.svg";
import Button from "../components/Button";

export default function Game() {
  const sajiBosa = useRef(null);
  const ghost = useRef(null);
  const container = useRef(null);

  const [cWidth, setCWidth] = useState(0);
  const [running, setRunning] = useState(false);
  const [scared, setScared] = useState(false);
  const [score, setScore] = useState(0);

  const handleWhatsappp = () => {
    window.open(
      `whatsapp://send?text=Ado let's play this game, I scored ${score}. https://chethiya-kusal.me/`
    );
  };

  const Retry = () => {
    setScared(false);
  };

  useEffect(() => {
    const jump = () => {
      if (scared) return;
      if (!running) {
        setScore(0);
      }
      setRunning(true);

      if (!sajiBosa) return;
      const s = sajiBosa.current;

      s.classList.add("animate");
      setTimeout(() => {
        s.classList.remove("animate");
      }, 750);
    };

    if (!sajiBosa.current) return;
    window.addEventListener("click", jump);

    return () => {
      window.removeEventListener("click", jump);
    };
  }, [running, sajiBosa, scared]);

  useEffect(() => {
    if (container.current) {
      setCWidth(container.current.clientWidth);
    }
    window.addEventListener("resize", () => {
      setCWidth(container.current.clientWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setCWidth(container.current.clientWidth);
      });
    };
  }, [container]);

  useEffect(() => {
    if (!ghost.current) return;
    if (running) {
      ghost.current.classList.add("animate-ghost");
    } else {
      ghost.current.classList.remove("animate-ghost");
    }
    let timer = setInterval(() => {
      if (running) setScore((score) => score + 10);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [running]);

  useEffect(() => {
    const isDead = () => {
      const sajiBosaBottom = parseInt(
        window.getComputedStyle(sajiBosa.current).getPropertyValue("bottom")
      );
      const ghostRight = parseInt(
        window.getComputedStyle(ghost.current).getPropertyValue("right")
      );
      if (
        sajiBosaBottom < 48 &&
        ghostRight > cWidth - 96 &&
        ghostRight < cWidth - 48
      ) {
        setRunning(false);
        setScared(true);
        return;
      }
      return;
    };
    let timer = setInterval(() => {
      if (running) {
        isDead();
      }
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [cWidth, running]);

  return (
    <div className="container row">
      {scared && (
        <div className="scaredPopupBg">
          <div className="popup col-md-5 col-sm-12">
            <div className="popup-title">Ihi ihi</div>
            <div className="description">
              Ado no! <strong>Saji bosa</strong> got scared, share your score
              wiht 3 of your friends or <strong>Saji bosa</strong> will get you
              within 7 days! 🔪
            </div>
            <div className="share-score">Your score is: {score}</div>
            <div className="share-buttons">
              Share via WhatsApp
              <button className="whatsapp" onClick={handleWhatsappp}>
                <img src={whatsappIcon} alt="" />
              </button>
            </div>
            <div className="button-wrapper">
              <Button props={{ text: "Retry", onClick: Retry }} />
            </div>
          </div>
        </div>
      )}
      <div className="col-md-8 col-sm-12 game-wrapper">
        <div className="game-container" ref={container}>
          <div className="score">
            Score: <div id="score">{score}</div>
          </div>
          <div className="saji-bosa" ref={sajiBosa}></div>
          <div className="ghost" ref={ghost}></div>
        </div>
      </div>
    </div>
  );
}
