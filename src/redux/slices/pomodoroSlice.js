import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	workTime: 25,
	breakTime: 5,
	isWorkTimeDisplayed: true,
	isPomodoroStarted: false,
};
const pomodoroSlice = createSlice({
	name: 'update-pomodoro',
	initialState,
	reducers: {
		incrementWorkTime: (state) => {
			state.workTime++;
		},
		incrementBreakTime: (state) => {
			state.breakTime++;
		},
		decrementWorkTime: (state) => {
			state.workTime > 1 && state.workTime--;
		},
		decrementBreakTime: (state) => {
			state.breakTime > 1 && state.breakTime--;
		},
		toggleDisplayWorkTimer: (state, action) => {
			state.isWorkTimeDisplayed = action.payload;
		},
		triggerPomodoro: (state) => {
			state.isPomodoroStarted = !state.isPomodoroStarted;
		},
	},
});

export const {
	incrementWorkTime,
	incrementBreakTime,
	decrementWorkTime,
	decrementBreakTime,
	toggleDisplayWorkTimer,
	triggerPomodoro,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
