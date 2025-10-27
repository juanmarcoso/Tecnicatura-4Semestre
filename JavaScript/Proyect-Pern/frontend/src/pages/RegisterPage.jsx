import { Button, Card, Input, Label } from "../components/ui"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
// 'useEffect' es la clave de la solución
import { useEffect } from 'react' 

function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  // 1. OBTENEMOS 'isAuthenticated' DEL CONTEXTO
  //    (Además de 'signup')
  const { signup, isAuthenticated } = useAuth()
  const navigate = useNavigate() 
  
  // 2. AÑADIMOS UN 'useEffect' QUE "ESCUCHE" LOS CAMBIOS
  useEffect(() => {
    // Si isAuthenticated cambia a 'true'
    if (isAuthenticated) {
      // Navegamos al perfil.
      navigate("/perfil");
    }
    // Este efecto se ejecutará CADA VEZ que 'isAuthenticated' o 'navigate' cambien.
  }, [isAuthenticated, navigate])

  // 3. SIMPLIFICAMOS EL 'onSubmit'
  const onSubmit = handleSubmit(async(data) =>{
    try {
      // Ahora 'onSubmit' solo se encarga de llamar a signup.
      // NO se encarga de navegar.
      await signup(data) 
    } catch (error) {
      // Es buena idea mantener el try/catch por si el email ya existe
      console.error("Error en el registro:", error)
      // Aquí podrías poner un estado para mostrar el error al usuario
      // ej: setRegisterError(error.response.data.message)
    }
  })

  return (
    <div className="h-[calc(100vh-64px)] flex place-items-center justify-center">
      <Card>
        <div className="flex justify-center mt-4">
          <h2 className='text-4xl font-bold my-4' >Registro</h2>
        </div>
        <form onSubmit={onSubmit}>
          
          <Label htmlFor={"name"}>Nombre</Label>
          <Input type="text" placeholder="Ingrese su nombre"{...register("name", { required: true })}></Input>
          {errors.name && <span className="text-red-500">Este campo es requerido</span>}
          
          <Label htmlFor={"email"}>Email</Label>  
          <Input type="email" placeholder="Ingrese su email"{...register("email", { required: true })} id="email"></Input>
          {errors.email && <span className="text-red-500">Este campo es requerido</span>}

          <Label htmlFor={"password"}>Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"{...register("password", { required: true })} id="password"></Input>
          {errors.password && <span className="text-red-500">Este campo es requerido</span>}

          <div className="flex justify-center mt-4">
            <Button type="submit">Registrarse</Button>
          </div>
        </form>
        <div className="flex flex-col items-center my-4">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login" className="text-blue-500 hover:underline"> Iniciar sesion</Link>
        </div>
      </Card>
    </div>
  )
}

export default RegisterPage