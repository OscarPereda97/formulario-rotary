import React, {Fragment} from 'react'
import banner from '../img/banner.jpg'
import './css/Banner.css'

const Banner = () =>{
    return (
        <Fragment>
            <div className="container-fluid no-margin">
                <img src={banner} alt="Banner" className="img-banner"/>
            </div>
        </Fragment>
    )
}

export default Banner;