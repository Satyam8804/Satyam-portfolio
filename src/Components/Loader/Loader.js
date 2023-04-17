<<<<<<< HEAD
import React from 'react'
import $ from 'jquery'
const Loader = () => {
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });
  return (
    <>
         <div className="content" style={{display:"none"}}>
        {/* <img src="https://picsum.photos/300/300/?random" alt='img' /> */}
        </div>
        <div className="loader-wrapper" style={{overflow: "hidden"}}>
        <span className="loader"><span class="loader-inner"></span></span>
        </div>
      
    </>
  )
}

=======
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

>>>>>>> 878b53a5c8804aec86e6c5895ea233e0000a6403
export default Loader