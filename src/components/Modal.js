import React from 'react'
import Diagonal from './Diagonal';
import './Modal.css'


const Modal = ({ isOpen, closeModal, title, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={`modal ${isOpen && 'modal-open'}`} >
                <div className='modal__dialog' onClick={handleModalDialogClick}>
                    <div className='modal__dialog1'>
                        <button onClick={closeModal}>
                            Close Modal
                        </button>
                        <h1>{title}</h1>
                    </div>
                    <Diagonal />
                    <div className='modal__dialog2'>
                        {children}
                    </div>


                </div>


            </div>
        </>

    )
}

export default Modal