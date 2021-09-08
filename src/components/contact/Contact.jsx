import React from 'react'
import './contact.scss';

const Contact = () => {
    const onsubmit=()=>{
        alert('Thank you for sending message. I will reply ASAP.')
    }
    return (
        <div className='contact' id='contact'>
        <h1>Contact Me</h1>
        <div className="container">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/contact/contact.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <form  method={onsubmit}>
                    <input type="email" placeholder='email..' required/>
                    <textarea type="text" name="text" id="text" cols="30" rows="10" placeholder='Message..' required/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
            
        </div>
    )
}

export default Contact;
