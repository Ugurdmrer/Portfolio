import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../assets/images/slider1.jpg"
import slider2 from "../assets/images/slider2.jpg"
import slider3 from "../assets/images/slider3.jpeg"


export default class SimpleSlider extends Component {
    constructor(props:string) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
      <div>
        <Slider ref={slider =>(this.slider = slider)} {...settings}>
          <div style={{}}>
            <img style={{"objectFit":"cover","height":"500px","width":"1000xp;"}} src={slider1} alt="image" />
          </div>
          <div style={{}}>
          <img style={{"objectFit":"cover","height":"500px","width":"1000xp;"}} src={slider2} alt="image" />
          </div>
          <div style={{}}>
          <img style={{"objectFit":"cover","height":"500px","width":"1000xp;"}} src={slider3} alt="image" />
          </div>
        </Slider>
      </div>
    );
  }
}