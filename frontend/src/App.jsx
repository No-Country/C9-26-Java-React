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
  )
  }

export default App