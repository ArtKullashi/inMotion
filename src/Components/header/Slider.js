import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import pic1 from './slideshowPics/pic1.jpg'
import pic2 from './slideshowPics/pic2.jpg'
import pic3 from './slideshowPics/pic3.jpg'

export default function Slider(props){
  const slider = (
    <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={false} fillParent={!props.phone}>
      <div data-src={"https://www.theindependentphysiotherapyservice.co.uk/image/4.jpg"} />
      <div data-src={pic1} />
      <div data-src={pic2} />
      <div data-src={pic3} />
    </AwesomeSlider>
  );
  return slider;
}