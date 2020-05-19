import React, {useState} from 'react';
import './header-center.styles.scss'

import Logo from '../../../img/header/logo.svg';


const HeaderCenter = () =>{

    const [toggle, setToggle] = useState({
        active: false,
      });

    function toggleNav() {
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }


    return (
        <div className="centerNav">
        <div className="container">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="mursheed logo" />
                </a>
            </div>
            <div className="rightContent">
                <div className="currency">
                    <span className="currencyText">Valyuta</span>
                    <form>
                        <select>
                            <option value="0">USD</option>
                            <option value="1">EURO</option>
                            <option value="2">TRY</option>
                        </select>
                    </form>
                </div>
                <div className="language">
                    <span className="langText">Dil</span>
                    <form>
                            <select>
                                    <option value="0">English</option>
                                   <option value="1">Turkey</option>
                                    <option value="2">Germany</option>
                                    <option value="3">France</option>
                            </select>
                    </form>
                </div>
                <div className="loginbuttons">
                    <a href='/login.html' className=" ">Daxil ol</a>
                    <a href="/register.html" className=" ">Qeydiyyat</a>
                </div>
                <div id="hamburger" onClick={toggleNav} className="barIcon">
                    <p className="line"></p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>
            </div>
                <div id="openmenu" className={`${toggle.active ? 'activemenu': ''} container menucontainer`} >
                    <div className="openmenu">
                        <a className="openmenu_item" href="/#">Ana səhifə</a>
                        <a className="openmenu_item" href="/about.html"> Haqqımızda</a>
                        <a className="openmenu_item" href="/guide_and_drivers.html"> Sürücülər & Bələdçilər</a>
                        <a className="openmenu_item" href="/accomadation.html"> Məskən</a>
                        <a className="openmenu_item" href="/flight.html">Uçuş Rezervasiyası</a>
                        <a className="openmenu_item" href="/attractive_locations.html"> Cəlbedici Yerlər</a>
                        <a className="openmenu_item" href="/offers.html">  Təkliflər</a>
                        <a className="openmenu_item" href="/#">Dəstək</a>
                        <a className="openmenu_item" href="/contact.html">Bizimlə Əlaqə</a>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default HeaderCenter;