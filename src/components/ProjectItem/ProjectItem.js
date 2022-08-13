import React from 'react'
import './projectItem.scss'
import { useNavigate } from 'react-router-dom';

export const ProjectItem = (project) => {

  let navigate  = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.name}`)
  }

  return (
    <div className="col-sm-12 col-md-6 col-xl text-center mb-4 project_item">
        <div className="project_item_inner" onClick={handleClick}>
          <div className="img_wrap">
            <img className="img-fluid" src={project.mainImg} alt="" />
            <div className="hover_img"></div>
          </div>
          <div className="title_wrap">
            <h5>
              Проект {project.name}, {project.houseArea} м²
            </h5>
          </div>
        </div>
    </div>
  )
}
