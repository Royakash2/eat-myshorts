import './FaqModal.css'
const FaqModal = ({ isVisible, onClose,children }) => {
  if (!isVisible) return null;

  return (
    <div onClick={()=>onClose()} className='modal-container d-flex justify-content-center pt-5 pt-sm-0'>
      <div className='modal-bg'>
        <div className='modal-content px-4'>{children}</div>
      </div>
    </div>
  );
};

export default FaqModal;
