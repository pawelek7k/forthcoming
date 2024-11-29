import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
    name: string;
    email: string;
    password: string;
}

const initialState: UserStateType = {
    name: '',
    email: '',
    password: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserStateType>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.email;
        },
        clearUser: (state) => {
            state.name = '';
            state.email = '';
            state.password = '';
        },
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;