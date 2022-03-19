import React from 'react'
import { Link } from 'react-router-dom'
export const MainWorkSheers = ({dataWorkSheers}) => {
    return (
        <div>
            <div className='main'>
                <div className='list-topic'>
                    <div><h1>{dataWorkSheers.name}</h1></div>
                    <div>
                        <h3>{dataWorkSheers.text}</h3>
                    </div>
                </div>
                <div className='list-img'>
                    <div>
                        <Link to=''><img className='main--list4c--content--video--list' src={dataWorkSheers.src1}></img></Link>
                        <p className='content'>{dataWorkSheers.title1}</p>
                        <img className='main--list4c--content--video--list' src={dataWorkSheers.src2} ></img>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}