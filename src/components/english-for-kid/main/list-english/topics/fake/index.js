import React from 'react'
import { Link } from 'react-router-dom'
export const Fake = ({dataTopic}) => {
    
    return (
        <div>
            <div className='main--nav'>
                <div className='main--nav--menu'>
                    <Link className='main--nav--menu--btn main--nav--menu-btnAll' to='/english-for-kid/'>
                        <span className='main--nav--menu--btn--text' ><i class="main--nav--menu--btn--icon fa-brands fa-buffer"></i>All</span>
                    </Link>
                    <Link className='main--nav--menu--btn main--nav--menu-btnTopic' to='/english-for-kid/topics'>
                        <span className='main--nav--menu--btn--text' ><i class="main--nav--menu--btn--icon fa-solid fa-book"></i>Topics</span>
                    </Link>
                    <Link className='main--nav--menu--btn main--nav--menu-btnVideo' to='/english-for-kid/videos'>
                        <span className='main--nav--menu--btn--text'><i class="main--nav--menu--btn--icon fa-regular fa-circle-play"></i>Video</span>
                    </Link>
                    <Link className='main--nav--menu--btn main--nav--menu-btnWorksheet' to='/english-for-kid/worksheets'>
                        <span className='main--nav--menu--btn--text' ><i class="main--nav--menu--btn--icon fa-solid fa-eye-dropper"></i>Worksheets</span>
                    </Link>
                </div>
            </div>
            <div className='main--nav--topic'>
                <div className='main--nav--topic--list'>
                    <Link className='main--nav--topic--slider--topic-list' to={dataTopic.link1}>
                        <img className='main--nav--topic--slider--topic--img-topic' src={dataTopic.src1}></img>
                        <p className='main--nav--topic--slider--topic-list-text'>{dataTopic.title1}</p>
                    </Link>
                    <Link className='main--nav--topic--slider--topic-list' to={dataTopic.link2}>
                        <img className='main--nav--topic--slider--topic--img-topic' src={dataTopic.src2}></img>
                        <p className='main--nav--topic--slider--topic-list-text'>{dataTopic.title2}</p>
                    </Link>
                    <Link className='main--nav--topic--slider--topic-list' to={dataTopic.link3}>
                        <img className='main--nav--topic--slider--topic--img-topic' src={dataTopic.src3}></img>
                        <p className='main--nav--topic--slider--topic-list-text'>{dataTopic.title3}</p>
                    </Link>
                    
                    <Link className='main--nav--topic--slider--topic-list' to={dataTopic.link4}>
                        <img className='main--nav--topic--slider--topic--img-topic' src={dataTopic.src4}></img>
                        <p className='main--nav--topic--slider--topic-list-text'>{dataTopic.title4}</p>
                    </Link>
                    
                    <Link className='main--nav--topic--slider--topic-list' to={dataTopic.link5}>
                        <img className='main--nav--topic--slider--topic--img-topic' src={dataTopic.src5}></img>
                        <p className='main--nav--topic--slider--topic-list-text'>{dataTopic.title5}</p>
                    </Link>
                    
                </div>
                <div className='main--nav--topic--introduce'>
                    <h1 className='main--nav--topic--introduce--h1'>{dataTopic.title10}</h1>
                    <p className='main--nav--topic--introduce--p'>{dataTopic.content1}</p>
                    <h1 className='main--nav--topic--introduce--h1'>{dataTopic.title11}</h1>
                    <p className='main--nav--topic--introduce--p'>{dataTopic.content2}</p>
                </div>
            </div>
        </div>
    )
}
