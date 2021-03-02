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
    const infos = JSON.parse(localStorage.getItem('theme') as string);

    if(infos){
      setTheme(infos.theme)
      setThemeInfo(infos.themeInfo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify({theme, themeInfo}))
  }, [theme, themeInfo])



  function handleThemeSwitch(){
    theme  ? setThemeInfo(dark) :  setThemeInfo(white); 
    setTheme(!theme);

  }

  return (
    <ThemeContext.Provider value={{theme,themeInfo, handleThemeSwitch} as ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;