import React from 'react';

export const Result = () => {
  return (
    <div class='flex result'>
      <div class='result__top-icon'>😓</div>
      <p class='result__phrase'>
        Неполохо! за <b>48 секунд</b>, ты ввел:
      </p>
      <div class='result__number-of-words'>2 слова</div>
      <button class='button'>🙄 Попоробовать снова?</button>
    </div>
  );
};
