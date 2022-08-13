import React, { useState } from 'react'
import './form.scss'

export const Form = ({ title, subtitle, withTextarea, textareaPlaceholder }) => {
  const [formData, setFormData] = useState({ name: '', number: '', message: '' })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="form text-center">
      <h5 className="mb-2">{title}</h5>
      <span className="mb-4">{subtitle}</span>
      <div className="input-group input-group-lg mt-3 mb-2">
        <input
          value={formData.name}
          onChange={changeHandler}
          name="name"
          type="text"
          className="form-control input-group-lg"
          placeholder="Ваше ім'я"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div className="input-group input-group-lg mb-4">
        <input
          value={formData.number}
          onChange={changeHandler}
          name="number"
          className="form-control input-group-lg"
          placeholder="Ваш номер телефону"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      {withTextarea && (
        <div className="mb-3">
          <textarea
            value={formData.message}
            onChange={changeHandler}
            name="message"
            className="form-control input-group-lg"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder={textareaPlaceholder}></textarea>
        </div>
      )}
      <button onClick={handleSubmit} type="submit" className="btn btn-lg w-100" id="inputGroup-sizing-lg">
        Відправити
      </button>
    </form>
  )
}
