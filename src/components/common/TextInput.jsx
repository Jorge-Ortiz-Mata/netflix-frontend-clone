const TextInput = ({name, id, placeholder, getValue}) => {

  const handleChange = (e) => {
    getValue(e.target.value)
  }

  return(
    <input
      type="text"
      name={name}
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      className="bg-gray-800 text-gray-400 font-medium py-3 px-5 rounded"
    />
  )
}

export default TextInput;
