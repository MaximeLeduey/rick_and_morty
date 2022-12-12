import React from 'react';
import logo from '../assets/img/logo-rick-et-morty.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <React.Fragment>
            <div className='logo'>
                <Link to="/"><img src={logo}></img></Link>
            </div>
            <p className='subtitle'>Rick et Morty, apprentissage de react sans prise de tête</p>
            <div className='languages-logos'>
                <div className='logo-1'>
                    <FontAwesomeIcon icon={faHtml5} size="4x" color="red"/>
                </div>
                <div className='logo-2'>
                    <FontAwesomeIcon icon={faCss3Alt} size="4x" color="blue"/>
                </div>
                <div className='logo-3'>
                    <FontAwesomeIcon icon={faJs} size="4x" color="yellow"/>
                </div>
                <div className='logo-4'>
                    <FontAwesomeIcon icon={faReact} size="4x" color="cyan"/>
                </div>
            </div>
        </React.Fragment>
       
    )
}

export default Header;