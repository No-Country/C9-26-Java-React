import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HOME, LOGIN, PROFILE, CLASS, EXAMS, SERVICES, CONSULTATION } from './config/routes/paths'
import { PrivateRoute, PublicRoute } from './components'
import { Home, Login, Profile, Clases, Examenes, Servicios, Consultas } from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path={HOME} element={<Home />} />
          {/* <Route path={LOGIN} element={<Login />} /> */}
          <Route path={CLASS} element={<Clases />} />
          <Route path={EXAMS} element={<Examenes />} />
          <Route path={SERVICES} element={<Servicios />} />
          <Route path={CONSULTATION} element={<Consultas />} />
        </Route>
        <Route path={PROFILE} element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  }

export default App