import { useState } from "react";
import LabelInput from "../common/LabelInput";
import TextInput from "../common/TextInput";
import FileInput from "../common/FileInput";
import TextAreaInput from "../common/TextAreaInput";

const MovieForm = ({movieParams, textBtn, handleFormSubmit}) => {
  const [movie, setMovie] = useState({
    name: movieParams?.name,
    year: movieParams?.year,
    duration: movieParams?.duration,
    description: movieParams?.description,
    avatar: undefined
  });

  const handleChange = (value, name) => {
    setMovie(prevState => (
      {...prevState, [name]: value}
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(movie);
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          value={textBtn}
          className="p-2 rounded text-white font-semibold text-sm bg-green-600 cursor-pointer hover:bg-green-900"
        />
      </div>
    </form>
  )
}

export default MovieForm;
