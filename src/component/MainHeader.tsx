import React from "react";
import TimerContainer from "../containers/TimerContainer";
import logo from "../img/logo.png";
import minus from "../img/minus-grey.png";
import plus from "../img/plus-grey.png";
import start from "../img/start-grey.png";
import stop from "../img/stop-grey.png";

interface MainHeaderProps {
  isLogin: boolean;
  handleLoginModal: () => void;
  handleSettingModal: () => void;
}

interface TimerProps {
  isCounting: boolean;
  minute: number;
  seconds: number;
  startToTimer: () => void;
  stopToTimer: () => void;
  addTenMinute: () => void;
  removeTenMinute: () => void;
  removeOneSeconds: () => void;
  handlingEndingModal: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({
  isLogin,
  handleLoginModal,
  handleSettingModal,
}) => {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      {isLogin ? <TimerContainer /> : null}
      {!isLogin ? (
        <span className="menu" onClick={handleLoginModal}>
          Login
        </span>
      ) : (
        <span className="menu" onClick={handleSettingModal}>
          Setting
        </span>
      )}
    </header>
  );
};

export const Timer: React.FC<TimerProps> = ({
  isCounting,
  minute,
  seconds,
  startToTimer,
  stopToTimer,
  addTenMinute,
  removeTenMinute,
  removeOneSeconds,
  handlingEndingModal,
}) => {
  const handleCounting = () => {
    // 시간이 설정 안되어있으면 거절 메시지
    const currentTime = document.querySelector(".time")?.textContent;
    if (currentTime === "00 : 00") {
      return alert("시간을 맞춰주세요");
    }
    // isCount 상태를 변경하고 1초마다 카운팅 시작
    startToTimer();
    const timerId = setInterval(() => {
      const currentTime = document.querySelector(".time")?.textContent;
      if (currentTime === "00 : 00") {
        clearInterval(timerId); // shut down setInterval
        stopToTimer(); // isCount to false
        handlingEndingModal(); // isEndingModalOn to true
      } else {
        removeOneSeconds(); // function for spend one sec
      }
    }, 1000);
  };

  return (
    <span className="timer-container">
      <p className="time">{`${minute < 10 ? "0" + minute : minute} : ${
        seconds < 10 ? "0" + seconds : seconds
      }`}</p>
      <div className="timer-plus" onClick={addTenMinute}>
        <img src={plus} alt="" />
      </div>
      <div className="timer-minus" onClick={removeTenMinute}>
        <img src={minus} alt="" />
      </div>
      {!isCounting ? (
        <div className="timer-start" onClick={handleCounting}>
          <img src={start} alt="" />
        </div>
      ) : (
        <div className="timer-stop" onClick={stopToTimer}>
          <img src={stop} alt="" />
        </div>
      )}
    </span>
  );
};

export default MainHeader;
