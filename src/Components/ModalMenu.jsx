import React from 'react'
import logo from '../assets/img/header_logo.svg';
import '../Styles/ModalMenu.css'

const ModalMenu=({_handleCloseModal}) => {
    return (
        <div className='container'>
            {/* ----- header modal ------ */}
            <div className="container_left">
                <div>
                    <a href="./">
                        <img className="container_left_logo" src={logo} alt="" />
                    </a>
                </div>
                <div className="container_left_content">"日本で働きたい"に最も応えるメディア</div>
                <div onClick={_handleCloseModal} type='' className='close_icon'>x</div>
            </div>
            {/* ----- header modal ------ */}

            {/* ----- body modal ------ */}
            <div className='body_container'>
                <div className='content_modal'>
                    <div className='content_element'>
                        <div style={{textAlign: 'left'}}>かんたん検索</div>
                            <span>></span>
                    </div>
                    <div className='content_element'>
                        <div>働いてる方の国籍からさがす</div>
                        <span>></span>
                    </div>
                    <div className='content_element'>
                        <div>業種からさがす</div>
                        <span>></span>
                    </div>
                    <div style={{borderBottom: 'none'}} className='content_element'>
                        <div>勤務地からさがす</div>
                        <span>></span>
                    </div>
                </div>
            </div>

            <div style={{width: '100%', textAlign: 'center'}}>
                <div style={{padding: 10, fontSize: '120%'}}><a>くわしく検索</a></div>
                <div style={{padding: 20, fontSize: '120%'}}><a>お問い合わせ</a></div>
            </div>



            {/* ----- body modal ------ */}

        </div>
    )
}

export default ModalMenu