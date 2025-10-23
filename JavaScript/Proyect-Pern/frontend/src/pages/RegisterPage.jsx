import { Button, Card, Input, Label } from "../components/ui"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"

function RegisterPage() {

  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = handleSubmit(async(data) => {
    const res = axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    })
      console.log(res)
  });

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

          {/* <Input type="text" placeholder="Ingrese su apellido"{...register("lastname", { required: true })}></Input>
          {errors.lastname && <span className="text-red-500">Este campo es requerido</span>} */}
          
          <Label htmlFor={"email"}>Email</Label>  
          <Input type="email" placeholder="Ingrese su email"{...register("email", { required: true })}></Input>
          {errors.email && <span className="text-red-500">Este campo es requerido</span>}

          <Label htmlFor={"password"}>Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"{...register("password", { required: true })}></Input>
          {errors.password && <span className="text-red-500">Este campo es requerido</span>}

          {/* <Input type="password" placeholder="Repita su contraseña"{...register("password2", { required: true })}></Input>
          {errors.password2 && <span className="text-red-500">Este campo es requerido</span>} */}

          <div className="flex justify-center mt-4">
            <Button>Registrarse</Button>
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