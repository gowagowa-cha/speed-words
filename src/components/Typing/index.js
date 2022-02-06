export const Typing = () => {
  return (
    <div class='flex typing'>
      <p class='typing__enter-word'>Введите слово</p>
      <h3 class='typing__word'>
        Slaves <span class='typing__man-sign'>📌</span>
      </h3>
      <input type='text' value='' class='typing__input' />
      <div class='typing__progress'>
        <div class='typing__timer'>
          <p>Осталось времени:</p>
          <b>12 сек.</b>
        </div>
        <div class='typing__counter'>
          <p>Введено слов:</p>
          <b>5</b>
        </div>
      </div>
    </div>
  );
};
