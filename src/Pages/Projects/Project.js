<<<<<<< HEAD
import React from "react";
import gallary from "../../image/imageGallery.png";
import snake from "../../image/snakeGame.png";
import tictactoe from "../../image/tictactoe.png";
import placementPortal from "../../image/placementPortal.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.css";
import { Pagination, Navigation } from "swiper";

const Project = () => {
  return (
    <>
      {/* <!-- projectsdone start--> */}
      <div className="projects1" id="project">
        
        <div className="project-title title">
         <p>Projects</p> 
          <div className="bb"></div>
        </div>
        {/* <!-- <div className="project-slider"> --> */}

        {/* <!-- Swiper --> */}

        <Swiper
        //   slidesPerView={2}
          spaceBetween={30}
          centeredSlides ={true}
          observer ={true}
          loop={true}
          observeParents={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            948: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
              // when window width is >= 768px
              768: {
                width : 400,
                slidesPerView :1
              }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
         
          <SwiperSlide>
            
              <img src={placementPortal} alt="" />
              <div className="swiper-text">
                <h3>Placement Portal</h3>
                <div className="description">
                  <p>Project Description : </p>
                  <span>
                    Technology Used
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </span>
                </div>
                <a
                  href="https://satyam8804.github.io/PlacementPortal/Main"
                  className=" btn visit "
                >
                  VISIT
                </a>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={tictactoe} alt="" />
              <div className="swiper-text">
                <h3>Tic Tac Toe Game</h3>
                <div className="description">
                  <p>Project Description : </p>
                  <span>
                    Technology Used
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </span>
                </div>
                <a
                  href="https://satyam8804.github.io/TickTacToe/TicTacToe/TicTacToe.htm"
                  className="btn visit "
                >
                  Visit
                </a>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
           
         <img src={snake} alt=""/>
         <div className="swiper-text">
          <h3>Snake Game</h3>
          <div className="description">
            <p>Project Description : </p>
            <span>Technology Used <ul>
              <li>Python</li>
              <li>Pygames</li>
              <li>playsound</li>

            </ul></span>
          </div>
          <a href="https://github.com/Satyam8804/SnakeGame" className="btn visit">Visit</a>
        </div>
       
        </SwiperSlide>
          <SwiperSlide>
          
          <img src={gallary} alt=""/>
          <div className="swiper-text">
            <h3>Image Gallery</h3>
            <div className="description">
              <p>Project Description : </p>
              <span>Technology Used
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </span>
            </div>
            <a href="https://satyam8804.github.io/Gallery/imageSlider" className="btn visit fw-medium">Visit</a>
          </div>
      </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Project;
=======
import React from "react";
import gallary from "../../image/imageGallery.png";
import snake from "../../image/snakeGame.png";
import tictactoe from "../../image/tictactoe.png";
import placementPortal from "../../image/placementPortal.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.css";
import { Pagination, Navigation } from "swiper";

const Project = () => {
  return (
    <>
      {/* <!-- projectsdone start--> */}
      <div className="projects1" id="project">
        
        <div className="project-title title">
         <p>Projects</p> 
          <div className="bb"></div>
        </div>
        {/* <!-- <div className="project-slider"> --> */}

        {/* <!-- Swiper --> */}

        <Swiper
        //   slidesPerView={2}
          spaceBetween={30}
          centeredSlides ={true}
          observer ={true}
          loop={true}
          observeParents={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            948: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
              // when window width is >= 768px
              768: {
                width : 400,
                slidesPerView :1
              }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
         
          <SwiperSlide>
            
              <img src={placementPortal} alt="" />
              <div className="swiper-text">
                <h3>Placement Portal</h3>
                <div className="description">
                  <p>Project Description : </p>
                  <span>
                    Technology Used
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </span>
                </div>
                <a
                  href="https://satyam8804.github.io/PlacementPortal/Main"
                  className=" btn visit "
                >
                  VISIT
                </a>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={tictactoe} alt="" />
              <div className="swiper-text">
                <h3>Tic Tac Toe Game</h3>
                <div className="description">
                  <p>Project Description : </p>
                  <span>
                    Technology Used
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </span>
                </div>
                <a
                  href="https://satyam8804.github.io/TickTacToe/TicTacToe/TicTacToe.htm"
                  className="btn visit "
                >
                  Visit
                </a>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
           
         <img src={snake} alt=""/>
         <div className="swiper-text">
          <h3>Snake Game</h3>
          <div className="description">
            <p>Project Description : </p>
            <span>Technology Used <ul>
              <li>Python</li>
              <li>Pygames</li>
              <li>playsound</li>

            </ul></span>
          </div>
          <a href="https://github.com/Satyam8804/SnakeGame" className="btn visit">Visit</a>
        </div>
       
        </SwiperSlide>
          <SwiperSlide>
          
          <img src={gallary} alt=""/>
          <div className="swiper-text">
            <h3>Image Gallery</h3>
            <div className="description">
              <p>Project Description : </p>
              <span>Technology Used
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </span>
            </div>
            <a href="https://satyam8804.github.io/Gallery/imageSlider" className="btn visit fw-medium">Visit</a>
          </div>
      </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Project;
>>>>>>> 878b53a5c8804aec86e6c5895ea233e0000a6403
