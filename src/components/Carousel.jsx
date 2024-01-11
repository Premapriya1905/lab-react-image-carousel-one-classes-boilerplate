import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    this.state={
        imageIndex:0

    }
  }

    render(){

        const {imageIndex} = this.state
        const currentImage = images[imageIndex]

        let prevImg=()=>{
            this.setState((prev)=>(
                {imageIndex:(prev.imageIndex-1 + images.length)%images.length}
            ))
        }

        let nextImg=()=>{
            this.setState((prev)=>(
                {imageIndex:(prev.imageIndex+1)%images.length}
            ))
        }

        return <>
        <div className="main-container">
            <div className="arrow">
                <ArrowBackIosIcon onClick={prevImg}/>
            </div>
            <div className="image-container">
                <div className="title-box">
                    <h1>{currentImage.title}</h1>
                </div>

                <div className="image">
                    <img src={currentImage.img} />
                </div>

                <div className="subtitle-box">
                    <h3>{currentImage.subtitle}</h3>
                </div>
            </div>
            <div className="arrow">
                <ArrowForwardIosIcon onClick={nextImg}/>
            </div>
        </div>
        

        </>
    }
}

export default Carousel;