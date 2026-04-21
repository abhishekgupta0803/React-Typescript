import React from 'react'
import { UseTheme } from './Context'

const ThemeDisplay = () => {
    const {theme} = UseTheme();
  return (
    <div  style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        marginTop: "10px",
      }}>

        current Theme : {theme}
        
    </div>
  )
}

export default ThemeDisplay