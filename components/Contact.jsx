import React from 'react'
import { useLocation } from 'react-router-dom';
function Contact(){
    const location = useLocation();
    return(
       <div>it's contact page {location.state.fName} bhai</div>
    )
}


export default Contact;