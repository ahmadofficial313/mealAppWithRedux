import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './favourite';
export const store = configureStore({
    reducer: {
        favouriteMeals: favouriteReducer
    }
});


