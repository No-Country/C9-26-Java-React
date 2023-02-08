<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HOME, LOGIN, PROFILE, SERVICES } from './config/routes/paths'
import { PrivateRoute, PublicRoute } from './components'
import { Home, Login, Profile, Servicios } from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SERVICES} element={<Servicios />} />
        </Route>
        <Route path={PROFILE} element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import './App.css'
import Home from './pages/Home/Home'
import Servicios from './pages/Servicios/Servicios'

function App() {
  return (
    <div className="App">      
      <Home />
      <Servicios />
    </div>
>>>>>>> 73092d8 (Home)
  )
}

export default App