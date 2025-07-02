import React from 'react';
import Navbar from './Components/Navbar';
import ErrorBoundary from './Components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Navbar />
    </ErrorBoundary>
  );
};

export default App;
