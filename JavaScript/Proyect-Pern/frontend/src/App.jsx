import Navbar from './components/navbar/Navbar'
import { Container } from './components/ui'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

import { Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import TareaFormPage from './pages/TareaFormPage'
import TareasPage from './pages/TareasPage'
import NotFound from './pages/NotFound'

function App() {

  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)

  return (
    <>
    <Navbar />
    <Container className="py-5">
    <Routes>
      <Route element={<ProtectedRoute isAllowed={!isAuthenticated}/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute isAllowed={isAuthenticated}/>}>
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/tarea/crear" element={<TareaFormPage />} />
        <Route path="/tarea/editar/:id" element={<TareaFormPage />} />
        <Route path="/tareas" element={<TareasPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />  

    </Routes>
    </Container>
    </>
  )
}

export default App