import React from 'react';
import ThemeProvider from './Providers/ThemeProvider';
import Header from './Components/Header'
import Container from './Components/Container';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Header></Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
