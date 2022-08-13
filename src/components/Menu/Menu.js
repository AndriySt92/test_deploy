import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './menu.scss'
import { logo, phoneGif } from '../../assets'
import { Modal } from '../Modal/Modal'

const servicesItems = [
  { title: 'Ремонтні роботи', linkTo: '/repairWorks' },
  { title: 'Штукатурні роботи', linkTo: '/plasterWorks' },
  { title: 'Фасадні роботи', linkTo: '/facadeWorks' },
  { title: 'Монолітні роботи', linkTo: '/concreteWorks' },
  { title: 'Декоративна штукатурка', linkTo: '/decorativePlaster' },
  { title: 'Покрівельні роботи', linkTo: '/roofingWorks' },
  { title: 'Укладання бруківки', linkTo: '/pavingWorks' },
  { title: 'Розробка проектів', linkTo: '/projectDevelopment' },
]

export const Menu = () => {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </NavLink>
          <div className="callback_button d-block d-lg-none" data-bs-target="#exampleModal" data-bs-toggle="modal">
              <img src={phoneGif} alt="" />
              <span className="hoverSpan">Замовити дзвінок</span>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Будинки під ключ
                </NavLink>
              </li>
              <li className="nav-item services_item">
                <NavLink to="/services" className="nav-link dropdown-toggle">
                  Ремонтні роботи
                </NavLink>
                <ul className="dropdown_menu">
                  {servicesItems.map(({linkTo, title}, index) => (
                    <li key={title} className={`dropdown_item dropdown_item_${index+1}`}>
                      <Link to={linkTo}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">
                  Портфоліо
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tips" className="nav-link">
                  Поради
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Контакти
                </NavLink>
              </li>
            </ul>
            <div className="callback_button ms-auto d-lg-block d-none" data-bs-target="#exampleModal" data-bs-toggle="modal">
              <img src={phoneGif} alt="" />
              <span className="hoverSpan">Замовити дзвінок</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
