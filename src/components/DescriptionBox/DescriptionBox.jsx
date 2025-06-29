import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Explore the latest trends in dresses, casual wear, ethnic styles, and accessories for every occasion.
           From everyday essentials to party-ready looks, we offer handpicked collections at affordable prices.
           Enjoy seamless shopping, secure checkout, and doorstep delivery.</p>
           <p>
            Browse a wide range of trendy outfits, chic accessories, and seasonal must-haves — all in one place.
            We bring you top-quality fashion at pocket-friendly prices, with new arrivals every week.
            Shop effortlessly with easy returns, secure payments, and quick delivery.
           </p>
      </div>
    </div>
  )
}

export default DescriptionBox
