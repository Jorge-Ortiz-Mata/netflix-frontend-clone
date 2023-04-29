const LabelInput = ({name, label}) => {

  return(
    <label
      htmlFor={name}
      className="text-white font-semibold">
        {label}
    </label>
  )
}

export default LabelInput;
