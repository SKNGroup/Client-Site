import React, { useEffect } from "react";
import { useIdStore } from "../Sections/Project/idFunc";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/Group21.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { headerScroll, languageOptions } from "./handlefunc";
import { resize, resizeMobile } from "./ModalFunc";
import { HeaderModal } from "./../Sections/Home/homeModal/Modal";
import {  useStatus } from "../../hooks/DynamicLang";
library.add(faBars);



export function Navbar() {
  const setId = useIdStore(state => state.setId);
  const {data:status}=useStatus();
  const [stschck, setStschck] = useState(false);
  const [stsData, setStsData] = useState(null);
  const [headerClass, setHeaderClass] = useState(false);
  const [scounter, setScounter] = useState(0);
  const [isActivate, setIsActivate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState("false");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [Changed, setChanged] = useState(i18n.language);
  console.log(stschck);
  
  useEffect(()=>{
if (status) {
 
  
setStsData(status?.$values)

 
}
  },[status]);


  function handleChanged(e) {
    const newLang = e.target.value;
    setChanged(newLang);
    i18n.changeLanguage(newLang);

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    if (pathParts[1] && ["en-US", "az-AZ", "ru-RU"].includes(pathParts[1])) {
      pathParts[1] = newLang;
      navigate(pathParts.join("/"));
    } else {
      navigate(`/${newLang}${currentPath}`);
    }
  }

  useEffect(() => {
    const modalScroll= () =>headerScroll(scounter,setScounter,setHeaderClass)
    const handleMobile = () => resizeMobile(setIsMobile);
    const handleResize = () => resize(setIsSmall);
    window.addEventListener("resize", handleResize);
    resize(setIsSmall);
    resizeMobile(setIsMobile);
    window.addEventListener("resize", handleMobile);
    window.addEventListener('scroll',modalScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleMobile);
      window.removeEventListener('scroll',modalScroll);
    };
  }, [scounter]);



  return (
    <>
      <header className={`header ${headerClass?'stickyhide':'stickyshow'}`}>
        <div className="header-container">
          {Boolean(isSmall) && (
            <>
              <div
                className="navbar-btn"
                onClick={() => setIsActivate((prew) => !prew)}
              >
                <FontAwesomeIcon icon="fa-solid fa-bars" size="md" />
              </div>
              {Boolean(isSmall) && (
                <div className="navbar-modal">
                  <HeaderModal isActivate={isActivate} setIsActivate={setIsActivate} >
                    {isMobile && (
                      <div className="modal_language">
                        <div className="modal_flag_select">
                          <span
                            className="modal_flag_box"
                            onClick={() => {
                              const list = document.querySelector(
                                ".modal_flag_selected"
                              );
                              list.style.display =
                                list.style.display === "block"
                                  ? "none"
                                  : "block";
                            }}
                          >
                            <img src={languageOptions[i18n.language].flag} />
                            <span className="selected-lang">
                              {languageOptions[i18n.language].name}
                            </span>
                          </span>
                          <ul
                            className="modal_flag_selected"
                            style={{ display: "none" }}
                          >
                            {Object.entries(languageOptions).map(
                              ([lang, { flag, name }]) => (
                                <li
                                  key={lang}
                                  onClick={(e) => {
                                    handleChanged({ target: { value: lang } });
                                    e.currentTarget.parentElement.style.display =
                                      "none";
                                  }}
                                >
                                  <img src={flag} alt={name} />
                                  <span>{name}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    )}
                  </HeaderModal>
                </div>
              )}
            </>
          )}
          <div className="header-logo">
            <img className="logo-img" src={logo} alt="SKN GROUP LOGO" />
          </div>
          {!Boolean(isSmall) && (
            <nav className="nav-lists">
              <ul className="list">
                <li className="list-items">
                  <button
                    className="header-button"
                    onClick={() => {
                      navigate(`/${Changed}/`);
                    }}
                  >
                    {t("home")}
                  </button>
                </li>
                <li className="list-items spec_relative" onMouseOver={()=>setStschck(true)} onMouseOut={()=>setStschck(false)}>
                 
                
                  <button
                    className="header-button"
                    
                    onClick={() => {
                      navigate(`/${Changed}/project`);
                    }}
                  >
                    {t("projects")} 
                  </button> 
                  {/* sss */}
                  {stsData&&(
                    <div className={`status_data ${stschck?'ck_open':'ck_close'}`} onMouseOver={()=>setStschck(true)}>
                      <ul>
                       {stsData.map((el)=>(
                        <li key={el?.id} onClick={() => {
                          setId(el.id);
                          navigate(`/${Changed}/project`);
                        }}>
                          {el.name}
                        </li>
                       ))} 
                      </ul>
                      
                    </div>
                  )}
                </li>
                <li className="list-items">
                  <button
                    className="header-button"
                    onClick={() => {
                      navigate(`/${Changed}/services`);
                    }}
                  >
                    {t("services")}
                  </button>
                </li>
                <li className="list-items">
                  <button
                    className="header-button"
                    onClick={() => {
                      navigate(`/${Changed}/partners`);
                    }}
                  >
                    {t("partners")}
                  </button>
                </li>
                <li className="list-items">
                  <button
                    className="header-button"
                    onClick={() => {
                      navigate(`/${Changed}/aboutus`);
                    }}
                  >
                    {t("company")}
                  </button>
                </li>
                <li className="list-items">
                  <button
                    className="header-button"
                    onClick={() => {
                      navigate(`/${Changed}/contact`);
                    }}
                  >
                    {t("contact")}
                  </button>
                </li>
              </ul>
            </nav>
          )}

          {!isMobile && (
            <div className="header-language">
              <div className="flag-select">
                <span
                  className="flag-box"
                  onClick={() => {
                    const list = document.querySelector(".flag-selected");
                    list.style.display =
                      list.style.display === "block" ? "none" : "block";
                  }}
                >
                  <img src={languageOptions[i18n.language].flag} />
                  <span className="selected-lang">
                    {languageOptions[i18n.language].name}
                  </span>
                </span>
                <ul className="flag-selected" style={{ display: "none" }}>
                  {Object.entries(languageOptions).map(
                    ([lang, { flag, name }]) => (
                      <li
                        key={lang}
                        onClick={(e) => {
                          handleChanged({ target: { value: lang } });
                          e.currentTarget.parentElement.style.display = "none";
                        }}
                      >
                        <img src={flag} alt={name} />
                        <span>{name}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}

        </div>
      </header>
    </>
  );
}
