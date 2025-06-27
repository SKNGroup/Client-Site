import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";



export function ProjectNextHeader() {
  const { t, i18n } = useTranslation();
  const navigate=useNavigate();
  return (
    <div className="aboutContainer">
      <h2>Partner</h2>
      <p className="pages_special_hover">
        <span onClick={()=>navigate(`/${i18n.language}/`)}>Home</span> <span>/</span> <span>Partner</span>
        </p>
    </div>
  );
}
