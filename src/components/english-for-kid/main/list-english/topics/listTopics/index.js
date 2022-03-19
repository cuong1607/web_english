import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export const ListTopics = ({dataAnimal}) => {
  return (
    <div className='main'>
      <div className='list-topic'>
        <div><h1>{dataAnimal.contents}</h1></div>
          <div>
            <h3>{dataAnimal.text}</h3>
          </div>
      </div>
        <div className='list-img'>
          <div>
            <Link to=''><img className='list-animal' src={dataAnimal.src1}></img></Link>
            <p className='content'>{dataAnimal.title1}</p>
          </div>
          <div>
            <Link to=""><img className='list-animal' src={dataAnimal.src2}></img></Link>
            <p className='content'>{dataAnimal.title2}</p>
          </div>
          <div>
            <Link to='#'><img className='list-animal' src={dataAnimal.src3}></img></Link>
            <p className='content'>{dataAnimal.title3}</p>
          </div>
          <div>
            <Link to='#'><img className='list-animal' src={dataAnimal.src4}></img></Link>
            <p className='content'>{dataAnimal.title4}</p>
          </div>
          <div>
            <Link to='#'><img className='list-animal' src={dataAnimal.src5}></img></Link>
            <p className='content'>{dataAnimal.title5}</p>
          </div>
          <div>
            <Link to='#'><img className='list-animal' src={dataAnimal.src6}></img></Link>
            <p className='content'>{dataAnimal.title6}</p>
          </div>
          
        </div>
    </div>
  )
}
