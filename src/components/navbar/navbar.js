import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
    const[showMenu, setShowMenu] = React.useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="Logo"/>
            <div className="desktopMenuList">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Sobre Mi </Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portafolio </Link>
                <Link activeClass="active" to="contactSection" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contacto </Link>

            </div>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}} >
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Sobre Mi </Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portafolio </Link>
                <Link activeClass="active" to="contactSection" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contacto </Link>
                
            </div>



        </nav>
    );
};
export default Navbar;