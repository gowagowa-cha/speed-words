import React from "react";

export const Result = () => {
  return (
    <div className="flex result">
      <div className="result__top-icon">😓</div>
      <p className="result__phrase">
        Неполохо! за <b>48 секунд</b>, ты ввел:
      </p>
      <div className="result__number-of-words">2 слова</div>
      <button className="button">🙄 Попоробовать снова?</button>
    </div>
  );
};
