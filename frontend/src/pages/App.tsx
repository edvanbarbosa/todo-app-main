import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import style from './App.module.scss';


function App() {
  const [theme = 'dark', setTheme] = React.useState<'light'|'dark'>('dark')
  
  return (
    <div className={`${style.App} ${theme === 'light'?style.AppLight:style.AppDark}`}>
      <Header theme={theme}/>
      <Main theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
