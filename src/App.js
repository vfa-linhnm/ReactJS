
import React from 'react';
import './App.css';

import ModalBody from './Components/ModalBody';
import Header from './Components/Header';
import Body from './Components/Body';
import ModalMenu from './Components/ModalMenu'
function App() {
  const [isShowModal, setIsShowModal]=React.useState(false)

  const _handleOpenModal=() => {
    setIsShowModal(true)
  }

  const _handleCloseModal=() => {
    setIsShowModal(false)
  }
  return (
    <div className="App" style={{marginTop: 10, height: '100vh'}}>
      {!isShowModal? <div>
        <Header _handleOpenModal={_handleOpenModal} />
        <Body />
      </div>
        :
        <ModalMenu _handleCloseModal={_handleCloseModal} />
      }
    </div>
  );
}

export default App;
