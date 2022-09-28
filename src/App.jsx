
import React from 'react';
import './App.css';
import Header from './Components/Header'
import ModalMenu from './Components/ModalMenu'
import Body from './Components/BodyComponents/Body';
import Footer from './Components/FooterComponents/Footer';
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
      {!isShowModal? <div>
        <Header _handleOpenModal={_handleOpenModal} />
        <Body/>
        <Footer/>
      </div>
        :
          <ModalMenu _handleCloseModal={_handleCloseModal} />
      }

    </div>
  );
}

export default App;
