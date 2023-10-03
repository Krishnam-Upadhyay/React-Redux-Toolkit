import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Posts', content: "I've heard good thing" },
    { id: 2, title: 'Slices', content: "The more I hear slice the more I want pizaa" },
];

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload);
        }

    }
})
export const { postAdded } = postSlice.actions;
export const selectAllPosts = (state) => state.posts
export default postSlice.reducer;