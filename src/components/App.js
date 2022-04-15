import React from 'react'
import useModal from '../hooks/useModal';
// import Diagonal from './Diagonal'
import Modal from './Modal'
import TablaModal from './TablaModal';

const App = () => {

    const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
    const [isOpenChatModal, openChatModal, closeChatModal] = useModal();

    return (
        <>
            <TablaModal />
            <div>

                <button onClick={openLoginModal}>
                    Open Modal
                </button>

                <button onClick={openChatModal}>
                    Open Chat Modal
                </button>

                <Modal
                    isOpen={isOpenLoginModal}
                    closeModal={closeLoginModal}
                    title='Login'
                >

                    <form>
                        <input
                            type="email"
                            placeholder="Correo"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                        />
                    </form>
                </Modal>


                <Modal
                    isOpen={isOpenChatModal}
                    closeModal={closeChatModal}
                    title='Chat'
                >

                    <p>Hola!!</p> <b>- Luis </b>
                    <p>Que hace :v</p> <b>- María </b>
                </Modal>
            </div >

        </>
    )
}

export default App