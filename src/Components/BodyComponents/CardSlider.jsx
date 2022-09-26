import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';

const CardSlider=() => {

    const data=[
        {id: 1, name: 'nguyen manh linh', location: 'hcm', salary: 1000000},
        {id: 1, name: 'nguyen manh long', location: 'hcm', salary: 1000000},
        {id: 1, name: 'nguyen manh l', location: 'hcm', salary: 1000000},
        {id: 1, name: 'nguyen manh ', location: 'hcm', salary: 1000000},
        {id: 1, name: 'nguyen  linh', location: 'hcm', salary: 1000000},
    ]


    return (
        <section>
            <Carousel
                responsive={responsive}
                infinite={true}
            >
                {data.map((item, index) =>
                    <div key={item.id}>
                        <Card data={item} />
                    </div>
                )}
            </Carousel>
        </section>
    )
}

export default CardSlider


const responsive={
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
