import type { Book } from "@/types/book";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type BooksStateType = {
    books: Book[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BooksStateType = {
    books: [],
    status: 'idle',
    error: null
}

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/book/get');
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || 'Failed to fetch books');
        }
    }
);