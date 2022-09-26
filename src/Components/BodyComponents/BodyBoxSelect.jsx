import React from 'react'
import '../../Styles/BodyBoxSelect.css'
import ModalBody from './ModalBody'
import IconSearch from '../../assets/icon/search_icon.png'
import Pattern1 from '../../assets/img/pattern_1.png'
import Pattern2 from '../../assets/img/pattern_2.png'
import Pattern3 from '../../assets/img/pattern_3.png'
import PatternTop from '../../assets/img/pattern_bg_top.png'
import PatternBottom from '../../assets/img/pattern_bg_bottom.png'
const BodyBoxSelect=() => {
  const array1={
    title: '働いている方の国籍', service:
      [
        {id: 1, nameService: 'ベトナム'},
        {id: 1, nameService: 'インドネシア'},
        {id: 1, nameService: 'フィリピン'},
        {id: 1, nameService: '中国'},
        {id: 1, nameService: 'タイ'},
        {id: 1, nameService: 'ミャンマー'},
        {id: 1, nameService: 'カンボジア'},
        {id: 1, nameService: 'その他'},
      ]
  }
  const array2={
    title: 'manh linh', service:
      [
        {id: 1, nameService: 'ビルクリーニング業'},
        {id: 1, nameService: '電気・電子情報関連産業'},
        {id: 1, nameService: '飲食料品製造業'},
        {id: 1, nameService: '広島・中国／四国'},
        {id: 1, nameService: '福岡・九州／沖縄'},
        {id: 1, nameService: 'nguygdfgdfgdfgen'},
        {id: 1, nameService: 'nguygdfgdfgdfgdfgen'},
      ]
  }
  const array3={
    title: 'manh linh', service:
      [
        {id: 1, nameService: 'nguyen'},
        {id: 1, nameService: 'nguyen'},
        {id: 1, nameService: 'nguyen'},
        {id: 1, nameService: 'nguyen'},
        {id: 1, nameService: 'nguyen'},
        {id: 1, nameService: 'nguyen'},
        {id: 1, nameService: 'nguyen'},
      ]
  }
  return (
    <section className='section_boxSelect'>
      <div className='boxSelect'>
        <h2 className='boxSelect_title'>かんたん検索（Quick search）</h2>
        <div className='boxSelect_element'>
          <ModalBody data={array1} />
          <ModalBody data={array2} />
          <ModalBody data={array1} />
        </div>
        <div className='containerBoxSelect_button'>
          <button className='buttonBoxSelect buttonSearch'><img className='icon_search' src={IconSearch} />さがす</button>
          <button className='buttonBoxSelect buttonNavigate'>くわしく検索</button>
        </div>
        <div className='pattern__bg--top'>
          <img style={{width:'100%',borderTopLeftRadius:26}} src={PatternTop} alt="" />
        </div>
        <div className='pattern__bg--bottom'>
          <img style={{width:'100%',borderBottomRightRadius:26}} src={PatternBottom} alt="" />
        </div>
      </div>
      <div className='pattern_1'>
        <img style={{width:'100%'}} src={Pattern1} alt="" />
      </div>
      <div className='pattern_2'>
      <img style={{width:'100%'}} src={Pattern2} alt="" />
      </div>
      <div className='pattern_3'>
      <img style={{width:'100%'}} src={Pattern3} alt="" />
      </div>
    </section>
  )
}

export default BodyBoxSelect