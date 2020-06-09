import React, { useEffect, useState, CSSProperties } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import cn from "classnames";

import "./style.scss";
import { MIN_DIFF_TOUCH, KEY_ONBOARDING } from "shared/constants";
import { OnboardingProps } from "./Onboarding.model";
import { NavbarActions } from "store/navbar/navbar.actions";

import startPicture from "assets/onboarding/start.png";
import middlePicture from "assets/onboarding/middle.png";
import endPicture from "assets/onboarding/end.png";

export const Onboarding: React.FC<OnboardingProps> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [btnNextContent, setBtnNextContent] = useState('Дальше');
  const [boardWidth, setBoardWidth] = useState(0);
  const [holded, setHolded] = useState(true);

  // Touches
  const [startTouch, setStartTouch] = useState(0);
  const [currentTouch, setCurrentTouch] = useState(0);
  const [diffTouches, setDiffTouches] = useState(0);

  //Current board id
  const [currentBoardId, setCurentBoardId] = useState(0);

  useEffect(() => {
    setBoardWidth(window.innerWidth);
    dispatch(NavbarActions.changeTitle(''));
  }, []);

  useEffect(() => {
    if (currentBoardId === 2) {
      setBtnNextContent('Начать');
    } else {
      setBtnNextContent('Дальше');
    }
  }, [currentBoardId])

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0].clientX;
    setStartTouch(touch);
    setHolded(false);
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0].clientX;
    setCurrentTouch(touch);

    const transfer = (-boardWidth * currentBoardId) + (touch - startTouch);
    setDiffTouches(transfer);
  }

  const handleTouchEnd = () => {
    const diff = currentTouch - startTouch;
    setHolded(true);

    // Условие для отпрыгивания назад 
    const conditionForBack = Math.abs(diff) < MIN_DIFF_TOUCH ||
      (diff > 0 && currentBoardId === 0) ||
      (diff < 0 && currentBoardId === 2);

    if (conditionForBack) {
      setDiffTouches(-boardWidth * currentBoardId);
      return;
    }

    // Сначала проверяем предел
    // Чтобы не выйти за рамки бордера
    if (currentBoardId >= 0 && currentBoardId <= 2) {
      if (diff < 0) {
        // Листаем вправо
        const updatedBoardActiveId = currentBoardId + 1;
        setDiffTouches(-boardWidth * updatedBoardActiveId);
        setCurentBoardId(updatedBoardActiveId);
      } else {
        // Листаем влево
        const updatedBoardActiveId = currentBoardId - 1;
        setDiffTouches(-boardWidth * updatedBoardActiveId);
        setCurentBoardId(updatedBoardActiveId);
      }
    }

    
  }

  const handleClickNext = () => {
    //  Пока кнопка "Дальше"
    if (btnNextContent === "Дальше") {
      const updatedBoardActiveId = currentBoardId + 1;
      setDiffTouches(-boardWidth * updatedBoardActiveId);
      setCurentBoardId(updatedBoardActiveId);
    }

    // Когда кнопка "Начать"
    if (btnNextContent === "Начать") {
      localStorage.setItem(KEY_ONBOARDING, JSON.stringify(true));
      window.location.href = '/auth';
      // history.push('/partners');
    }
  }

  const boardsStyle: CSSProperties = {
    transform: `translateX(${diffTouches}px)`,
    transition: holded ? 'transform .3s': 'none'
  }


  return (
    <div className="onboarding">
      <div 
        className="onboarding-boards"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={boardsStyle}
      >
        <div className="board" style={{minWidth: `${boardWidth}px`}}>
          <img src={startPicture} alt="start"/>
          <p>Находите партнеров для воплащения своих идей</p>
        </div>
        <div className="board" style={{minWidth: `${boardWidth}px`}}>
          <img src={middlePicture} alt="start"/>
          <p>Планируйте время и место для переговоров</p>
        </div>
        <div className="board" style={{minWidth: `${boardWidth}px`}}>
          <img src={endPicture} alt="start"/>
          <p>Находите партнеров для воплащения своих идей</p>
        </div>
      </div>
      <div className="onboarding-controls">
        <div className="marks">
          <div className={cn({
            'mark': true,
            'mark-active': currentBoardId === 0
          })}></div>
          <div className={cn({
            'mark': true,
            'mark-active': currentBoardId === 1
          })}></div>
          <div className={cn({
            'mark': true,
            'mark-active': currentBoardId === 2
          })}></div>
        </div>
        <div className="btn-holder">
          <button 
            className="btn btn-next"
            onClick={handleClickNext}
          >
            {btnNextContent}
          </button>
        </div>
      </div>
    </div>
  )
}