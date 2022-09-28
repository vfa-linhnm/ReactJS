import React from 'react';
import '../Styles/Header.css';
import logo from '../assets/img/header_logo.svg';
import icon from '../assets/icon/header_language_icon.png';
import IconRegister from '../assets/icon/btn_icon_regist.png';
import IconLogin from '../assets/icon/btn_icon_login.png';

function Header({_handleOpenModal}) {

  const [isActive,setIsActive] = React.useState(true)

  console.log(isActive);
  
  function _click() {
    console.log(isActive);
    window.ReactNativeWebView.postMessage(isActive)
  }
  return (
    <div className="container">
      <div className="container_left">
        <div>
          <a href="./">
            <img className="container_left_logo" src={logo} alt="" />
          </a>
        </div>
        <div className="container_left_content">"日本で働きたい"に最も応えるメディア</div>
      </div>
      <div className="container_right">
        <div className="container_right_content">
          <div>
            <a className='container_right_content_element' href="./">くわしく検索
            </a>
          </div>
          <div>
            <a className='container_right_content_element' href="./">このサイトの使い方</a>
          </div>
          <div>
            <a style={{marginRight: 0}} className='container_right_content_element' href="./">お問い合わせ</a>
          </div>

        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{display: 'flex'}}>
            <button type="button" className="button" style={{backgroundColor: '#1bb3e6'}}>
              {' '}
              <img src={IconLogin} alt="" />
              ログイン
            </button>
            <button  type="button" className="button" style={{backgroundColor: '#f07d00'}}>
              {' '}
              <img src={IconRegister} alt="" />
              会員登録
            </button>
            <label class="switch" onChange={() => setIsActive(!isActive)}>
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <button type="submit" style={{padding:8,borderRadius:20,marginLeft:2}} onClick={() => _click()}>save</button>
          </div>
          <div>
            <img className="icon_language" src={icon} alt="" />
            <select className="select">
              <option value="A">English</option>
              <option value="B">Vietnamese</option>
              <option value="C">Japanese</option>
            </select>
          </div>
          <div className="select_language">
            Select Language
          </div>

          <div onClick={_handleOpenModal} className="gnav_open">
            <div className='element' />
            <div className='element' />
            <div className='element' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
