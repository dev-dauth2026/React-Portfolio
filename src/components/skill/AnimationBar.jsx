import React from 'react'
import styled, { keyframes } from 'styled-components';
const AnimationBar = ({level}) => {
    let bgColor;
    const levelColor=()=>{
        if (level>=80){
            bgColor='green'
        }else if(level<80 && level>=60){
            bgColor='yellow'
        }else if(level<60 && level>=50){
            bgColor='grey'
        }else{
            bgColor='red'
        }
    }
    levelColor();
    const skillbar=keyframes`
    0%{width:0%;}
    100%{width:${level}%;}
 `       
    const SkillBar=styled.span`
    display: flex;
    height:100% ;
    float:right;
    background-color:${bgColor} ;
    transition: all 1s ease;
    animation:${skillbar} 2s forwards;
`;
    return <SkillBar> </SkillBar>
}

export default AnimationBar;



