import { ThemeProvider } from "./component/Context"
import ThemeButton from "./component/ThemeButton"
import ThemeDisplay from "./component/ThemeDisplay"

function App() {
 

  return (
    <ThemeProvider>
      <h1>Theme Context Example</h1>
      <ThemeButton />
      <ThemeDisplay />
    </ThemeProvider>
  )
}

export default App
