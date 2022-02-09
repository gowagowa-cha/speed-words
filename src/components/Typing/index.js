import React from "react";
import { useState } from "react/cjs/react.development";

const texts = [
  "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
  "Стремитесь не к успеху, а к ценностям, которые он дает",
  "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
  "Сложнее всего начать действовать, все остальное зависит только от упорства",
  "Жизнь - это то, что с тобой происходит, пока ты строишь планы",
];

const sentence = texts[Math.floor(Math.random() * texts.length)];
const res = sentence.replace(/[^a-zа-яё\s]/gi, "");
const words = res.split(" ");

export const Typing = () => {
  const curIndexRef = React.useRef(0);
  const [second, setSecond] = React.useState(20);
  const [currenrWord, setCurrentWord] = React.useState(words[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setSecond((prev) => prev - 1);
    }, 1000);
  }, []);

  const OnChangeInput = (e) => {
    const { value } = e.target;

    if (currenrWord === value) {
      curIndexRef.current += 1;
      setCurrentWord(words[curIndexRef.current]);
      setInputValue("");
      setWordCount((prev) => prev + 1);
      return;
    }
    if (!new RegExp(`^${value}`).test(currenrWord)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setInputValue(e.target.value.trim());
  };

  return (
    <div className="flex typing">
      <p className="typing__enter-word">Введите слово</p>
      <h3 className="typing__word">
        {/* Slaves <span className='typing__man-sign'>📌</span> */}
        {currenrWord}
      </h3>
      <input
        type="text"
        value={inputValue}
        onChange={OnChangeInput}
        className={`typing__input ${isError ? "error" : ""}`}
      />
      <div className="typing__progress">
        <div className="typing__timer">
          <p>Осталось времени:</p>
          <b>{second} сек.</b>
        </div>
        <div className="typing__counter">
          <p>Введено слов:</p>
          <b>{wordCount}</b>
        </div>
      </div>
    </div>
  );
};
