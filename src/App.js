
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
    <div className="App">
      {/* {!isShowModal? <div>
        <Header _handleOpenModal={_handleOpenModal}/>
        <Body />
      </div>
        :
        <ModalMenu _handleCloseModal={_handleCloseModal}/>
      } */}
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:750}}>
      <ModalBody/>
      </div>
    </div>
  );
}

export default App;
