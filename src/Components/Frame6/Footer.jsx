const Footer = () => {
    return(
        <>
        <div className="footer">
        <div className="containerGreen">
            <div className="newsletter">
                <h4 className="newsletterH4">Get our newsletter.</h4>
                <p className="newsletterP">Violet's health equity newsletter
                   includes the latest industry news, 
                   cultural competence education, 
                   and company updates.
                </p>
                <button className="newsletterButton">Subscribe</button>
            </div>
            <div className="reviewBoard">
                <img className="reviewBoardImg" src="./img/board.png" alt="" />
                <div className="blogFooter">
                    <p className="blogFooterP">Blog</p>
                    <h4 className="blogFooterH4">Announcing Violet’s 2023 Clinical Review Board.</h4>
                    <p className="blogFooterP2">Read now</p>
                    <div className="lineReadNow"></div>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <footer>
            <p className="footerP">Powering culturally competent care at scale.</p>
            <div className="socialMedia">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6429 0.439453H4.84416C2.32008 0.439453 0.273193 2.48634 0.273193 5.01043V17.8092C0.273193 20.3333 2.32008 22.3801 4.84416 22.3801H17.6429C20.168 22.3801 22.2139 20.3333 22.2139 17.8092V5.01043C22.2139 2.48634 20.168 0.439453 17.6429 0.439453ZM7.58674 17.8092H4.84416V7.75301H7.58674V17.8092ZM6.21546 6.59381C5.33234 6.59381 4.61561 5.8716 4.61561 4.98118C4.61561 4.09075 5.33234 3.36854 6.21546 3.36854C7.09856 3.36854 7.8153 4.09075 7.8153 4.98118C7.8153 5.8716 7.09948 6.59381 6.21546 6.59381ZM18.5571 17.8092H15.8146V12.686C15.8146 9.60702 12.1577 9.84009 12.1577 12.686V17.8092H9.4152V7.75301H12.1577V9.36655C13.434 7.00245 18.5571 6.82785 18.5571 11.6301V17.8092Z" fill="#CBD0D5"/>
                </svg>
                <br />
                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 3.23203C25.0434 3.66137 24.0153 3.95051 22.9363 4.08084C24.0381 3.41384 24.8842 2.35694 25.2818 1.09742C24.2515 1.71513 23.1097 2.16418 21.8942 2.40622C20.9224 1.35808 19.5347 0.703125 18.0007 0.703125C14.5567 0.703125 12.0261 3.95161 12.8039 7.32384C8.372 7.09932 4.44167 4.95265 1.81025 1.68994C0.41275 4.1137 1.0855 7.28441 3.46017 8.89003C2.587 8.86156 1.76367 8.61951 1.04542 8.21537C0.986917 10.7136 2.75817 13.0509 5.3235 13.5711C4.57275 13.777 3.7505 13.8252 2.91417 13.6631C3.59233 15.8054 5.56183 17.3639 7.8975 17.4078C5.655 19.1853 2.82967 19.9794 0 19.642C2.36058 21.1721 5.16533 22.0647 8.177 22.0647C18.0808 22.0647 23.6763 13.6084 23.3382 6.0238C24.3804 5.26261 25.285 4.31303 26 3.23203Z" fill="#CBD0D5"/>
                </svg>
                <img src="" alt="" />
            </div>
            <div className="whatWedoFooter">
               <h4>What we do</h4>
               <p>Credentialing</p>
               <p>Upskilling</p>
               <p>Customers</p>
               <p>Log In</p>
            </div>
            <div className="AboutUsFooter">
            <h4>About us</h4>
               <p>Our mission</p>
               <p>Our team</p>
               <p>Our educators</p>
               <p>Careers</p>
               <p>Blog</p>
               <p>Newsletter</p>
            </div>
            <div className="contactFooter">
            <h4>Contact</h4>
               <p>Press</p>
               <p>Contact</p>
               <p>Privacy</p>
               <p>Terms of service</p>
            </div>
        </footer>
        </div>
        </>
    );
}

export default Footer;