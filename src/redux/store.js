import {configureStore} from '@reduxjs/toolkit';
import pomodoroSlice from './slices/pomodoroSlice';

const store = configureStore({
    reducer: {
        pomodoro: pomodoroSlice
    },
    devTools: true

})

export default store

