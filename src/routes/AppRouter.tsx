import { Route, Routes } from 'react-router-dom'
import ServicePage from '../pages/Services'
import Settings from '../pages/Setting'
import LoginPage from '../pages/LoginPage'
import App from '../App'
import Layout from '../comonents/layout/Layout'

const AppRouter = () => {
  return (
    <  >
       

     <Routes>
      
      <Route path='/' element={<App/>} />
      <Route path='services' element={<ServicePage/>} />
      <Route path='settings' element={<Settings/>} />
      <Route path='login' element={<LoginPage/>} />
      
     </Routes>
     
    </ >
  )
}

export default AppRouter