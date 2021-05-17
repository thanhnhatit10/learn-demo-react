import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKey from '../../constants/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
    //   gọi API từ register
    const data = await userApi.register(payload);
    // update data to localStorage
    localStorage.setItem(StorageKey.TOKEN, data.jwt);
    localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
    return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    const data = await userApi.login(payload);

    localStorage.setItem(StorageKey.TOKEN, data.jwt);
    localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
    return data.user;
});
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
    },
    //   async actions: thực hiện gọi api trả về state
    reducers: {
        logout(state) {
            // xoá user được lưu trong localStorage
            localStorage.removeItem(StorageKey.USER);
            localStorage.removeItem(StorageKey.TOKEN);
            // xoá trong current

            state.current = {};
        }
    },
    extraReducers: {
        // extraReducers mình tự định nghĩa

        [register.fulfilled]: (state, action) => {
            // cập nhật vố state.current
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const {actions, reducer } = userSlice;
export const {logout} = actions;
export default reducer;
