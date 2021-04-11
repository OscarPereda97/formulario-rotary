import React, {Fragment} from 'react'
import './css/Footer.css'

const Footer = () => {
    return(
       <footer>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-12 text-center">
                       <h2><strong>VII Conferencia Distrital</strong></h2>
                   </div>
                   <div className="col-12 text-center">
                       <i>Luis Castro Celis y Otty Joo de Castro - Distrito 4465</i>
                   </div>
                   <div className="col-12 text-center">
                       <small>&copy; 2021 Rotary International Distrito 4465</small>
                   </div>
               </div>
           </div>
       </footer>
    )
}

export default Footer;