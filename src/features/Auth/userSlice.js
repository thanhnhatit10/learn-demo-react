import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
    //   gọi API từ register
      const data = await userApi.register(payload);
    // update data to localStorage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.user;
    }
  )
const userSlice = createSlice({
  name: 'user',
  initialState: {
      current: {

      },
  },
//   async actions: thực hiện gọi api trả về state
  reducers: {
    
  },
  extraReducers: {
    // extraReducers mình tự định nghĩa

      [register.fulfilled]: (state, action) => {
        // cập nhật vố state.current
        state.current = action.payload;
      }
  }
});

const {  reducer } = userSlice;
export default reducer;