import React from 'react'
import '../Styles/Body.css'
import ModalBody from './ModalBody'
import IconSearch from '../assets/icon/search_icon.png'
import PatternTop from '../assets/img/pattern_bg_top.png'
import PatternBottom from '../assets/img/pattern_bg_bottom.png'

const Body=() => {
  return (
    <div className='bodyContainer'>
      <div className='img' />
      <h2 className='content'>あなたの「トクギ」が、きっとある。</h2>
      <div className='boxSelect'>
        <h2 className='boxSelect_title'>かんたん検索（Quick search）</h2>
        <div className='boxSelect_element'>
          <ModalBody />
          <ModalBody />
          <ModalBody />
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
    </div>
  )
}

export default Body