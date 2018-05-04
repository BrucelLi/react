import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
            <div>
                <img title='图片' alt='图片不见了' src={require('../static/img/danmu.png')} />
            </div>
            <div>
                <img title='图片' alt='图片不见了' src={require('../static/img/danmu.png')} />
            </div>
            <div>
                <img title='图片' alt='图片不见了' src={require('../static/img/danmu.png')} />
            </div>
            <div>
                <img title='图片' alt='图片不见了' src={require('../static/img/danmu.png')} />
            </div>
        </Slider>
      </div>
    );
  }
}