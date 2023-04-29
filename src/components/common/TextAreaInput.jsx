const TextAreaInput = ({name, id, value, cols, rows, onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.value, e.target.name)
  }

  return(
    <textarea
      name={name}
      id={id}
      value={value}
      cols={cols}
      rows={rows}
      className="bg-gray-800 text-gray-400 font-medium py-3 px-5 rounded text-sm"
      onChange={handleChange}
    />
  )
}

export default TextAreaInput;
