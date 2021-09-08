import React, { useEffect,useRef } from 'react'
import './intro.scss';
import {init} from 'ityped';

const Intro = () => {
    const textRef= useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            backSpeed:60,
            showCursor:true,
            strings:["Dauth Gurung","Frontend Developer"]
        })
    },[])
    return (
        <div id='intro' className='intro'>
            <div className="left">
            <div className='imgContainer'>
                <img src="./assets/logo/portfoliologo.png" alt="portfoliologo"/>
            </div>
            </div>
            <div className="right">
                <h2>Hi, there</h2><br/>
                <h1>I'm <span ref={textRef}></span>
                </h1>
                <button><a href='#about' >About Me</a></button>
            </div>
            
        </div>
    )
}

export default Intro;
