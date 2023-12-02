import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	session: {
		value: 1500,
		runningValue: 1500,
	},
	pause: {
		value: 300,
		runningValue: 300,
	},
	isWorkTimeDisplayed: true,
	isPomodoroStarted: false,
	passedCycles: 0,
	display: {
		session: {
			heading: 'Work',
			time: 1500,
		},
		pause: {
			heading: 'Pause',
			time: 300,
		},
	},
	intervalID: null,
};
const pomodoroSlice = createSlice({
	name: 'update-pomodoro',
	initialState,
	reducers: {
		updatesChronoValues: (state, action) => {
			const choosenState = state[action.payload.type];
			if (choosenState.value + action.payload.value === 0) return;
			if (!state.isPomodoroStarted) {
				choosenState.value = choosenState.value + action.payload.value;
				choosenState.runningValue =
					choosenState.runningValue + action.payload.value;
				state.display[action.payload.type].time =
					state.display[action.payload.type].time +
					action.payload.value;
			} else {
				choosenState.value = choosenState.value + action.payload.value;
			}
		},
		toggleDisplayWorkTimer: (state, action) => {
			state.isWorkTimeDisplayed = action.payload;
		},
		tick : (state , action)=>{
		
			if(state.isWorkTimeDisplayed){
				if(state.session.runningValue > 0)
				{
					state.session.runningValue--;
					state.display.session.time = state.session.runningValue;

				} 
				else
				 {
					state.session.runningValue = state.session.value ;
					state.display.session.time = state.session.value ;
					state.pause.runningValue = state.pause.value -1;
					state.display.pause.time = state.pause.value -1;
					state.isWorkTimeDisplayed = false;
				}
			} 
			else 
			{
				if(state.pause.runningValue > 0) 
				{
					state.pause.runningValue--;
					state.display.pause.time = state.pause.runningValue;

				} 
				else 
				{
					state.passedCycles++;
					state.session.runningValue = state.session.value -1 ;
					state.display.session.time = state.session.value -1;
					state.pause.runningValue = state.pause.value;
					state.display.pause.time = state.pause.value;
					state.isWorkTimeDisplayed = true;
				}
			}

		} , 
		setUpChrono : (state , action) => {
			state.isPomodoroStarted = true;
			state.intervalID = action.payload;
		} , 
		stopChrono : (state , action) =>{
			state.isPomodoroStarted = false;
			if(!state.isWorkTimeDisplayed) state.isWorkTimeDisplayed = true;
			clearInterval(state.intervalID);
			state.session.runningValue = state.session.value;
			state.pause.runningValue = state.pause.value;
			state.display.session.time = state.session.value;
			state.display.pause.time = state.pause.value;
			state.passedCycles = 0;
		}
	},
});

export const startChrono = () => {
	return (dispatch , getState) => {
		const intervalID = setInterval(()=>{
			dispatch(tick())
		} , 1000)

		const isWorkdDisplayed = getState().pomodoro.isWorkTimeDisplayed
		if(!isWorkdDisplayed) dispatch(toggleDisplayWorkTimer(true))
		dispatch(setUpChrono(intervalID))
		dispatch(tick())

	}
}

export const { updatesChronoValues, toggleDisplayWorkTimer , setUpChrono , stopChrono , tick } =
	pomodoroSlice.actions;

export default pomodoroSlice.reducer;
