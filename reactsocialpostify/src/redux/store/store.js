import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../slices/themeSlice/themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

export default store