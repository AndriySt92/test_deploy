import React from 'react'
import './accordion.scss'

export const AccordionFaq = ({ faq }) => {
  return (
    <section className="accordion_faq pt-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h3>Відповіді на популярні питання від клієнтів:</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="accordion" id="accordionExample">
            {faq.map(({ id, question, answer }) => {
              return (
                <div className="accordion-item" key={id}>
                  <h2 className="accordion-header" id={`heading${id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded="true"
                      aria-controls={`collapse${id}`}>
                      {question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${id}`}
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">{answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
