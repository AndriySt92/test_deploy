import React from 'react'
import './projects.scss'
import { eye } from '../../assets'
import { ProjectItem } from '../ProjectItem/ProjectItem'
import { useNavigate } from 'react-router-dom'

export const Projects = ({ title, subtitle, projects, withButton }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/portfolio')
  }
  return (
    <section className="projects">
      {title && (
        <div className="row text-center projects_title">
          <div className="col-12 mb-5">
            <h3>{title}</h3>
            {subtitle && <p className="mt-2">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="row">
        {projects.map(project => (
          <ProjectItem key={project.name} houseArea={project.houseArea} mainImg={project.mainImg} name={project.name} />
        ))}
      </div>
      {withButton && <div className="row mb-4">
        <div className="col-12 text-center">
          <div className="projects_btn" onClick={handleClick}>
            <span className="btn_icon">
              <img src={eye} alt="" />
            </span>
            <div className="btn_content">
              <h6 className="mb-0 fw-bold">Дивитись всі проекти</h6>
            </div>
          </div>
        </div> 
      </div>}
    </section>
  )
}
