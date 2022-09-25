
import React from 'react';
import './App.css';

import ModalBody from './Components/ModalBody';
import Header from './Components/Header';
import Body from './Components/Body';
import ModalMenu from './Components/ModalMenu'
import BodyCountry from './Components/BodyCountry';
import Card from './Components/Card';
import CardSlider from './Components/CardSlider';
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
        <Header _handleOpenModal={_handleOpenModal} />
        <Body />
      </div>
        :
        <div className='modalMenu'>
          <ModalMenu _handleCloseModal={_handleCloseModal} />
        </div>
      } */}
  <CardSlider/>
      {/* <BodyCountry/> */}
    </div>
  );
}

export default App;
