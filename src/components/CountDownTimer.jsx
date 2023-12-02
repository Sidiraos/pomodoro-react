import React from 'react';
import { useSelector } from 'react-redux';
import formatedTime from '../utils/formatedTime';

const CountDownTimer = () => {
	const pomodoro = useSelector((state) => state.pomodoro);
	const isWorkTimeDisplayed = pomodoro.isWorkTimeDisplayed;
	const display = pomodoro.display;

	return (
		<div className="flex flex-col gap-2 items-center user-select-none">
			<p className="text-center font-bold text-xl">
				{isWorkTimeDisplayed
					? display.session.heading
					: display.pause.heading}
			</p>
			<button className="flex justify-center items-center p-5 text-4xl bg-slate-300 rounded-md text-black">
				{isWorkTimeDisplayed ? formatedTime(display.session.time):formatedTime(display.pause.time)}
			</button>
		</div>
	);
};
export default React.memo(CountDownTimer);
