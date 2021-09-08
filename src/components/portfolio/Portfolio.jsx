import React, { useState } from 'react'
import './portfolio.scss';
import PortfolioData from './PortfolioData';
import Card from './Card';
const Portfolio = () => {
    const [card,setCart]= useState(PortfolioData)
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <div className="item">
                {
                    card.map((elem)=>{
                        const {id,img, title, category,language, webLink,github}=elem;
                        return <Card key={id} img={img} title={title} category={category} language={language} webLink={webLink} github={github} />
                    })
                }
               

            </div>

        </div>
    )
}

export default Portfolio;
