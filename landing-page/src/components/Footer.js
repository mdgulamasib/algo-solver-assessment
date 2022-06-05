import React from 'react';
import fb from '../images/fb.png'
import ig from '../images/insta.png'
import pin from '../images/pin.png'

const Footer = () => {
    return (
        <footer class="footer footer-center pt-24 text-base-content rounded">
            <div>
                <h1 className='font-bold text-lg  uppercase'>Visit Us</h1>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://facebook.com" target='_blank' rel='noreferer'><img src={fb} width="40px" alt="" /></a>
                    <a href="https://instagram.com" target='_blank' rel='noreferer'><img src={ig} width="40px" alt="" /></a>
                    <a href="https://pinterest.com" target='_blank' rel='noreferer'><img src={pin} width="40px" alt="" /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;