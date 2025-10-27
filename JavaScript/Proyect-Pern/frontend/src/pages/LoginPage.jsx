import { Link, useNavigate } from "react-router-dom"
import { Button, Card, Input, Label } from "../components/ui"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from 'react' 

function LoginPage() {
  const { register, handleSubmit} = useForm()
  const { signin, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
       if (isAuthenticated) {
         navigate("/perfil");
       }
     }, [isAuthenticated, navigate])
  
  const onSubmit = handleSubmit(async(data) => {

    try {
         await signin(data) 
       } catch (error) {
         console.error("Error en el registro:", error)
       }
  })

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">Iniciar sesion</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su mail" {...register("email", { required: true })}></Input>
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña" {...register("password", { required: true })}></Input>
          <Button type="submit">Ingresar</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>¿No tienes cuenta?</p>
          <Link to="/register" className="text-blue-500 hover:underline">Registrate</Link>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage