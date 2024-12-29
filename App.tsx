import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useDispatch } from 'react-redux';

// Redux store and actions
import store from './src/redux/store';
import { setTheme } from './src/redux/themeSlice';

// Main Navigator
import MainNavigator from './src/navigations/MainNavigator';

const AppWrapper = () => {
  const systemTheme = useColorScheme(); // Detect system theme
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(systemTheme)); // Update theme dynamically
  }, [systemTheme, dispatch]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainNavigator />
    </GestureHandlerRootView>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
