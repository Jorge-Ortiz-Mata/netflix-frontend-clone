const FormButton = ({label}) => {

  return(
    <input
      type="submit"
      value={label}
      className="bg-red-600 text-white font-semibold p-2 rounded mt-10"
    />
  )
}

export default FormButton;
