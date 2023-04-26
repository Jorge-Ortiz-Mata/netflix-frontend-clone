const CustomButton = ({label, disabled, color, onPress}) => {
  const generalClass = "p-2 rounded text-white font-semibold text-sm "
  const backgroundColor = `bg-${color}-600`;

  const handleClick = () => {
    onPress();
  }

  return(
    <button
      disabled={disabled}
      onClick={handleClick}
      className={generalClass + backgroundColor}
    >
      {label}
    </button>
  )
}

export default CustomButton;
