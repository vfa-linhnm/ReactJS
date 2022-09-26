import React from 'react'
import '../../Styles/Card.css'
import People from '../../assets/img/people.jpeg'

const Card=({data}) => {        
    return (
        <div>
            <div className='containerCard'>
                <a>
                    <div className='containerCard_image'>
                        <img src={People} />
                    </div>
                    <div className='containerCard_content'>
                        <h3 className='containerCard_content_title'>{data.name}</h3>
                        <div className='containerCard_content_data'>
                            <div className='containerCard_content_data_address'>{data.location}</div>
                            <div className='containerCard_content_data_salary'>{data.salary}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default Card