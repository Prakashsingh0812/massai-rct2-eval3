import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct for React 18
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'; // Ensure ChakraProvider import is correct
import { Provider } from 'react-redux';
import store from './assets/components/redux/store';

// Create a theme if necessary, or use the default theme
// const theme = extendTheme(); // You can customize the theme here

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
