import React from 'react'
import $ from 'jquery'
const Loader = () => {
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });
  return (
    <>
         <div className="content" style={{display:"none"}}>
        <img src="https://picsum.photos/300/300/?random" alt='img' />
        </div>
        <div className="loader-wrapper" style={{overflow: "hidden"}}>
        <span className="loader"><span class="loader-inner"></span></span>
        </div>
      
    </>
  )
}

export default Loader