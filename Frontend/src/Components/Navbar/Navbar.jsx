import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../asserts/logo.png';
import MenuIcon from '../../asserts/Menu.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({ services: false, internships: false });

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const login = useNavigate();

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const toggleDropdown = (menu) => {
        setDropdownOpen(prevState => ({ ...prevState, [menu]: !prevState[menu] }));
    };

    return (
        <nav className={`nav-container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="background" className='navlogo' />
            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li><a href="#home"></a>Home</li>
                <li
                    onMouseEnter={() => toggleDropdown('services')}
                    onMouseLeave={() => toggleDropdown('services')}
                ><a href="#services"></a>
                    Services
                    {dropdownOpen.services && (
                        <ul className='dropdown'>
                            <li><a href="#web"></a>Web Development</li>
                            <li onClick={()=>(login("/android"))}>Android Development</li>
                            <li><a href="website"></a>Website Maintenance</li>
                            <li><a href="#ui/ux"></a>UI/UX Development</li>
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => toggleDropdown('internships')}
                    onMouseLeave={() => toggleDropdown('internships')}
                ><a href="internships"></a>
                    Internships
                    {dropdownOpen.internships && (
                        <ul className='dropdown'>
                            <li><a href="#virutal"></a>Virtual Internship</li>
                            <li><a href="#11days"></a>11days 11projects</li>
                            <li><a href="#traning"></a>Training & Internship (online)</li>
                            <li><a href="#summer"></a>Summer Internship (online/offline)</li>
                        </ul>
                    )}
                </li>
                <li><a href="#lms"></a>LMS</li>
                <li><a href="#about"></a>About Us</li>
                <li><a href="#contact"></a>Contact Us</li>
                <li> <button className='btn' onClick={() => (login("/login"))}> Login</button></li>
            </ul>
            <img src={MenuIcon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
