
import logo from '../assets/logo.svg'
import iconMenu from '../assets/icon-menu.svg'
import './Header.css'


// eslint-disable-next-line react/prop-types
const Header = ({ onDisplay }) => {
    return (
        <div className='header-div'>
            <div className="brand">
                <img src={logo} alt="brand-logo"/>
            </div>

            <div className="navbar">
                <img onClick={() => onDisplay()} src={iconMenu} alt="menu-icon"/>
            </div>
        </div>
    );
};

export default Header;