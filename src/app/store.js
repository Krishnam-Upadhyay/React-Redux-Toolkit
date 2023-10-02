import { configureStore } from "@reduxjs/toolkit";
import counerReducer from '../feature/counter/counterSlice';
export const store = configureStore({
    reducer: {
        counter: counerReducer

    }

})
