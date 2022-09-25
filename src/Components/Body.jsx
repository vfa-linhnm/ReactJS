import React from 'react'
import '../Styles/Body.css'
import ModalBody from './ModalBody'
import IconSearch from '../assets/icon/search_icon.png'
import PatternTop from '../assets/img/pattern_bg_top.png'
import PatternBottom from '../assets/img/pattern_bg_bottom.png'
import Pattern1 from '../assets/img/pattern_1.png'
import Pattern2 from '../assets/img/pattern_2.png'
import Pattern3 from '../assets/img/pattern_3.png'
import BodyCountry from './BodyCountry'

const Body=() => {
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
    <div className='bodyContainer'>
      <div className='img' />
      <h2 className='content'>あなたの「トクギ」が、きっとある。</h2>
      <div style={{width:'100%',height:422,backgroundColor:'#ddd'}}>
      <div className='boxSelect'>
        <h2 className='boxSelect_title'>かんたん検索（Quick search）</h2>
        <div className='boxSelect_element'>
          <ModalBody data={array1}/>
          <ModalBody data={array2}/>
          <ModalBody data={array1}/>
        </div>
        <div className='containerBoxSelect_button'>
          <button className='buttonBoxSelect buttonSearch'><img className='icon_search' src={IconSearch} />さがす</button>
          <button className='buttonBoxSelect buttonNavigate'>くわしく検索</button>
        </div>

        <div style={{width: '30%'}}>
          <img className='search__bg_top' src={PatternTop} alt="" />
        </div>
        <div style={{width: '30%'}}>
          <img className='search__bg_bottom' src={PatternBottom} alt="" />
        </div>
      </div>
      <div className='pattern_1'>
          <img src={Pattern1} style={{width:'100%'}} alt/>
      </div>
      <div className='pattern_2'>
          <img src={Pattern2} style={{width:'100%',position:'absolute'}} alt/>
      </div>
      <div className='pattern_3'>
          <img src={Pattern3} style={{width:'100%',bottom:-374,position:'absolute'}} alt/>
      </div> 
      </div>
      <BodyCountry/>
    </div>
  )
}

export default Body