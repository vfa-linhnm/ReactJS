import React from 'react'
import '../../Styles/EntryFooter.css'
import Pattern8 from '../../assets/img/pattern_8.png'
import Pattern9 from '../../assets/img/pattern_9.png'
import Pattern10 from '../../assets/img/pattern_10.png'
const EntryFooter = () => {
  return (
    <section className='entryFooter'>
      <div className='entryFooter_contents'>
        <div className='entryFooter_btn'>
          <a>求人を出したい企業様はこちら</a>
        </div>
      </div>
      <div className='pattern_8'>
        <img style={{width:'100%'}} src={Pattern8} alt="" />
      </div>
      <div className='pattern_9'>
        <img style={{width:'100%'}} src={Pattern9} alt="" />
      </div>
      <div className='pattern_10'>
        <img style={{width:'100%'}} src={Pattern10} alt="" />
      </div>
    </section>
  )
}

export default EntryFooter