import React, {createContext, useEffect, useState} from 'react';
import { dark, white } from '../tools/theme';

type ThemeInfoType = {
  background: string,
  color: string,
  primary: string,
}

interface ThemeContextData {
  theme: boolean;
  themeInfo: ThemeInfoType ;
  handleThemeSwitch(): void;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);



const ThemeProvider: React.FC = ({ children }) => {

  const [theme, setTheme] = useState<boolean>(true);
  const [themeInfo, setThemeInfo] = useState<object | null>(white);


  useEffect(() => {

  }, [])


  function handleThemeSwitch(){
    if(theme){
      setTheme(!theme);
      setThemeInfo(dark);
    }
    else{
      setTheme(!theme);
      setThemeInfo(white); 
    }
  }

  return (
    <ThemeContext.Provider value={{theme,themeInfo, handleThemeSwitch} as ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;