import React from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';

type Theme = {
  background: String,
  color: String,
  primary: String,
}

const Header: React.FC = () => {

  const {background, color, primary} = React.useContext(ThemeContext);

  console.log(background)

  return (
    <header style={{background, color}}>
      <h1 style={{color: primary}}>teste</h1>
    </header>
  )
}

export default Header;