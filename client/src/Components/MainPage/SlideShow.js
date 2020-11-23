import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class SlideShow extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src="./Slides/slide1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src="./Slides/slide2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src="./Slides/slide3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}
