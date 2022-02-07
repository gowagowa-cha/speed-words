import React from "react";

export const Welcome = ({ onClickCart }) => {

	return (
		<div className='flex start'>
			<img
				className='start__image'
				width='50'
				src='https://speed-words.vercel.app/static/media/flag.1fffd39b.png'
				alt='images'
			/>
			<div className='start__text'>
				<h3 className='start__header'>speed words</h3>
				<p className='start__phrase'>игра на скорость слов</p>
			</div>
			<button onClick={onClickCart} className='button'>
				🔥 Начать
			</button>
		</div>
	);
};
