import React from "react";

export const Result = ({stats}) => {
	console.log(stats);
  return (
    <div className="flex result">
      <div className="result__top-icon">👏</div>
      <p className="result__phrase">
        Неполохо! за <b>{stats.second} секунд</b>, ты ввел: 
      </p>
      <div className="result__number-of-words">{stats.words} слова</div>
      <button className="button">🙄 Попоробовать снова?</button>
    </div>
  );
};
