import React from 'react'
import CardSlider from './CardSlider'
import '../../Styles/BodyJobSlider.css'

const BodyJobSilder = () => {
  return (
        <section className='jobSlider'>
            <h2 className='jobSlider_heading'>新着のお仕事</h2>
            <div className='jobSlider_inner'>
                <CardSlider/>
            </div>
        </section>
  )
}

export default BodyJobSilder