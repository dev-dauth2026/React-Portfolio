import React from 'react'
import SkillBar from './AnimationBar'

const Item = ({id,language,level} ) => {
 
    return (
        <>
            <div className="item" key={id}>
                <div className="left">
                    <img src={language} alt='skill'/>
                </div>
                <div className="right">
                    <div className="bar">
                    <SkillBar level={level}/>
                    </div>
                    <p>{level}%</p>
                </div>
            </div>
            {/* first item ends  */}

        </>
    )
}

export default Item
