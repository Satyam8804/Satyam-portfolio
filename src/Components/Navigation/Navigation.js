import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"
const Navigation = () => {
  //NavBar

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}

list.forEach((item)=>
item.addEventListener("click" ,activeLink));

  return (
        <>
        
        <nav>
        <ul>
            <li  className="list active">
               <Link to="/">
              <span className="text active1">Home</span>
              <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
              </Link> 
            </li>
            <li className="list"> 
              <Link to="/about" >
                <span className="text">About</span>
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
            </Link > 
          </li>
            <li className="list"> 
              <Link to="/skills">
                <span className="text">Skills</span>
                <span className="icon"><ion-icon name="construct-outline"></ion-icon></span>
            </Link> </li>
            <li className="list"> 
              <Link to="/projects">
                <span className="text">Project</span>
                <span className="icon"><ion-icon name="bag-check-outline"></ion-icon></span>
            </Link> </li>
            <li className="list">
              <Link to="/contact">
                <span className="text">Contacts</span>
              <span className="icon"><ion-icon name="call-outline" ></ion-icon></span>
              </Link>
            </li>
        </ul>
    </nav>
        </>
  )
}

export default Navigation