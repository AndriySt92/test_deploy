import React from 'react'
import './plasterWorks.scss'
import {
  workOrder,
  materials,
  plaster1,
  plaster2,
  plaster3,
  plaster4,
  plaster5,
  plaster6,
  plaster7,
  plaster8,
} from '../../assets'
import { Table } from '../../components/Table/Table'
import { AccordionFaq } from '../../components/AccordionFaq/AccordionFaq'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Form } from '../../components/Form/Form'
import { Gallery } from '../../components/Gallery/Gallery'

const plasterWorksList = [
  {
    title: 'Вид машиною штукатурки',
    works: [
      'Машинна штукатурка стін(робота)',
      'Машинна штукатурка стелі(робота)',
      'Гіпсова машинна штукатурка(робота)',
      'Машинна штукатурка укосів(робота)',
    ],
  },
]

const plasterOrderType = {
  mainTitle: 'Типи замовлень штукатурних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'замовлення від 150 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
    {
      title: 'Звичайне',
      subtitle: 'замовлення від 400 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'замовлення від 900 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
  ],
}

const plasterFaq = [
  {
    id: 'One',
    question: 'Що необхідно для якісного виконання штукатурних робіт?',
    answer:
      'Щоб робота була виконана якісно, потрібна наявність певного набору інструментів, правильно підготовлені штукатурні розчини та дотримання техніки їх нанесення та обробки.',
  },
  {
    id: 'Two',
    question: 'Які існують склади розчинів?',
    answer:
      'Як правило, для внутрішньої штукатурки застосовується гіпсові і вапняні розчини. Цементні і теплоізоляційні розчини більше підходять для зовнішньої обробки, але в деяких випадках використовуються і для внутрішньої обробки.',
  },
  {
    id: 'Three',
    question: 'Коли застосовуються той чи інший розчин?',
    answer:
      'Вапняні та гіпсові розчини застосовуються, як правило, в приміщеннях з бетонними або цегляними стінами та перекриттями, де вологість повітря становить не більше 60%. Цементні і цементно-вапняні розчини служать для штукатурення приміщень з підвищеною вологістю, таких як ванні кімнати, підвальні приміщення і гаражі.',
  },
  {
    id: 'Four',
    question: 'Коли можна починати штукатурні роботи?',
    answer:
      'Їх починають після того як влаштовані перекриття, встановлені перегородки, коробки вікон і дверей, зведені каміни і печі в сухому приміщень при температурі повітря не нижче +5.',
  },
  {
    id: 'Fifth',
    question: 'Скільки потрібно часу для повного висихання штукатурки?',
    answer:
      'Залежно від товщини штукатурного шару, погодних умов і провітрюваності приміщення, в середньому від 5 до 20 днів.',
  },
  {
    id: 'Six',
    question: 'Чи можна виконувати штукатурку взимку?',
    answer:
      'Можна, в добре опалювальному приміщенні або за відсутність такого встановити повітряні обігрівачі, теплові гармати та підтримувати температуру від +5 до +15 градусів.',
  },
]

const plasterGallery = [
  plaster1,
  plaster2,
  plaster3,
  plaster4,
  plaster5,
  plaster6,
  plaster7,
  plaster8,
]

export const PlasterWorks = () => {
  return (
    <div className="plaster_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Штукатурні роботи</h2>
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
          title={plasterOrderType.mainTitle}
          content={plasterOrderType.ordersTypeList}
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
        <Gallery images={plasterGallery} />
        <AccordionFaq faq={plasterFaq} />
        <section className="materials">
          <div className="container">
            <h1 className="page_title">Матеріали</h1>
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
              {plasterWorksList.map((item) => (
                <Table list={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
