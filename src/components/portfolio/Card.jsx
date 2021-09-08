import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'; 
const Card = ({id,img, title, category,language, webLink,github}) => {
    return (
        <>
        <div className="scene">
                    <div className="card">
                        <div className="card__face imgContainer">
                            <img src={img} alt={title} />
                        </div>
                        <div className="card__face card-body">
                            <h2>{title} </h2>
                            <h4>Languages: {language} </h4>
                            <p>Category: {category} </p>
                            <div className="link">
                               <button> <a href={webLink} target='_blank' className='button'>Visit Website</a></button>
                                <a href={github} target='_blank' className='github'> <GitHubIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* first card ends  */}
            
        </>
    )
}

export default Card;
