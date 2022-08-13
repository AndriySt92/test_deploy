import React from 'react'
import './autoplaySlider.scss'
import Slider from 'react-slick'
import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  homeSlider4,
  homeSlider5,
  homeSlider6,
} from '../../assets'

const sliderItems = [
  { imgSrc: homeSlider1, title: 'Керамоблок 2НФ' },
  { imgSrc: homeSlider2, title: 'Керамзітні блоки' },
  { imgSrc: homeSlider3, title: 'Карказ' },
  { imgSrc: homeSlider4, title: 'Цегла' },
  { imgSrc: homeSlider5, title: 'Газоблок' },
  { imgSrc: homeSlider6, title: 'Опалубка' },
]

export const AutoplaySlider = ({ slide }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="autoplaySlider">
      <h3 className="mb-4">Матеріали з яких ми будуємо:</h3>
      <Slider {...settings}>
        {sliderItems.map((slide) => (
          <div key={slide.title} className="slick_slider_item">
            <img src={slide.imgSrc} alt="" />
            <h6>{slide.title}</h6>
          </div>
        ))}
      </Slider>
    </div>
  )
}
