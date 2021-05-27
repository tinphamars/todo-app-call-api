import React from 'react';
import ImageBanner from "../assets/co-ba-la-300x225.jpg"

const Banner = () => {
    return (
        <div className="banner-img">
            <img src={ImageBanner} alt="banner app" />
        </div>
    )
}
export default Banner;