import { useDispatch, useSelector } from 'react-redux';
const SetPomodoro = ({ type, time, action}) => {
	const tailWindCssClass = {
		button: 'bg-slate-200 rounded-sm flex justify-center items-center w-8 h-8 text-3xl text-black',
		buttonGrpSpan: 'min-w-[60px] shrink-0 text-center text-xl font-bold',
	};
	const pomodoro = useSelector((state) => state.pomodoro);
	const isWorkTimeDiplayed = pomodoro.isWorkTimeDisplayed;
	const dispatch = useDispatch();
	const handleDisplay = () => {
		(isWorkTimeDiplayed && type === 'Breaks' ) && dispatch(action.toggleDisplayWorkTimer(false));
        (!isWorkTimeDiplayed && type === 'Sessions') && dispatch(action.toggleDisplayWorkTimer(true));
	};

	return (
		<div className="flex flex-col gap-1 items-center cursor-pointer" onClick={handleDisplay}>
			<p>{type}</p>
			<div className="flex justify-center">
				<button
					onClick={() => dispatch(action.decrement())}
					className={`${tailWindCssClass.button}`}
				>
					-
				</button>
				<span className={`${tailWindCssClass.buttonGrpSpan}`}>
					{time}
				</span>
				<button
					onClick={() => dispatch(action.increment())}
					className={`${tailWindCssClass.button}`}
				>
					+
				</button>
			</div>
		</div>
	);
};
export default SetPomodoro;
