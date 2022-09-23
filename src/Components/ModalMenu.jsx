import React from 'react'
import logo from '../assets/img/header_logo.svg';
import '../Styles/ModalMenu.css'
import PatternMiddle from '../assets/img/gnav_top.png'
import PatternBottom from '../assets/img/gnav_bottom.png'

const ModalMenu=({_handleCloseModal}) => {
    return (
        <div className='containerMenu'>
            {/* ----- header modal ------ */}
            <div className="containerMenu_left">
                <div>
                    <a href="./">
                        <img className="containerMenu_left_logo" src={logo} alt="" />
                    </a>
                </div>
                <div className="containerMenu_left_content">"日本で働きたい"に最も応えるメディア</div>
                <div onClick={_handleCloseModal} type='' className='close'></div>
            </div>
            {/* ----- header modal ------ */}

            {/* ----- body modal ------ */}
            <div className='body_containerMenu'>
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

            <div className='containerPattern'>
                <div className='patternMiddle'>
                    <img style={{width: '100%'}} src={PatternMiddle} />
                </div>
                <div className='patternBottom'>
                    <img style={{width: '100%'}} src={PatternBottom} />
                </div>
            </div>

            {/* ----- body modal ------ */}

        </div>
    )
}

export default ModalMenu