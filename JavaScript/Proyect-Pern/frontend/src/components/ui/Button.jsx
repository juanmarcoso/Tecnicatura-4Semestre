export function Button({children}) {
  return (
    <button className="relative inline-flex items-center gap-1.5 rounded-2xl bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
      {children}
    </button>
  )
}

export default Button
