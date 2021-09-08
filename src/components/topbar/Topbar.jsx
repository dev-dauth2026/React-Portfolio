import React, { useState } from 'react'
import './topbar.scss';

const Topbar = () => {
    const NavItem=[
        {
            id:1000,
            name:'intro',
        },
        {
            id:1001,
            name:'about',
        },
        {
            id:1002,
            name:'portfolio',
        },
        {
            id:1003,
            name:'skill',
        },
        {
            id:1004,
            name:'contact',
        },
    ]
    const [Item,setItem]=useState(NavItem);
    const[ActiveItem,setActiveItem]=useState(0)
    console.log(ActiveItem)
    const Toggle=(id)=>{
        let activenav=Item.find((elem)=>{
            return elem.id===id
        })
        setActiveItem(activenav);
        
    }
    return (
        <nav>
        <div className='imgContainer'>
                <img src="./assets/logo/portfoliologo.png" alt="portfoliologo"/>
        </div>
        <ul>
        {
            Item.map((elem)=>{
                const {id,name}=elem;
                return <li key={elem.id} id={id} className={id===ActiveItem.id?"active":"inactive"}  onClick={()=>{Toggle(id)}}>  <a href={`#${name}`} >{name}</a></li>
            })
        }
        </ul>            
        </nav>
    )
}

export default Topbar;
