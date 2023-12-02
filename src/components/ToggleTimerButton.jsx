import { updatesChronoValues } from "../redux/slices/pomodoroSlice";
import {useDispatch} from 'react-redux';
const ToggleTimerButton = ({type , action}) => {
    const tailWindCssClass = {
		button: 'bg-slate-200 rounded-sm flex justify-center items-center w-8 h-8 text-3xl text-black',
	};
    const dispatch = useDispatch();
	return (
		<button
            onClick={() => {dispatch(updatesChronoValues({type : type.toLowerCase(), value: action ==='+' ? 60 : -60}))}}
			className={`${tailWindCssClass.button}`}
		>
			<span className="mb-1">{action}</span>
		</button>
	);
};
export default ToggleTimerButton;
