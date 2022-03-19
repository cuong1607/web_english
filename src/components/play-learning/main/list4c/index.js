import React from 'react'
import './style.css'
export const List4c = ({dataList4c, index }) => {
    return (
        <div>
            {
                index % 2 == 0 ?
                    <div>
                        <h3 className='main--list4c--content--text'>{dataList4c.title1}</h3>
                        <div className='main--list4c--content--block main--list4c--content--block1'>
                            <iframe className='main--list4c--content--video' src={dataList4c.video}></iframe>
                            <ul className='main--list4c--content--block-list main--list4c--content--block-list1'>
                                <li className='main--list4c--content--block-name'>{dataList4c.title2}</li>
                                <li className='main--list4c--content--block-name'>{dataList4c.title3}</li>
                                <li className='main--list4c--content--block-name'>{dataList4c.title4}</li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div>
                        <h3 className='main--list4c--content--text'>{dataList4c.title1}</h3>
                        <div className='main--list4c--content--block main--list4c--content--block2'>
                            <ul className='main--list4c--content--block-list main--list4c--content--block-list2'>
                                <li className='main--list4c--content--block-name'>{dataList4c.title2}</li>
                                <li className='main--list4c--content--block-name'>{dataList4c.title3}</li>
                                <li className='main--list4c--content--block-name'>{dataList4c.title4}</li>
                            </ul>
                            <iframe className='main--list4c--content--video' src={dataList4c.video}></iframe>
                        </div>
                    </div>
            }
        </div>
    )
}
