import counterReducer from '../features/Counter/counterSilce';
import userReducer from '../features/Auth/userSlice';
const { configureStore } =  require("@reduxjs/toolkit");

const rootReducer = {
    count: counterReducer,
    user: userReducer,
}
const store =configureStore({
    reducer: rootReducer,
})

export default store;