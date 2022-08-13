import React from 'react'
import './workStepsSection.scss'
import { trophy, phone, consultation } from '../../assets'

export const WorkStepsSection = () => {
  return (
    <section className="work_steps text-center">
      <div className="row">
        <div className="col-12 text-center">
          <h3>Лише 3 кроки до здійснення плану</h3>
        </div>
      </div>
      <div className="row px-5 w-lg-20">
        <div className="col-md-4 work_steps_item">
          <div>
            <img src={phone} alt="" />
          </div>
          <p>Ваша заявка або дзвінок</p>
        </div>
        <div className="col-md-4  work_steps_item">
          <div>
            <img src={consultation} alt="" />
          </div>
          <p>Консультація спеціаліста</p>
        </div>
        <div className="col-md-4 work_steps_item">
          <div>
            <img src={trophy} alt="" />
          </div>
          <p>Виконуємо роботу</p>
        </div>
      </div>
    </section>
  )
}
