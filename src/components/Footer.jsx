import React, {Fragment} from 'react'
import './css/Footer.css'

const Footer = () => {
    return(
       <footer className="py-5">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-12 text-center py-3">
                       <h2><strong>VII Conferencia Distrital</strong></h2>
                   </div>
                   <div className="col-12 text-center py-2">
                       <i><strong>Luis Castro Celis y Otty Joo de Castro - Distrito 4465</strong></i>
                   </div>
                   <div className="col-12 text-center py-3">
                       <small>&copy; 2021 Rotary International Distrito 4465</small>
                   </div>
               </div>
           </div>
       </footer>
    )
}

export default Footer;