import SetPomodoro from './components/SetPomodoro';
import CountDownTimer from './components/CountDownTimer';
import TriggerPomodoro from './components/TriggerPomodoro';
import { useSelector } from 'react-redux';

function App() {
	const pomodoro = useSelector((state) => state.pomodoro);
	console.log('App Component is rendered');
	const passedCycles = pomodoro.passedCycles;

	return (
		<div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
			<div className="max-w-xl mx-auto border border-slate-500 rounded p-5 min-[340px]:p-10 flex flex-col items-center gap-5">
				<h1 className="text-center text-3xl tracking-tighter ">
					Pomodoro App
				</h1>
				<div className="flex flex-col justify-center gap-4 min-[340px]:gap-16 min-[340px]:flex-row">
					<SetPomodoro type={'Session'} />
					<SetPomodoro type={'Pause'} />
				</div>
				<CountDownTimer />
				<p>Passed cycle(s) : {passedCycles}</p>
				<TriggerPomodoro />
			</div>
		</div>
	);
}

export default App;
