import { Button, Card, Input } from "../components/ui"
import { useForm } from "react-hook-form"

function RegisterPage() {

  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  console.log(errors)

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className='text-2xl font-bold' >Registro</h3>
        <form onSubmit={onSubmit}>
          
          <Input type="text" placeholder="Ingrese su nombre"{...register("name", { required: true })}></Input>
          {errors.name && <span className="text-red-500">Este campo es requerido</span>}

          <Input type="text" placeholder="Ingrese su apellido"{...register("lastname", { required: true })}></Input>
          {errors.lastname && <span className="text-red-500">Este campo es requerido</span>}

          <Input type="email" placeholder="Ingrese su email"{...register("email", { required: true })}></Input>
          {errors.email && <span className="text-red-500">Este campo es requerido</span>}

          <Input type="password" placeholder="Ingrese su contraseña"{...register("password", { required: true })}></Input>
          {errors.password && <span className="text-red-500">Este campo es requerido</span>}

          <Input type="password" placeholder="Repita su contraseña"{...register("password2", { required: true })}></Input>
          {errors.password2 && <span className="text-red-500">Este campo es requerido</span>}

          <Button>Registrarse</Button>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage