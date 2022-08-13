import React, { useEffect, useState } from 'react'
import './project.scss'
import { Gallery } from '../../components/Gallery/Gallery'
import { ProjectItem } from '../../components/ProjectItem/ProjectItem'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../Portfolio/Portfolio'
import { Loader } from '../../components/Loader/Loader'
import { getRandomProjects } from '../../utils/getRandomProjects'
import { Projects } from '../../components/Projects/Projects'

export const Project = () => {
  const [project, setProject] = useState({})
  const [offerProjects, setOfferProjects] = useState([])
  const navigate = useNavigate()
  const { name } = useParams()

  useEffect(() => {
    if (offerProjects.length === 2) {
      return
    } else {
      setOfferProjects(getRandomProjects(2))
    }
  }, [])

  useEffect(() => {
    const project = projects.filter((project) => project.name == name)
    setProject(project[0])
  }, [name])

  const handleClick = (name) => {
    navigate(`/project/${name}`)
  }

  if (!project.name || !offerProjects.length === 2) {
    return <Loader />
  }

  return (
    <div className="project">
      <div className="container">
        <div className="page_title project_title">
          <div className="row">
            <div className="col-12">
              <h2>Проект будинку {project.name}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project_left col-xl-9 col-lg-12">
            <div className="project_left_img mb-3">
              <img className="img-fluid" src={project.mainImg} alt="" />
            </div>
            <div className="d-block d-md-none">
              <span className="mb-3">
                Площа:{' '}
                <b>
                  {project.houseArea}м<sup>2</sup>
                </b>
              </span>
              {project.garageArea && (
                <span className="mt-2 mb-2 d-block d-md-none">
                  Площа гаража:{' '}
                  <b>
                    {project.garageArea}м<sup>2</sup>
                  </b>
                </span>
              )}
            </div>
            <p className="project_left_desc">{project.desc}</p>
            <div className="project_left_photos">
              <Gallery
                images={project.images}
                group={`${project.name}`}
                title="Фасади:"
                imgHeight150
              />
            </div>
            <div className="project_left_plans">
              <Gallery
                images={project.planImages}
                group={`${project.name}`}
                title="Плани:"
                imgHeight150
              />
            </div>
            <div className="project_left_pricing">
              <h6>В ціну проекту входить:</h6>
              <ul className="mb-5 mt-3">
                <li>
                  <span>
                    генеральний план (розробляється індивідуально під ваш ділянку, входить у
                    вартість проекту);
                  </span>
                </li>
                <li>
                  <span>плани поверхів;</span>
                </li>
                <li>
                  <span>фасади;</span>
                </li>
                <li>
                  <span>розрізи;</span>
                </li>
                <li>
                  <span>візуалізація;</span>
                </li>
                <li>
                  <span>план покрівлі, розкладка і візуалізація крокiв;</span>
                </li>
                <li>
                  <span>план фундаментів, їх армування, розрізи;</span>
                </li>
                <li>
                  <span>готові плани поверхів;</span>
                </li>
                <li>
                  <span>план перекриття (плити, балки, моноліт);</span>
                </li>
                <li>
                  <span>підрахунок основних матеріалів і робіт.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="project_right col-xl-3 col-lg-12">
            <div className="project_right_img d-none d-xl-block">
              <img className="img-fluid" src={project.mainImg} alt="" />
            </div>
            <div className="project_right_info d-none d-xl-block">
              <div className="mt-2">
                <span>Площа: </span>
                <b>
                  {project.houseArea}м<sup>2</sup>
                </b>
              </div>
              <div className="mb-2 mt-2">
                <span>
                  Ціна проекту: <b>124 тис. грн.</b>
                </span>
              </div>
              <button
                className="right_info_btn btn btn-primary"
                data-bs-target="#exampleModal"
                data-bs-toggle="modal">
                Замовити проект
              </button>
            </div>
            <div className="project_right_offer mt-5 d-none d-xl-block">
              <h5>Інші проекти:</h5>
              <div className="row">
                <ProjectItem
                  houseArea={offerProjects[0].houseArea}
                  mainImg={offerProjects[0].mainImg}
                  name={offerProjects[0].name}
                  onClick={() => handleClick(offerProjects[0].name)}
                />
              </div>
              <hr className="mb-4" />
              <div className="row">
                <ProjectItem
                  houseArea={offerProjects[1].houseArea}
                  mainImg={offerProjects[1].mainImg}
                  name={offerProjects[1].name}
                  onClick={() => handleClick(offerProjects[1].name)}
                />
              </div>
            </div>
            <div className="offer_project d-block d-xl-none">
              <h3 className="mb-3">Iнші проекти:</h3>
              <Projects projects={offerProjects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
