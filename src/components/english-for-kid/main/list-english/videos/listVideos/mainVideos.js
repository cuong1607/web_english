import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export const MainVideos = ({dataVideos}) => {
    return (
        <div>
            <div className='main'>
                <div className='list-topic'>
                    <div><h1>{dataVideos.name}</h1></div>
                    <div>
                        <h3>{dataVideos.text}</h3>
                    </div>
                </div>
                <div className='list-img'>
                    <div>
                        <Link to=''><iframe className='main--list4c--content--video--list' src={dataVideos.video}></iframe></Link>
                        <p className='content'>{dataVideos.title1}</p>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
