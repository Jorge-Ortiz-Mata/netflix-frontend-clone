const FileInput = ({onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.files[0], e.target.name);
  }

  return(
    <input
      type="file"
      id="avatar"
      name="avatar"
      className="rounded text-sm font-semibold"
      onChange={handleChange}
    />
  )
}

export default FileInput;
