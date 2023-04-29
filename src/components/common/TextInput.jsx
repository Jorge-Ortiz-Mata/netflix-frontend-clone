const TextInput = ({type, name, id, value, placeholder, required, onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.value, e.target.name);
  }

  return(
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      required={required}
      placeholder={placeholder}
      onChange={handleChange}
      className="bg-gray-800 text-gray-400 font-medium py-3 px-5 rounded text-sm"
    />
  )
}

export default TextInput;
