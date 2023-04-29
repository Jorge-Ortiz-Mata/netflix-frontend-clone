import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createMovie } from "../../services/http-movies";

import LabelInput from "../common/LabelInput";
import TextInput from "../common/TextInput";
import FileInput from "../common/FileInput";
import TextAreaInput from "../common/TextAreaInput";
import ErrorsList from "../common/ErrorsList";
import LoaderSpin from "../common/LoaderSpin";

const NewMovieForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])
  const [movie, setMovie] = useState({
    name: '',
    year: 0,
    duration: 0,
    description: '',
    avatar: undefined
  });

  const handleChange = (value, name) => {
    setMovie(prevState => (
      {...prevState, [name]: value}
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createMovie(movie);
      navigate('/')
    } catch (error) {
      const errors = error.response.data.errors;
      setErrors(errors)
    }

    setIsLoading(false);
  }

  if(isLoading) return <LoaderSpin />

  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      { errors.length > 0 && <ErrorsList errors={errors} /> }
      <div className="flex flex-col gap-1">
        <LabelInput name='name' label={'Name: '} />
        <TextInput
          type='text'
          name='name'
          id='name'
          value={movie.name}
          required={true}
          placeholder='The Lord of the rings'
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-1 w-3/6">
          <LabelInput name='year' label={'Year: '} />
          <TextInput
            type='number'
            name='year'
            id='year'
            value={movie.year}
            required={true}
            placeholder='2004'
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 w-3/6">
          <LabelInput name='duration' label={'Duration (min): '} />
          <TextInput
            type='number'
            name='duration'
            id='duration'
            value={movie.duration}
            required={true}
            placeholder='113'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <LabelInput name='description' label={'Description: '} />
        <TextAreaInput
          name="description"
          id="description"
          value={movie.description}
          cols="30"
          rows="5"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <LabelInput name='avatar' label={'Movie image: '} />
        <FileInput onChange={handleChange} />
      </div>
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value='Create new movie'
          className="p-2 rounded text-white font-semibold text-sm bg-green-600 cursor-pointer hover:bg-green-900"
        />
      </div>
    </form>
  )
}

export default NewMovieForm;
