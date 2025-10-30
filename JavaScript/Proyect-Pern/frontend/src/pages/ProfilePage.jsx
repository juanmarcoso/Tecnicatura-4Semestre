import { useAuth } from "../context/AuthContext"

function ProfilePage() {
  const { user, loading } = useAuth()
  
  if (loading) {
    return <p>Cargando...</p>
  }

  if (!user) {
        return <h1>No estás autenticado</h1>
    }

  return (
    <div>
      <h1>Bienvenido, {user.name}</h1>
      <p>Tu email: {user.email}</p>
      <img src={user.gravatar} alt="Avatar" />
    </div>
  )
}

export default ProfilePage