import React from "react";

const texts = [
  "Стремитесь не к успеху, а к своей",
  "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
  "Сложнее всего начать действовать, все остальное зависит только от упорства",
  "Жизнь - это то, что с тобой происходит, пока ты строишь планы",
];

const sentence = texts[Math.floor(Math.random() * texts.length)];
const res = sentence.replace(/[^a-zа-яё\s]/gi, "");
const words = res.toLowerCase().split(" ");

export const Typing = ({ onFinish }) => {
  const curIndexRef = React.useRef(0);
  const timerRef = React.useRef(null);
  const [second, setSecond] = React.useState(20);
  const [currentWord, setCurrentWord] = React.useState(words[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecond((prev) => {
        const value = prev - 1;
        if (!value) {
          clearInterval(timerRef.current);
          onFinish(curIndexRef.current, 20 - value);
        }
        return value;
      });
    }, 1000);
  }, []);

  const OnChangeInput = (e) => {
    const { value } = e.target;

    if (currentWord === value) {
      curIndexRef.current += 1;

      if (curIndexRef.current >= words.length) {
        clearInterval(timerRef.current);
        onFinish(curIndexRef.current, 20 - second);
        return;
      }
      setCurrentWord(words[curIndexRef.current]);
      setInputValue("");
      setWordCount((prev) => prev + 1);
      return;
    }

    if (!new RegExp(`^${value}`).test(currentWord)) {
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
        {currentWord}
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
