
import closeIcon from '../assets/icon-menu-close.svg';
import './NavModal.css';


// eslint-disable-next-line react/prop-types
const NavModal = ({ onDisplay, display }) => {
    
    return (
        <div className='modal-backdrop' style={{ 
           display: display ? "flex" : "none" 
        }}>
            <div className="nav-modal">
                <div className="nav-header">
                    <button onClick={ () => onDisplay() } style={{ background: 'none', border: 'none'}}><img src={closeIcon}/></button>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default NavModal;