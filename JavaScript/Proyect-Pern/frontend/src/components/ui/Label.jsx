export function Label({children, htmlFor}) {
  return (
    <label className='block text-grey-400 text-sm font-light mb-2' htmlFor={htmlFor}>
        {children}
    </label>
  )
}

export default Label