import React from 'react'
import { Menu } from '../Menu/Menu'
import { Modal } from '../Modal/Modal'
import './header.scss'

export const Header = () => {
  return (
    <>
      <div className="header fixed-top">
        <div className="header_top p-0 p-md-1 bg-dark text-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 d-none d-md-block text-start">
                <p>Будівельні послуги, будинки під ключ</p>
              </div>
              <div className="col-sm-12 col-md-3 text-md-end text-center">
                <p>+38 (096) 112 112 6</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header_menu">
          <Menu />
        </div>
      </div>
      <Modal />
    </>
  )
}
