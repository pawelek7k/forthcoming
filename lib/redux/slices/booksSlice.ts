import type { Book } from "@/types/book";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const addBook = createAsyncThunk(
    'books/addBook',
    async (bookData: Book, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/book/add', bookData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || 'Failed to add book');
        }
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.books.push(action.payload);
            })
            .addCase(addBook.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    }
});

export default booksSlice.reducer;