
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TodoContext from './context/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  <TodoContext >
     <App />
  </TodoContext>
   
  
)
