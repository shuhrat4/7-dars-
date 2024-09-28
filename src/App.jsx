import { useContext } from 'react'
import './App.css'
import Dashboard from './routes/dashboardRoutes'
import LoginRoutes from './routes/loginRoutes'
import { Context } from './context/Index'

function App() {
  const {token} = useContext(Context)
  if(token) {
    return <Dashboard/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App
