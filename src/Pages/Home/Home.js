<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../../image/portfolio.png'
import $ from 'jquery'
import resume from '../../image/Satyam_Resume.pdf'

import '../Home/Home.css'
// import Contacts from '../Contacts'
const Home = () => {

  

    (function student(){
        var word =[" A Student"," An Engineer"," A Developer"],
        i=0;
        setInterval(function(){
            $('#eng').fadeOut(function(){
                $(this).html(word[i = (i+1)%word.length]).fadeIn();
            });
        },2000)
    })();

  

    const onButtonClick = () => {
      // using Java Script method to get PDF file

      fetch('Satyam_Resume.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              // const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = resume;
              alink.download = 'Satyam_Resume.pdf';
              alink.click();
          })
      })
  }
  return (
    <>

        {/* <div className='sun sunshine'></div> */}
        <div className="container1 border-0">
         <div className="connect">
            <Link to="https://www.linkedin.com/in/satyam-kumar-98387a1ba/" title="linkedin"  target="_blank"><i className="fa fa-linkedin social" style={{color:"#0d69c3" , fontSize:"3rem"}}></i></Link>
            <Link to="https://github.com/Satyam8804" target="_blank" title="github"><i className="fa fa-github social"></i></Link>
            <Link to="https://twitter.com/satyam8804" target="_blank" title="twiter"><i className="fa fa-twitter social" style={{color:"#0d69c3" }} ></i></Link>

        </div>
        <div className="detail">
          <div className="detail2">
            <p>Hi ! I Am </p>
            <span className="color satyam"> Satyam Kumar </span>
            <span id="eng" className="color"  style={{fontSize: "4rem"}}></span>
          </div>
          <div className="btn1">
            <button className="btn btn-large button" title="Click to download CV" value =" download" onClick={onButtonClick} style={{fontSize:"large"}} >Download CV</button>
            <button className="btn btn-large button"  style={{fontSize:"large" , fontStyle :"bold" , marginLeft:"1rem"}} >Hire me</button>
          </div>
        </div>
        
        <div className="image card1 border-0">
        <div className='sun sunshine'></div>
          <div className="lines">
        <img src={dp} alt="img"/>    
            </div> 
         </div>
         </div>
    </>
  )
}

=======
import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../../image/portfolio.png'
import $ from 'jquery'
import resume from '../../image/Satyam_Resume.pdf'

import '../Home/Home.css'
// import Contacts from '../Contacts'
const Home = () => {

  

    (function student(){
        var word =[" A Student"," An Engineer"," A Developer"],
        i=0;
        setInterval(function(){
            $('#eng').fadeOut(function(){
                $(this).html(word[i = (i+1)%word.length]).fadeIn();
            });
        },2000)
    })();

  

    const onButtonClick = () => {
      // using Java Script method to get PDF file

      fetch('Satyam_Resume.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              // const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = resume;
              alink.download = 'Satyam_Resume.pdf';
              alink.click();
          })
      })
  }
  return (
    <>

        {/* <div className='sun sunshine'></div> */}
        <div className="container1 border-0">
         <div className="connect">
            <Link to="https://www.linkedin.com/in/satyam-kumar-98387a1ba/" title="linkedin"  target="_blank"><i className="fa fa-linkedin social" style={{color:"#0d69c3" , fontSize:"3rem"}}></i></Link>
            <Link to="https://github.com/Satyam8804" target="_blank" title="github"><i className="fa fa-github social"></i></Link>
            <Link to="https://twitter.com/satyam8804" target="_blank" title="twiter"><i className="fa fa-twitter social" style={{color:"#0d69c3" }} ></i></Link>

        </div>
        <div className="detail">
          <div className="detail2">
            <p>Hi ! I Am </p>
            <span className="color satyam"> Satyam Kumar </span>
            <span id="eng" className="color"  style={{fontSize: "4rem"}}></span>
          </div>
          <div className="btn1">
            <button className="btn btn-large button" title="Click to download CV" value =" download" onClick={onButtonClick} style={{fontSize:"large"}} >Download CV</button>
            <button className="btn btn-large button"  style={{fontSize:"large" , fontStyle :"bold" , marginLeft:"1rem"}} >Hire me</button>
          </div>
        </div>
        
        <div className="image card1 border-0">
        <div className='sun sunshine'></div>
          <div className="lines">
        <img src={dp} alt="img"/>    
            </div> 
         </div>
         </div>
    </>
  )
}

>>>>>>> 878b53a5c8804aec86e6c5895ea233e0000a6403
export default Home