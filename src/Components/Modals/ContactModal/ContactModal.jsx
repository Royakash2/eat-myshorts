import './ContactModal.css'
const ContactModal = ({ isOpen, isClose,children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={()=>isClose()} className='modal-contact d-flex justify-content-center align-items-center'>
      <div className='contact-bg'>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ContactModal;
