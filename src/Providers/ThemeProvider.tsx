import React, {createContext} from 'react';
import { dark, white } from '../tools/theme';


export const ThemeContext = createContext({
  background :'',
  color: '',
  primary: ''
});



const ThemeProvider: React.FC = ({ children }) => {

  const theme = white;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;