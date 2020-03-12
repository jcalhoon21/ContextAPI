import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../Colors';

const MainWithFunction = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main style={{
      padding: '1%',
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,
    }}>
      <h1>Heading 1</h1>
      <p>This is a paragraph</p>
      <button>This is a button</button>
    </main>
  )
}

export default MainWithFunction;