import React from 'react'
import { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'PROJECTS',
        to: '/projects'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },

    {
        label: 'CONTACT',
        to: '/contact'
    }
]
function Navbar() {
    const [toggleIcon, setToggleIcon] = useState(false)
    const handleToggle = () => {
        setToggleIcon(!toggleIcon)
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar__container" >
                    <Link to={"/"} className='navbar__container__logo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, i) => (
                            <li key={i} className='navbar__container__menu__item'>
                                <Link className='navbar__container__menu__item__links' to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav__icon" onClick={handleToggle}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </>
    )
}

export default Navbar