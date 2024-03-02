import './Modal.css';
import SignupForm from './Signup';

const Modal = (props) => {

  const closeModal = (e) => {
    if (e.target.className === 'modal-overlay')
      props.closeModal();
  };

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <SignupForm closeModal={props.closeModal} />
    </>
  );
}

export default Modal;