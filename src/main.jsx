import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Index } from './context/Index.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Index>
    <App />
    </Index>
  </BrowserRouter>

)
