import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './slices/booksSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;