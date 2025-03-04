const Header = () => {
    return <div id="header" className="header">
        <div id="logo-container" className="logo-container">
            <img id="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd20W8Lhn6wMGxPRFNabFqZDP0VQJ9J6sPEg&s"/>
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