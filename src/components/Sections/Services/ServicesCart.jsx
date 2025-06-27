import React from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { baseImgUrl } from "../../../axios_services/BaseUrl";
import { useNavigate } from "react-router-dom";



export function Scart({cards}){
const { t,i18n } = useTranslation(); 
const{name,description,icon,id}=cards;
const navigate=useNavigate()

const handleClick=()=>{
sessionStorage.setItem('serviceid',id)
navigate(`/${i18n.language}/service/details`)
}

    return (
      <>
        <div className="service-specialist">
          <div className="service-img-box">
            <img className="alfa" src={`${baseImgUrl}${icon?.path}/${icon?.fileName}`} />
          </div>
          <div className="service-cart-text">
            <h4 className="cart-tittle">{name}</h4>
            <p className="cart-text">{description}</p>
          </div>
          <div className="cart-btn-box">
            <button className="more-btn"  onClick={handleClick}>
              <span className="cart-mini-more">
                {t("h-sectionthree.moreservice")}
              </span>
              <span className="icon_black">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="fa-rotate-by fa-md"
                  
                />
              </span>
              
            </button>
          </div>
        </div>
      </>
    );
}