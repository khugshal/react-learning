import { APP_LOGO_URL } from "../utils/contants";

const Header = () => {
    return <div id="header" className="header">
        <div id="logo-container" className="logo-container">
            <img id="logo" className="logo" src={APP_LOGO_URL}/>
        </div>
        <div id="navigation-component" className="navigation-component">
            <ul id="ul" className="ul">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

export default Header;