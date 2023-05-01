import { useState } from "react";
import { modalActions } from "../../store/modal-slice";
import { useDispatch } from "react-redux";

import { deleteMovie } from "../../services/http-movies";

import CustomButton from "../common/CustomButton";
import ModalDescription from "./ModalDescription";
import ModalTitle from "./ModalTitle";
import { useNavigate, useParams } from "react-router-dom";

const Modal = ({modal}) => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    dispatch(modalActions.closeAndResetModal());
  }

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await deleteMovie(movieId);
      dispatch(modalActions.closeAndResetModal());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  if(!modal.showModal) return;

  return(
    <section className="fixed z-10 h-screen w-screen bg-black/80 flex items-center justify-center">
      <div className="w-5/6 flex flex-col rounded-lg bg-white">
        <ModalTitle title={modal?.title} />
        <ModalDescription description={modal?.description} />
        {
          isLoading
          ? <div className="font-semibold text-gray-600 mx-10 mb-5 gap-5 text-end">Please wait...</div>
          : <div className="flex items-center justify-end mx-10 mb-5 gap-5">
              <CustomButton
                label='Cancel'
                disabled={false}
                color='sky'
                onPress={handleCancel}
              />
              <CustomButton
                label='Delete movie'
                disabled={false}
                color='red'
                onPress={handleClick}
              />
            </div>
        }
      </div>
    </section>
  )
}

export default Modal;
