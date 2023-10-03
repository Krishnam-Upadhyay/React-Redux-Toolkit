import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../feature/post/postSlice';
export const store = configureStore({
    reducer: {
        posts: postsReducer


    }

})
