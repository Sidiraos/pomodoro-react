import SetPomodoro from './components/SetPomodoro';
import CountDownTimer from './components/CountDownTimer';
import TriggerPomodoro from './components/TriggerPomodoro';
import { useSelector } from 'react-redux';
import {
	incrementWorkTime,
	incrementBreakTime,
	decrementWorkTime,
	decrementBreakTime,
	toggleDisplayWorkTimer,
} from './redux/slices/pomodoroSlice';

function App() {
	const pomodoro = useSelector((state) => state.pomodoro);
  console.log('App', pomodoro);
	const workTime = pomodoro.workTime;
	const breakTime = pomodoro.breakTime;
	const isWorkTimeDisplayed = pomodoro.isWorkTimeDisplayed;

	return (
		<div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
			<div className="max-w-xl mx-auto border border-slate-500 rounded p-5 min-[340px]:p-10 flex flex-col items-center gap-5">
				<h1 className="text-center text-3xl tracking-tighter ">
					Pomodoro App
				</h1>
				<div className="flex flex-col justify-center gap-4 min-[340px]:gap-16 min-[340px]:flex-row">
					<SetPomodoro
						type={'Sessions'}
						time={workTime}
						action={{
							increment: incrementWorkTime,
							decrement: decrementWorkTime,
							toggleDisplayWorkTimer: toggleDisplayWorkTimer,
						}}
					/>
					<SetPomodoro
						type={'Breaks'}
						time={breakTime}
						action={{
							increment: incrementBreakTime,
							decrement: decrementBreakTime,
							toggleDisplayWorkTimer: toggleDisplayWorkTimer,
						}}
					/>
				</div>
				{isWorkTimeDisplayed ? (
					<CountDownTimer type={'Work'} time={workTime} />
				) : (
					<CountDownTimer type={'Pause'} time={breakTime} />
				)}
				<p>Passed cycle(s) : 0</p>
				<TriggerPomodoro />
			</div>
		</div>
	);
}

export default App;
