import type { Book } from "@/types/book";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type BooksStateType = {
    books: Book[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    searchQuery: string;
    selectedGenre: string | null;
    selectedLanguage: string | null;
    forAdult: boolean;
}

const initialState: BooksStateType = {
    books: [],
    status: 'idle',
    error: null,
    searchQuery: '',
    selectedGenre: null,
    selectedLanguage: null,
    forAdult: false,
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
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setSelectedGenre(state, action) {
            state.selectedGenre = action.payload;
        },
    },
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
    },
});

export const { setSearchQuery, setSelectedGenre } = booksSlice.actions;


export default booksSlice.reducer;