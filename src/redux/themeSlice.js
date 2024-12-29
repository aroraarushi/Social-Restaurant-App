import { createSlice } from '@reduxjs/toolkit';
import { lightThemeColors, darkThemeColors } from './themeColors';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false,
    colors: lightThemeColors, 
  },
  reducers: {
    setTheme: (state, action) => {
      state.isDarkTheme = action.payload === 'dark';
      state.colors = state.isDarkTheme ? darkThemeColors : lightThemeColors;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
