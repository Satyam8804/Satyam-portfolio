import React from 'react'
import '../About/About.css'
// import about_img from '../../image/about_img.jpg'
const About = () => {
  return (


<div className="aboutMe" id="aboutSection">
  <div className="about_title">
  <span>About Me
    <div className="bb"></div>
  </span>
</div>
<div className="about_content">
  {/* <div className="about_img ">
      <img src={about_img} alt=""/>
    
  </div> */}
  <div className="about_details">
      <div id="about_text">
        an enthusiast and technology driven individual and pursuing Btech in Computer science &
        engineering. Eagerly looking for a reputed company where i can showcase my skills and learn new
        technology to upgrad my skills.
      </div>
     
      <div className="about_table border-0" >
        <div className="left_table">
          <table id="about_table1">
          <tr>
            <td ><i className='fas fa-angle-double-right' style={{fontSize:"1rem"}}></i>{' '}Email </td>
            <td>:<a href="mailto:satyam8804378323@gmail.com" style={{textDecoration: " none"}}>{' '}Satyam8804378323@gmail.com</a></td>
          </tr>
          <tr>
            <td><i className='fas fa-angle-double-right' style={{fontSize:"1rem"}}></i>{' '}Phone</td>
            <td>: <a href="tel:+91-6207621814" style={{textDecoration: " none"}}>{' '}+91-6207621814</a></td>
          </tr>
          <tr>
            <td><i className='fas fa-angle-double-right' style={{fontSize:"1rem"}}></i>{' '} Address</td>
            <td><address>:{'  '}Patna,bihar,India</address></td>
          </tr>
         
          </table>
        </div>
  
  
      <div className="right_table">
          <table id="about_table2" >
            <tr>
              <td><i className='fas fa-angle-double-right' style={{fontSize:"1rem"}}></i>{' '}Age {' '}:</td>
              <td> 21 years</td>
            </tr>
            <tr>
              <td><i className='fas fa-angle-double-right' style={{fontSize:"1rem"}}></i>{' '}Language Known : </td>
              <td>English , Hindi</td>
            </tr>
          </table>
      </div>
    </div> 
    </div>
  </div>
</div>

  )
}

export default About