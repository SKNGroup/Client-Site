import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


export function HeaderModal({ isActivate, setIsActivate ,children}) {
  const { t } = useTranslation();
 const navigate = useNavigate();

 useEffect(()=>{
  document.body.style.overflow=isActivate?'hidden':'auto'
 },[isActivate])
  return (
    <>
      <div className={isActivate ? "wrapper_modal_show" : "wrapper_modal_hide"}>
        <div className="wrapper_modal_btn">
          <div className="wrapper_modal_btn_box">
            <h2>MENU</h2>
            <span className="wrapper_opened" onClick={() => setIsActivate((prew) => !prew)}>
              <FontAwesomeIcon icon={faXmark} color="white" size="md" />
            </span>
          </div>
        </div>
        <div className="wrapper_modal_body">
          <ul className="wrapper_modal_list">
            <li className="wrapper_modal_list-items">
              <button
                className="wrapper_modal_list_button"
                onClick={() => {
                 setIsActivate((prew) => !prew);
                  navigate("/");
                }}
              >
                {t("home")}
              </button>
            </li>
            <li className="wrapper_modal_list-items">
              <button
                className="wrapper_modal_list_button"
                onClick={() => { 
                 setIsActivate((prew) => !prew);   
                  navigate("/project");
                }}
              >
                {t("projects")}
              </button>
            </li>
            <li className="wrapper_modal_list-items">
              <button
                className="wrapper_modal_list_button"
                onClick={() => {
                  setIsActivate((prew) => !prew);  
                  navigate("/services");
                }}
              >
                {t("services")}
              </button>
            </li>
            <li className="wrapper_modal_list-items">
              <button
                className="wrapper_modal_list_button"
                onClick={() => {
                  setIsActivate((prew) => !prew);  
                  navigate("/partners");
                }}
              >
                {t("partners")}
              </button>
            </li>
            <li className="wrapper_modal_list-items">
              <button
                className="wrapper_modal_list_button"
                onClick={() => {
                  setIsActivate((prew) => !prew);  
                  navigate("/aboutus");
                }}
              >
                {t("company")}
              </button>
            </li>
            <li className="wrapper_modal_list-items">
              <button
                className="wrapper_modal_list_button"
                onClick={() => {
                  setIsActivate((prew) => !prew);  
                  navigate("/contact");
                }}
              >
                {t("contact")}
              </button>
            </li>
          </ul> 
          {children}
        </div>
      </div>
    </>
  );
}