import React from 'react'
import './services.scss'
import { Link } from 'react-router-dom'
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
  services7,
  services8,
} from '../../assets'

const servicesItems = [
  { imgSrc: services3, title: 'Ремонтні роботи', linkTo: '/repairWorks' },
  { imgSrc: services2, title: 'Штукатурні роботи', linkTo: '/plasterWorks' },
  { imgSrc: services5, title: 'Фасадні роботи', linkTo: '/facadeWorks' },
  { imgSrc: services7, title: 'Монолітні роботи', linkTo: '/concreteWorks' },
  { imgSrc: services1, title: 'Декоративна штукатурка', linkTo: '/decorativePlaster' },
  { imgSrc: services4, title: 'Покрівельні роботи', linkTo: '/roofingWorks' },
  { imgSrc: services8, title: 'Укладання бруківки', linkTo: '/pavingWorks' },
  { imgSrc: services6, title: 'Розробка проектів', linkTo: '/projectDevelopment' },
]

export const Services = () => {
  return (
    <div className="services mb-5">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Будівельні послуги</h2>
            </div>
          </div>
        </div>
        <section className="servises_list my-5">
          <div className="row">
            <div className="col-12">
              {servicesItems.map((item) => {
                return (
                  <Link to={item.linkTo} key={item.title} >
                    <div className="servises_item">
                      <div className="servises_item_img">
                        <img src={item.imgSrc} />
                      </div>
                      <div className="servises_item_title">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
