
const Header = () => {
    return(
        <>
        <div className="header">
            <div className="headerInfo">
                <div className="whatWeDo">What we do</div>
                <div className="customers">Our customers</div>
                <div className="aboutUs">About</div>
                <div className="blog">Blog</div>
            </div>           
            <div className="LogInInfo">
                <div className="LogIn">Log in</div>
                <div className="getDemo">Get a demo <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.267 5.54494V4.31455H14.8225C12.331 4.31455 10.3113 2.69157 10.3113 0.689521V0.332378H8.93336V0.689521C8.93336 2.17943 9.79016 3.50806 11.1286 4.37531H0.641846V5.48259H11.1311C9.79123 6.34981 8.93336 7.67914 8.93336 9.17V9.52714H10.3113V9.17C10.3113 7.16793 12.331 5.54494 14.8225 5.54494H15.267Z" fill="#134A45"/>
                </svg>
                </div>
            </div>
        </div>
        </>
    );

}

export default Header