import React from 'react'
import Item from './Item';
import './skill.scss';
import ItemData from './ItemData';
const Skill = () => {
    return (
        <div className='skill' id='skill'>
            <h1>Skills</h1>
            <div className="container">
            {
                ItemData.map((elem)=>{
                    const {id, language, level}=elem
                    return <Item key={id} language={language} level={level} />
                })
            }
               
            </div>
            <div className="ball" style={{left:'7%',bottom:'20%'}}></div>
            <div className="ball" style={{left:'80%',bottom:'95%',zIndex:'4'}}></div>
            <div className="ball" style={{left:'85%',bottom:'95%',zIndex:'4',height:'200px',width:'200px'}}></div>
            <div className="ball" style={{left:'80%',bottom:'5%',zIndex:'4'}}></div>
            <div className="ball" style={{left:'85%',bottom:'5%',zIndex:'4',height:'200px',width:'200px'}}></div>
            <div className="ball" style={{left:'8%',bottom:'60%',zIndex:'2',backgroundColor:'red',opacity:'0.7'}}></div>
            <div className="ball" style={{left:'10%',bottom:'65%',zIndex:'2',backgroundColor:'green',opacity:'0.7', height:'200px',width:'200px'}}></div>

        </div>
    )
}

export default Skill;
