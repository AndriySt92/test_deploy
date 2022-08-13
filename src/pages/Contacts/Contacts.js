import React from 'react'
import './contacts.scss'
import { contacts } from '../../assets'

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
      <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Зв'язатися з Нами</h2>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row">
          <div className="col-lg-6 my-4">
            <h4 className="mb-3">Контакти:</h4>
            <p>contact@dzubak.com.ua</p>
            <p>
              <b>+380 (096) 112-112-6</b>
            </p>
            <p>Офіс: м.Городенка вулиця Івана Богуна 2</p>
          </div>
          <div className="col-lg-6 ">
            <div className="contacts_map mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.038500334646!2d25.4987170516155!3d48.66650642204976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473147a0e669fcb7%3A0x64b8eb2cd0a5e9ad!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0JHQvtCz0YPQvdCwLCAyLCDQk9C-0YDQvtC00LXQvdC60LAsINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzgxMDA!5e0!3m2!1sru!2sua!4v1657278870419!5m2!1sru!2sua"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="row">
          <div className="col-sm-12">
            <img className="img-fluid my-4 my-sm-5" src={contacts} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
