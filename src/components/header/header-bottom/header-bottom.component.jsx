import React from 'react';
import './header-bottom.styles.scss'

const HeaderBottom = () => {
    return (
    <div className="bottomNav">
        <div className="container">
            <div className="navcontainer">
                <a className="bottomnav_item active" href="/#">Ana səhifə</a>
                <a className="bottomnav_item " href="/about.html">Haqqımızda</a>
                <a className="bottomnav_item " href="/guide_and_drivers.html">Sürücülər & Bələdçilər</a>
                <a className="bottomnav_item " href="/accomadation.html">Məskən</a>
                <a className="bottomnav_item " href="/flight.html">Uçuş Rezervasiyası</a>
                <a className="bottomnav_item " href="/attractive_locations.html">Cəlbedici Yerlər</a>
                <a className="bottomnav_item " href="/offers.html">Təkliflər</a>
            </div>
        </div>
    </div>
    )
}

export default HeaderBottom;