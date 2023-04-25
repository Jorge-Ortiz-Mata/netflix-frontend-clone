const ErrorInformation = () => {

  return(
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-3xl font-bold text-center">Lost your way?</h2>
      <p className="font-semibold text-center">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
      <button>Netflix Home</button>
      <div className="flex items-center gap-3">
        <p className="font-semibold text-xl">Error Code</p>
        <p className="font-semibold text-xl">NSES-404</p>
      </div>
    </div>
  )
}

export default ErrorInformation;
