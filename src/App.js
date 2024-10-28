import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react'; // Removed Theme import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/components/Auth/Login';
import Signup from './assets/components/Auth/Signup';
import Dashboard from './assets/components/Dashboard';
import Analytics from './assets/components/Analytics';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Button m={4}>
          {/* Removed colorMode toggle functionality */}
          No Dark/Light Mode
        </Button>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
