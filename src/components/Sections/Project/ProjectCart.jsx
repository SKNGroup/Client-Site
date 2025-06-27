import React from "react";
import { baseImgUrl } from "../../../axios_services/BaseUrl";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";



export function ProjectCart({cart}){
const navigate=useNavigate();
const { t,i18n } = useTranslation(); 
const{id,name,storageFile}=cart

const handleClick=()=>{
    sessionStorage.setItem('projectid',id)
    navigate(`/${i18n.language}/project/details`)
    }
    return(
        <div className="alone_cart_box fade-in" onClick={handleClick} >
            <div className="alone_img_box ">
                <img className="alone_img" src={`${baseImgUrl}${storageFile.path}${storageFile.fileName}`}  alt="sss" />
            </div>
            <div className="alone_text_box">
                <p className="alone_text">
                 {name}
                </p>
            </div>
        </div>
    )
}