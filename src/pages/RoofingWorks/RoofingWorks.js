import React from 'react'
import './roofingWorks.scss'
import {
  workOrder,
  materials,
  roofing1,
  roofing2,
  roofing3,
  roofing4,
  roofing5,
  roofing6,
  roofing7,
  roofing8,
  roofing9,
  roofing10,
  roofing11,
  roofing12,
} from '../../assets'
import { Table } from '../../components/Table/Table'
import { AccordionFaq } from '../../components/AccordionFaq/AccordionFaq'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Form } from '../../components/Form/Form'
import { Gallery } from '../../components/Gallery/Gallery'

const roofingWorksList = [
  {
    title: 'Монтаж покрівлі, робота',
    works: ['Металочерепиця', 'Забудова', 'Kомпозитна', "М'яка покрівля, (катепал)"],
  },
]

const roofingWorksOrderType = {
  mainTitle: 'Типи замовлень штукатурних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'замовлення від 100 м2',
      works: ['Консультація', 'Виїзд Спеціаліста', 'Утеплення', 'Гідроізоляція', 'Монтаж Покрівлі'],
      isTrend: false,
    },
    {
      title: 'Звичайне',
      subtitle: 'замовлення від 190 м2',
      works: ['Консультація', 'Виїзд Спеціаліста', 'Утеплення', 'Гідроізоляція', 'Монтаж Покрівлі'],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'замовлення від 450 м2',
      works: ['Консультація', 'Виїзд Спеціаліста', 'Утеплення', 'Гідроізоляція', 'Монтаж Покрівлі'],
      isTrend: false,
    },
  ],
}

const roofingWorksFaq = [
  {
    id: 'One',
    question: 'В яку пору року краще всього почати установлення покрівлі?',
    answer:
      'Більшість монтажних робіт виконується влітку, відповідно, на літо – це час роботи із завантаження проектів. Це може призвести до високої складності за погодженням вашого графіка з графіком підрядника з монтажу. Однак не існує жодних технічних обмежень на встановлення металевої покрівлі в будь-яку іншу пору року. Тому ви можете запланувати встановлення покрівлі на потрібний для вас час.',
  },
  {
    id: 'Two',
    question: 'Чи необхідно використовувати шар гідроізоляції?',
    answer: 'Компанія RRGroup завжди рекомендує використовувати шар гідроізоляції.',
  },
  {
    id: 'Three',
    question: 'Скільки часу зазвичай займає установка покрівлі?',
    answer:
      'Установка даху зазвичай займає від двох днів до декількох тижнів, в залежності від масштабу проекту.',
  },
]

const roofimgWorksImg = [
  roofing1,
  roofing2,
  roofing3,
  roofing4,
  roofing5,
  roofing6,
  roofing7,
  roofing8,
  roofing9,
  roofing10,
  roofing11,
  roofing12,
]

export const RoofingWorks = () => {
  return (
    <div className="roofing_works">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Покрівельні роботи</h2>
            </div>
          </div>
        </div>
        <section className="consultation">
          <div className="row">
            <div className="col-md-6">
              <div className="consultation_slider"></div>
            </div>
            <div className="col-md-6 px-5">
              <Form title={'ПО ТЕЛЕФОНУ ШВИДШЕ!'} subtitle={'ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ СПЕЦІАЛІСТА'} />
            </div>
          </div>
        </section>
        <OrderTypeSection
          title={roofingWorksOrderType.mainTitle}
          content={roofingWorksOrderType.ordersTypeList}
        />
        <section className="work_order">
          <div className="container">
            <h1 className="page_title">Порядок роботи</h1>
            <div className="row">
              <div className="col-sm-12">
                <img src={workOrder} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </section>
        <Gallery images={roofimgWorksImg} />
        <AccordionFaq faq={roofingWorksFaq} />
        <section className="materials">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Матеріали:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src={materials} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </section>
        <section className="listWorks">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12">
                <h3>Список робіт які ми виконуємо:</h3>
              </div>
            </div>
            <div className="row">
              {roofingWorksList.map((item) => (
                <Table list={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
