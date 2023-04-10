import React from "react";
import Modal from "react-modal";
import "./style.scss"
Modal.setAppElement("#root");

function MyModal(props) {
    const { isOpen, onClose, children, id } = props;

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div className="modalVideo">
                {children}
                {/* <video src="https://youtu.be/OH3sJr6OWI4" width={1000} height={600}></video> */}
              
            </div>
        </Modal>
    );
}

export default MyModal;
