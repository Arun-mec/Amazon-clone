import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            {/* back to top button  */}
            <div className='footer-back-button'>
                <span>
                    Back to top
                </span>
            </div>
            {/*   */}
            <div className='footer-div'>
                <div className='footer-div-top'>
                    <div className="footer-div-top-contents">
                        <span className="footer-div-top-header">Get to Know Us</span>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Amazon Science</p>
                    </div>
                    <div>cell1</div>
                    <div>cell1</div>
                    <div>cell1</div>
                </div>
                <hr />
                <div className="footer-div-bottom">
                    <div className='footer-div-top'>
                        <div>cell1</div>
                        <div>cell1</div>
                        <div>cell1</div>
                        <div>cell1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer