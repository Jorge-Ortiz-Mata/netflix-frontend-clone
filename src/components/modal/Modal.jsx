import { modalActions } from "../../store/modal-slice";
import { useDispatch } from "react-redux";

import CustomButton from "../common/CustomButton";
import ModalDescription from "./ModalDescription";
import ModalTitle from "./ModalTitle";

const Modal = ({modal, handlePress}) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(modalActions.closeAndResetModal());
  }

  const handleClick = () => {
    handlePress();
  }

  if(!modal.showModal) return;

  return(
    <section className="fixed z-10 h-screen w-screen bg-black/80 flex items-center justify-center">
      <div className="w-5/6 flex flex-col rounded-lg bg-white">
        <ModalTitle title={modal?.title} />
        <ModalDescription description={modal?.description} />
        <div className="flex items-center justify-end mx-10 mb-5 gap-5">
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
      </div>
    </section>
  )
}

export default Modal;
