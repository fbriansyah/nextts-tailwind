
const TextInput: React.FC<React.HTMLProps<HTMLInputElement>>  = ({className,...resProps}) => {
  let componentDefaultClasses = "relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  
  // if (className != '') {
  //   componentDefaultClasses = className
  // }
  
  return (
    <input
      {...resProps}
      className={componentDefaultClasses}
    />
  )
}

export default TextInput;