import { forwardRef } from 'react'

// export function Input(props) {
//   return (
//     <input type="text" className='bg-zinc-800 px-3 py-2 block my-2 w-full' {...props}/>
//   )
// }

// Vamos a utilizar la siguiente linea de codigo para que pueda recibir y renderizar de la clase padre
export const Input = forwardRef(({...props}, ref) => {
  return (
    <input type="text" className='bg-zinc-800 px-3 py-2 block my-2 w-full' {...props} ref={ref}/>
  )
})


export default Input