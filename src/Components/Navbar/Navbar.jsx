import React, {useState} from "react";
import './navbar.css'
import {GiHorseHead} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



const Navbar = () => {

const [active, setActive] = useState('navBar')
const showNav = () =>{
    setActive('navBar activeNavbar')
}

const removeNavbar = () =>{
    setActive('navBar')
}

    return (
        <section className="navBarSection"> 
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><GiHorseHead className="icon"/> Navbar</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="/" className="navLink">
                            Home
                        </a>
                    </li>

                    <li className="navItem">
                        <a href="/quiz" className="navLink">
                            Quiz
                        </a>
                    </li>

                    <li className="navItem">
                        <a href="cur" className="navLink">
                            Valute
                        </a>
                    </li>

                    <li className="navItem">
                        <a href="rentanimal" className="navLink">
                            Animals
                        </a>
                    </li>

                    <li className="navItem">
                        <a href="/place" className="navLink">
                            Places
                        </a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">
                            News
                        </a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">
                            Contact
                        </a>
                    </li>

                    <button className="btn">
                        <a href="#">Book Now</a>
                    </button>

                    
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>

        </header>
        </section>
    )
}

export default Navbar;