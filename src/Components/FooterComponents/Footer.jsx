import React from 'react'
import '../../Styles/Footer.css'
import HeaderLogo from '../../assets/img/header_logo.svg'
import IconFB from '../../assets/img/sns_facebook.png'
import IconMess from '../../assets/img/sns_facebook-messenger.png'
import IconYoutube from '../../assets/img/sns_youtube.png'

const Footer=() => {
    return (
        <footer className='footer'>
            <div className='footer__outer'>
                <div className='footer__inner--top'>
                    <div className='footer__site'>
                        <div className='footer__logo'>
                            <a>
                                <img width='100%' src={HeaderLogo} alt="" />
                            </a>
                        </div>
                        <div className='footer__title'>“日本で働きたい”に最も応えるメディア</div>
                    </div>
                    <div className='footer__block'>
                        <ul className='footer__nav'>
                            <div className='footer__nav__tem'>
                                <a href="">くわしく検索</a>
                            </div>
                            <div className='footer__nav__tem'>
                                <a href="">このサイトの使い方</a>
                            </div>
                        </ul>
                        <div className='footer__sns'>
                            <div className='footer__sns__item'>
                                <a href="">
                                    <img src={IconFB} alt="" />
                                </a>
                            </div>
                            <div className='footer__sns__item'>
                                <a href="">
                                    <img src={IconMess} alt="" />
                                </a>
                            </div>
                            <div className='footer__sns__item'>
                                <a href="">
                                    <img src={IconYoutube} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__inner--bottom'>
                    <div className='footer__address'>東京都港区浜松町2-4-1<br/>世界貿易センタービルディング南館16F</div>
                    <div className='footer__navSub'>
                        <div className='footer__navSub__item'>
                            <a href="">運営会社情報</a>
                        </div>
                        <div className='footer__navSub__item'>
                            <a href="">プライバシーポリシー</a>
                        </div>
                        <div className='footer__navSub__item'>
                            <a href="">利用規約</a>
                        </div>

                    </div>
                </div>
                <div className='footer__copyright'>
			© CAMTECH Inc. All Rights Reserved.
		</div>
            </div>
        </footer>
    )
}

export default Footer