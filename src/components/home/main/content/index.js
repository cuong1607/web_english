import React from 'react'
import './style.css' 
export const Content = ({ data }) => {
  return (
    <div className='main-container-saying-thank'>
      <img className='thank-logo' src={data.link}></img>
      <h2 className='thank-title'>{data.h2}</h2>
      <i class="thank-start fa-solid fa-star"></i>
      <i class="thank-start fa-solid fa-star"></i>
      <i class="thank-start fa-solid fa-star"></i>
      <i class="thank-start fa-solid fa-star"></i>
      <i class="thank-start fa-solid fa-star"></i>
      <br></br>
      <div className='thank-text'>{data.text}</div>
    </div>
  )
}
export const Container = ({ dataContainer, index }) => {
  return (
    <div>
      {
        index % 2 == 0 ?
          <div className='main-container-2'>
            <img className='main-container-img-2' src={dataContainer.src}></img>
            <div className='main-container-title'>
              <span className='title1'>{dataContainer.title1}</span>
              <span className='title2'>{dataContainer.title2}</span>
              <span className='title3'><i class="fa-regular fa-circle-check"></i>{dataContainer.title3}</span>
              <span className='title3'><i class="fa-regular fa-circle-check"></i>{dataContainer.title4}</span>
              <span className='title3'><i class="fa-regular fa-circle-check"></i>{dataContainer.title5}</span>
            </div>
          </div>
          :
          <div className='main-container-3'>
            <div className='main-container-3-title'>
              <span className='title3-1'>{dataContainer.title1}</span>
              <span className='title3-2'>{dataContainer.title2}</span>
              <span className='title3-3'><i class="fa-regular fa-circle-check"></i>{dataContainer.title3}</span>
              <span className='title3-3'><i class="fa-regular fa-circle-check"></i>{dataContainer.title4}</span>
              <span className='title3-3'><i class="fa-regular fa-circle-check"></i>{dataContainer.title5}</span>
            </div>
            <img className='main-container-img-3' src={dataContainer.src}></img>
          </div>
      }
    </div>
  )
}









