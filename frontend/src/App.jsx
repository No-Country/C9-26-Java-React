import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HOME, CAMPUS, PROFILE, CLASS, EXAMS, SERVICES, CONSULTATION, STUDENT, ADD_STUDENT } from './config/routes/paths'
import { PrivateRoute, PublicRoute } from './components'
import { Home, Campus, Profile, Clases, Examenes, Servicios, Consultas, Alumno } from './pages'



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
          <Route path={STUDENT} element={<Alumno />} />
          <Route path={ADD_STUDENT} element={<Alumno />} />
          <Route path={CAMPUS} element={<Campus />} />
        </Route>
        <Route path={PROFILE} element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App