import React from 'react'
import '../../Styles/Interview.css'
import IconHeading from '../../assets/img/icon_interview_heading.png'
import IconFooter from '../../assets/img/icon_interview_footer.png'
import IconSearch from '../../assets/icon/search_icon.png'
import Pattern1 from '../../assets/img/pattern_4.png'
import Pattern2 from '../../assets/img/pattern_5.png' 

const Interview = () => {
  return (
    <section className='interview'>
      <div className='interview_content'>
        <div className='interview_inner'>
          <div className='interview_inner_icon'>
            <img src={IconHeading}/>
          </div>
          <div className='interview_inner_block'>
            <h2 >職場インタビュー掲載求人特集</h2>
            <p>先輩のインタビューを見てみよう！</p>
          </div>
        </div>
        <div className='interview_btn'>
          <div className='interview_btn_item'>
            <a>
              <img src={IconSearch}/>さがす
            </a>
          </div>
        </div>
        <div className='interview__visicomi'>
          <img style={{width:'100%'}} src={IconFooter}/>
        </div>
      </div>
      <div className='pattern_1_interview'>
        <img style={{width:'100%'}} src={Pattern1} alt="" />
      </div>
      <div className='pattern_2_interview'>
      <img style={{width:'100%'}} src={Pattern2} alt="" />
      </div>
    </section>
  )
}

export default Interview