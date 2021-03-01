import React from 'react';
import ThemeProvider from './Providers/ThemeProvider';
import Header from './Components/Header'

function App() {
  return (
    <ThemeProvider>
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
