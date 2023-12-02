import { useDispatch, useSelector } from 'react-redux';
import ToggleTimerButton from './ToggleTimerButton';
import { toggleDisplayWorkTimer } from '../redux/slices/pomodoroSlice';
const SetPomodoro = ({ type }) => {
	const tailWindCssClass = {
		buttonGrpSpan: 'min-w-[60px] shrink-0 text-center text-xl font-bold',
	};
	const pomodoro = useSelector((state) => state.pomodoro);
	const isWorkTimeDiplayed = pomodoro.isWorkTimeDisplayed;
	const dispatch = useDispatch();
	const value = pomodoro[type.toLowerCase()].value;
	const valueInSecon = (value / 60)
	const handleDisplay = () => {
		if (!pomodoro.isPomodoroStarted) {
			isWorkTimeDiplayed &&
				type === 'Pause' &&
				dispatch(toggleDisplayWorkTimer(false));
			!isWorkTimeDiplayed &&
				type === 'Session' &&
				dispatch(toggleDisplayWorkTimer(true));
		}
	};

	return (
		<div
			className="flex flex-col gap-1 items-center cursor-pointer"
			onClick={handleDisplay}
		>
			<p>{type}</p>
			<div className="flex justify-center">
				<ToggleTimerButton type={type} action={'-'} />
				<span className={`${tailWindCssClass.buttonGrpSpan} select-none`}>
					{valueInSecon}
				</span>
				<ToggleTimerButton type={type} action={'+'} />
			</div>
		</div>
	);
};
export default SetPomodoro;
