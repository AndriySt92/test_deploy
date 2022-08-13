import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <div className="footer_call text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Зв'язатися з менеджером</h2>
              <h4>
                Телефонуйте за номером телефону <b>+38 (096) 112 112 6</b>{' '}
              </h4>
              <h2>
                Приймаємо дзвінки <b>з 9:00 до 17:00</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_menu p-3 bg-dark text-light">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="row">
              <div className="col-lg-3 mb-4  text-center text-lg-start">
                <span className="mt-1">R&RGroup - будівельні послуги</span>
              </div>
              <div className="col-lg-9 mb-4 d-flex justify-content-md-center justify-content-lg-end">
                <ul className="nav footer_nav">
                  <li>
                    <Link to="/">Будинки під ключ</Link>
                  </li>
                  <li>
                    <Link to="/services">Будівельні послуги</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Портфоліо</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакти</Link>
                  </li>
                  <li>
                    <Link to="/tips">Контакти</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-4 text-center text-lg-start">
                <p className="mb-4">© Усі права захищено 2021&nbsp;</p>
                <p>
                  <a className="footer_menu_number" href="tel:+380961121126">
                    +38(096) 112-112-6
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
