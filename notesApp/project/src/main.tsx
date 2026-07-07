
import { createRoot } from 'react-dom/client'
import { store } from './store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
 import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
     <App />
     <ToastContainer />
  </Provider>
   
  
)
