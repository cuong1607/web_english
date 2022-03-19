import React from 'react'
import './style.css'
import Logo from '../../access/Capture.PNG'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer--block'>
            <img className='footer--block--img' src={Logo}></img>
            <div className='footer--block--company'>
                <h2 className='footer--block--company--contact'>ENGLISH FOR KID</h2>
                <h3 className='footer--block--company--contact-h3'>The English training system is trusted. Specializing in Teaching:</h3>
                <ul className='footer--block--company--contact-ul'>
                  <li>English for children, teenagers for children from 3 to 16 years old.</li>
                  <li>International certificate exam preparation.</li>
                  <li>English communication.</li>
                  
                </ul>
            </div>

            <div className='footer--block--contact'>
                <h2 className='footer--block--company--contact'>GET IN TOUCH</h2>
                <h3 className='footer--block--company--contact-h3'>Don't hesitate to contact us for the best services.</h3>
                <ul className='footer--block--company--contact-ul'>
                  <li>Address: Số 55 đường Giải Phóng, Hai Bà Trưng, Hà Nội</li>
                  <li>Phone: +84 12 34 56 78</li>
                  <li>Email:dhxaydung@huce.edu.vn</li>
                </ul>
            </div>

            <div className='footer--'>

            </div>
        </div>
    </div>
  )
}
