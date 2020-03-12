import React from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../Colors';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  static contextType = ThemeContext;
  render() {
    const currentTheme = AppTheme[this.context[0]];
    return(
      // <ThemeContext.Consumer>
      //{
        // (theme) => {
        //   const currentTheme = AppTheme[theme];
        //   return (
            <main style={{
              padding: '1%',
              backgroundColor: `${currentTheme.backgroundColor}`,
              color: `${currentTheme.textColor}`,
            }}>
              <h1>Heading 1</h1>
              <p>This is a paragraph</p>
              <button>this is a button</button>
            </main>
        //   )
        // }
      //}
      // </ThemeContext.Consumer>
   )
  }
}

export default Main;