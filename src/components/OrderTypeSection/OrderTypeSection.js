import { React } from 'react'
import './orderTypeSection.scss'

export const OrderTypeSection = ({ title, content }) => {
  return (
    <section className="orderType">
      <div className="row">
        <div className="col-12 text-md-start text-lg-center mb-3">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="row">
        {content.map((order, index) => {
          return (
            <div key={index} className="col-lg-4 col-md-12">
              {order.imgSrc && <img src={order.imgSrc} alt="" />}
              <div className="order_type_content">
                {order.isTrend && (
                  <div className="popular-label">
                    <div className="tag">
                      <span className="tag-text">тренд</span>
                    </div>
                  </div>
                )}
                <h3>{order.title}</h3>
                <p>{order.subtitle}</p>
                <ul>
                  {order.works.map((work) => {
                    return <li key={work}>{work}</li>
                  })}
                </ul>
                <div className="order_btn" data-bs-target="#exampleModal" data-bs-toggle="modal">
                  <h6>Замовити</h6>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
