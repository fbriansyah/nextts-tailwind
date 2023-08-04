
const CheckBox: React.FC<React.HTMLProps<HTMLInputElement>> = ({type, className,...resProps}) => {
  let componentDefaultClasses = 'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600';
  let componetType = "checkbox"
  
  if (type != 'checkbox') {
    componetType = 'checkbox'
  }
  if(className != '') {
    componentDefaultClasses = className;
  }
  return (
    <input
      type={componetType}
      className={componentDefaultClasses}
    />
  )
}

export default CheckBox;