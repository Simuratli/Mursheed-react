import React,{ useState } from 'react';

import './header-top.styles.scss';

const HeaderTop = () => {
    const [toggle, setToggle] = useState({
        active: false,
      });
   


    function openButtons(){
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }
    
    return (
        <div className="topNav">
        <div className="container">
            <div className="topnavcontainer">
                <div className="firstcontainer">
                    <div className="currency">
                        <form>
                          <select>
                            <option className="optioncurrency">USD</option>
                            <option className="optioncurrency">AZN</option>
                          </select>
                        </form>
                    </div>
                    <div className="language">
                        <form>
                            <select>
                                <option className="optionlang">Azərbaycan</option>
                                <option className="optionlang">English</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="secondcontainer">
                    <div className="support">
                        <a className="supportItem" href="/support">Dəstək</a>
                        <a className="supportItem" href="/contact">Bizimlə Əlaqə</a>
                    </div>
                    <div id="dropLogBtn" onClick={openButtons} className="profile" >
                        <div id="loggedid" className={toggle.active ? 'open': null} >
                            <a className="loggediditem" href="/#">Daxil ol</a>
                            <a className="loggediditem" href="/register_chosing">Qeydiyyat</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeaderTop;