import ErrorDetail from "./ErrorDetail";

const ErrorsList = ({errors}) => {

  return(
    <div className="bg-red-200 rounded p-5 px-10 flex flex-col">
      <h4 className="text-xl font-semibold text-red-700 mb-2">{errors.length} erros ocurred when submitting the form.</h4>
      {
        errors.map((error, index) => {
          return <ErrorDetail key={index} error={error} />
        })
      }
    </div>
  )
}

export default ErrorsList;
