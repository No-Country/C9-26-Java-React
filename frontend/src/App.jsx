import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HOME, CAMPUS, PRIVATE, CLASS, EXAMS, SERVICES, CONSULTATION, STUDENT, ADD_STUDENT, PROGRAM, MULTIMEDIA, CHAT, EVENTS, TASKS } from './config/routes/paths'
import { PrivateRoute, PublicRoute, Program, Multimedia, Chat, Events, Tasks } from './components'
import { Home, Campus, Profile, Clases, Examenes, Servicios, Consultas, Alumno } from './pages'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path={CLASS} element={<Clases />} />
          <Route path={EXAMS} element={<Examenes />} />
          <Route path={SERVICES} element={<Servicios />} />
          <Route path={CONSULTATION} element={<Consultas />} />
        </Route>
        <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route index element={<Profile />} />
          <Route path={ADD_STUDENT} element={<Alumno />} />
          <Route path={STUDENT} element={<Alumno />} />
          <Route path={CAMPUS} element={<Campus />}>
            <Route path={PROGRAM} element={<Program />} />
            <Route path={MULTIMEDIA} element={<Multimedia />} />
            <Route path={CHAT} element={<Chat />} />
            <Route path={EVENTS} element={<Events />} />
            <Route path={TASKS} element={<Tasks />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App