import React from 'react'
import './gallery.scss'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'



export const Gallery = ({ images, title, imgHeight150}) => {

  return (
    <section className="gallery">
      <div className="row">
        <div className="col-12 mb-3">
          <h3>{title ? title : 'Фото робіт:'}</h3>
        </div>
      </div>
      <div className="row">
        <LightgalleryProvider>
          {images.map((image, index) => {
            return (
              <div key={index} className={`img_gallery_wrap col-xl-3 col-lg-4 col-md-6 col-12 ${imgHeight150 ? 'h-150' : ''}`}>
                <LightgalleryItem group='group' src={image}>
                  <img src={image} />
                </LightgalleryItem>
              </div>
            )
          })}
        </LightgalleryProvider>
      </div>
    </section>
  )
}
