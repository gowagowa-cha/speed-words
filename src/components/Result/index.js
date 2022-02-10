import React from "react";
import pluralRu from "plural-ru";

export const Result = ({ stats, onClickCart, welcome }) => {
  console.log(stats);
  return (
    <div className="flex result">
      <div className="result__top-icon">👏</div>
      <p className="result__phrase">
        Неполохо! за <b>{stats.second} секунд</b>, ты ввел:
      </p>
      <div className="result__number-of-words">
        {stats.words} {pluralRu(stats.words, "слово", "слова", "слов")}
      </div>
      <button onClick={onClickCart} className="button">
        🙄 Попоробовать снова?
      </button>
      <br />
      <button onClick={welcome} className="button">
        ↩️ На главную
      </button>
    </div>
  );
};
