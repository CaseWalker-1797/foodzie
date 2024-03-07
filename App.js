import React from 'react';
import MainNav from './src/navigation/MainNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNav />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
