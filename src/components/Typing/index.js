import React from "react";

const texts = [
  "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
  "Стремитесь не к успеху, а к ценностям, которые он дает",
  "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
  "Сложнее всего начать действовать, все остальное зависит только от упорства",
  "Жизнь - это то, что с тобой происходит, пока ты строишь планы",
];

export const Typing = () => {
  const sentence = texts[Math.floor(Math.random() * texts.length)];
  const words = sentence.split(" ");
  const [second, setSecond] = React.useState(20);
  const [currenrWord, setCurrentWord] = React.useState(words[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const curIndexRef = React.useRef(0);

  const OnChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(e.target.value);

    if (currenrWord === value) {
      curIndexRef.current += 1;
      setCurrentWord(words[curIndexRef.current]);
      setInputValue("");
    }
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
        className="typing__input"
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
