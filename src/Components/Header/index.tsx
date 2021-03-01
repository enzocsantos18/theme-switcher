import React from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';


const Header: React.FC = () => {

  const {handleThemeSwitch, themeInfo} = React.useContext(ThemeContext);
  const {primary} = themeInfo;


  return (
    <header>
      <h1 style={{color: primary}}>teste</h1>
      <button onClick={() => handleThemeSwitch()}>Trocar cor</button>
    </header>
  )
}

export default Header;