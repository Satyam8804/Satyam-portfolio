import React from 'react'
import './Contact.css'
// import 'https://smtpjs.com/v3/smtp.js'

const Contacts = () => {

  function showForm() {
    document.getElementsByClassName('contact-form')[0].style.display="block";
    document.getElementsByClassName('contact-details')[0].style.display="none";
 }

 const btn = document.getElementById('button');
//  btn.addEventListener('click',sendEmail());
 
//  function sendEmail() {
     
//      btn.value="Sending ..."
 
//      Email.send({
//      Host:"smtp.gmail.com",
//      Username:"satyam8804378323@gmail.com",
//      Password:"5CC8846FB99A4EF425B38F2B592DD97D98EB",
//      To : 'satyam347.sk@gmail.com',
//      From : document.getElementById('email_id').value,
//      Subject : "New Contact Form Enquiry",
//      Body : document.getElementById('message').value
    
//  }).then(
 
//      btn.value="Send",
//    message => alert(message)
//  );
//  }
  return (
    <>

<div class="contacts" id="cont">
  <span class="title">Contacts
    <div class="bb"></div>
   </span>
   <div class="contact-box">
  <div class="remainder">
      <h2>Contact Me</h2>
      <span style={{textAlign : "center"}}><ion-icon name="time-outline"></ion-icon>{' '}It Will Take Only Few seconds to Contact</span>
      <button class="btn btn-large show button" title="contact" id="download" onclick="showForm()" style={{fontSize: "medium" , fontWeight: "700"}}>Message Me</button>
  </div>
  <div class="contact-form">
      {/* <!-- <form action=""  style="width: 100%;" id="form" > --> */}
        <table id="contact-table1">
          <tr>
            <td>Name </td>
            <td><input id="User_name" type="text"/></td>
          </tr>
          <tr>
            <td>
            Email 
          </td>
          <td><input type="email" name="mail" id="email_id"/></td>
        
        </tr>
          <tr>
            <td>Message </td>
            <td>
              <input type='textarea' id="Textarea" placeholder="Enter your Message..." class="form-control"/>
            </td>
          </tr>

          <tr>
            <td></td>
            <td><button class="btn btn-large button" id="button" style={{fontSize:"medium"}}>Send</button>
            </td>
          </tr>
        </table>
      {/* <!-- </form> --> */}

  </div>
  <div class="contact-details">
    <span style={{color:"gray" ,fontFamily:"'Caveat', cursive"}}>Feel Free To Contact Me Anytime !
    </span>
    <table id="contact-table">
      <tr>
        <td><ion-icon name="person-outline" class="cont-icon"></ion-icon>Name</td>
        <td>Satyam Kumar</td>
      </tr>
      <tr>
        <td><ion-icon name="location-outline" class="cont-icon"></ion-icon>Location</td>
        <td>Patna,Bihar ,800020</td>
      </tr>
      <tr>
        <td><ion-icon name="call-outline" class="cont-icon"></ion-icon>Call Me</td>
        <td>(+91)-6207621814</td>
      </tr>
      <tr>
        <td><ion-icon name="call-outline" class="cont-icon"></ion-icon>Email Me</td>
        <td>Satyam8804378323@gmail.com</td>
      </tr>
    </table>
  </div>
</div>
</div>     
    </>
  )
}

export default Contacts
