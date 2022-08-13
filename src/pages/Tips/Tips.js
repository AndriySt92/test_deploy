import React from 'react'
import './tips.scss'
import { tipTitle1, tipTitle2, tipTitle3, tipTitle4, tipTitle5 } from '../../assets'
import { useNavigate } from 'react-router-dom';

const tips = [
  {
    id: 1,
    title: 'Стіни з піноблоків – вибір оптимальної товщини',
    desc: 'Цілком зрозуміло, що зі збільшенням товщини стінки зменшується втрата тепла. Але подібна економія...',
    imgSrc: tipTitle1,
    urlTitle: 'stini-z-pinoblokiv-vibir-optimalnoyi-tovshini'
  },
  {
    id: 2,
    title: 'Чому монолітний фундамент найбільш вигідний',
    desc: 'Існує багато видів фундаментів, але досвід показує, що найбільшвигіднимваріантомє саме…',
    imgSrc: tipTitle2,
    urlTitle: 'chomu-monolitnij-fundament-najbilsh-vigidnij'
  },
  {
    id: 3,
    title: 'Цегла чи піноблок?',
    desc: 'Для будівництва будинків зазвичай використовують міцну довговічну цеглу або газосилікатні чи…',
    imgSrc: tipTitle3,
    urlTitle: 'cegla-chi-pinoblok'
  },
  {
    id: 4,
    title: 'Планування заміських будинків',
    desc: 'Заміський будинок – це найкраще місце для сімейного дозвілля і відпочинку. Тому ще на етапі…',
    imgSrc: tipTitle4,
    urlTitle: 'planuvannya-zamiskih-budinkiv'
  },
  {
    id: 5,
    title: 'Будівництво заміського будинку – з чого почати',
    desc: 'Дехто віддає перевагу купівлі вже готових заміських будинків, вирішивши таким чином не займатись…',
    imgSrc: tipTitle5,
    urlTitle: 'budivnictvo-zamiskogo-budinku-z-chogo-pochati'
  },
]

export const Tips = () => {

  let navigate  = useNavigate();

  const handleClick = (urlTitle) => {
    navigate(`/tip/${urlTitle}`)
  }
  return (
    <div className="tips">
      <div className="container">
        <div className="page_title tips_title">
          <div className="row">
            <div className="col-12">
              <h2>Поради по будівництву</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 tips_items">
            {tips.map((item) => {
              return (
                <div className="tips_item row text-md-start text-center" key={item.id} onClick={() => handleClick(item.urlTitle)}>
                  <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                    <div className="tips_item_img">
                      <img src={item.imgSrc} />
                    </div>
                  </div>
                  <div className="col-xl-8  col-lg-7 col-md-6">
                    <div className="tips_item_title">
                      <h4 className="mb-lg-3 mb-sm-2">{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
