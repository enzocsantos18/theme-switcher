import React from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';

const Container: React.FC = ({children}) => {
  const {themeInfo} = React.useContext(ThemeContext);
  const {background, color} = themeInfo;

  
  return (
    <div style={{minHeight: '100vh', width: '100%', background, color}}>
      {children}
    </div>
  );
}

export default Container;