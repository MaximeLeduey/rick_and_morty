import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons' 
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons' 


function Card({ title, image, subtitle, id}) {

    const user_id = `/single/${id}`;

    return (
        <div className="card">
            <div className="card_image_container">
                <img className="card_image" src={image}></img>
            </div>
            <p className="card_title">{title}</p>
            <p className="card_subtitle"><FontAwesomeIcon icon={faLocationDot} className="card_subtitle_icon"/>{subtitle}</p>
            <Link to={user_id} className="link_btn"><button className="card_btn">Détails <FontAwesomeIcon icon={faCircleArrowRight} className="card_subtitle_icon"/></button></Link>
        </div>
    )
}

export default Card;