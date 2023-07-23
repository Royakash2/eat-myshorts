import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";
import { useState } from "react";
import FaqModal from "../Modals/FaqModal/FaqModal";
import ContactModal from "../Modals/ContactModal/ContactModal";
import FaqContent from "../Modals/FaqModal/FaqContent";
import ContactContent from "../Modals/ContactModal/ContactContent";
const Menu = () => {
  const [faqModal, setFaqModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  return (
    <>
      <Navbar className="w-25 mx-lg-auto nav-container" fixed="bottom">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          
            <div onClick={() => setFaqModal(true)}><span className="nav-link">faq</span></div>
            <FaqModal isVisible={faqModal} onClose={() => setFaqModal(false)}>
              <FaqContent/>
            </FaqModal>
         
          <div onClick={() => setContactModal(true)}>
          <span className="nav-link">contact</span>
          </div>
          <ContactModal isOpen={contactModal} isClose={() => setContactModal(false)}>
            <ContactContent/>
          </ContactModal>
        </Nav>
      </Navbar>
    </>
  );
};

export default Menu;
