import React from 'react';
import { View } from 'react-native';
import Login from './screens/login';
// import Home from './screens/home'
// import { Provider } from 'react-redux';
// import store from './store';
import ContextProvider from './context/context';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ContextProvider>
        <Login />
      </ContextProvider>
    </View>
  );
}


