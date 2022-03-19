import React from 'react'
import {Link } from 'react-router-dom';   
import phongP from '../../../access/img1.png'

import phongP2 from '../../../access/img2.png'

import phongP3 from '../../../access/img3.png'
import './style.css'
export default function FullMain() {
   
    return (
        <div className='main'>
            <div className='main--background'>
                <div className='main--background--content'>
                    <h1 className='main--background--content__title1'>English for kids</h1>
                    <h4 className='main--background--content__title2'>Free play learning™ content curated by the Lingokids educators team.</h4>
                </div>
                <img className='main--background--img' src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/05/head_picture_efk.png'></img>
            </div>

            <div className='main--nav'>
                <div className='main--nav--menu'>
                    {/* <Link className='main--nav--menu--btn main--nav--menu-btnAll' to='/english-for-kid/'>
                        <span className='main--nav--menu--btn--text'><i class="main--nav--menu--btn--icon fa-brands fa-buffer"></i>All</span>
                    </Link> */}
                    <Link className='main--nav--menu--btn main--nav--menu-btnTopic' to='/english-for-kid/topics'>
                        <span className='main--nav--menu--btn--text'><i class="main--nav--menu--btn--icon fa-solid fa-book"></i>Topics</span>
                    </Link>
                    <Link className='main--nav--menu--btn main--nav--menu-btnVideo' to='/english-for-kid/videos'>
                        <span className='main--nav--menu--btn--text'><i class="main--nav--menu--btn--icon fa-regular fa-circle-play"></i>Video</span>
                    </Link>
                    <Link className='main--nav--menu--btn main--nav--menu-btnWorksheet' to='/english-for-kid/worksheets'>
                        <span className='main--nav--menu--btn--text'><i class="main--nav--menu--btn--icon fa-solid fa-eye-dropper"></i>Worksheets</span>
                    </Link>
                </div>
                <h1 className='main--nav--all--name'>TOPICS</h1>
                <img className='img-animal' src={phongP}></img>
                <h1 className='main--nav--all--name'>VIDEOS</h1>
                <img className='img-animal' src={phongP2}></img>
                <h1 className='main--nav--all--name'>WORKSHEETS</h1>
                <img className='img-animal' src={phongP3}></img>
            </div>
           
        </div>

    )
}
