import play from '../assets/play-button.svg';
import reset from '../assets/reset.svg';
import {useSelector , useDispatch} from 'react-redux';
import { triggerPomodoro } from '../redux/slices/pomodoroSlice';

const TriggerPomodoro = () => {
  const pomodoro = useSelector((state) => state.pomodoro);
  const isPomodoroStarted = pomodoro.isPomodoroStarted;
  const dispatch = useDispatch();
  // console.log(isPomodoroStarted)
  return (
    <button onClick={() => dispatch(triggerPomodoro())} className='flex rounded-md px-4 py-2 items-center gap-2 bg-slate-300 text-black'>
    <span>{isPomodoroStarted ? 'Reset' : 'Start'}</span>
    <img src={isPomodoroStarted ? reset : play} className='w-5' />
 </button>
  )
}
export default TriggerPomodoro