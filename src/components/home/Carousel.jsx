import React from 'react'
import { Carousel } from 'antd-mobile';

const Carousels = ({ bannerdata }) => {
  // console.log(bannerdata)
  return (
    <Carousel
      autoplay={ true }
      infinite
      dots = { true }
      // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      // afterChange={index => console.log('slide to', index)}
    >
      {
        bannerdata.map((item, index) => (
        <a
          key={index}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: '1.2rem' }}
        >
          <img
            src={ item.image }
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              // this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
      ))}
    </Carousel>
  )
}

export default Carousels
