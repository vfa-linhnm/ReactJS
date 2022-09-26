import React from 'react'
import BodyBoxSelect from '../BodyComponents/BodyBoxSelect'
import BodyCountry from '../BodyComponents/BodyCountry'
import BodyImage from '../BodyComponents/BodyImage'
import Industry from '../BodyComponents/Industry'
import Interview from '../BodyComponents/Interview'
import Area from './Area'
import BodyJobSilder from './BodyJobSilder'
import CardSlider from './CardSlider'
import EntryFooter from './EntryFooter'

const Body = () => {
  return (
    <div>
        <BodyImage/>
        <BodyBoxSelect/>
        <BodyCountry/>
        <Interview/>
        <Industry/>
        <Area/>
        <BodyJobSilder/>
        <EntryFooter />
    </div>
  )
}

export default Body