import React from "react";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import { useAboutData } from "../../../../hooks/DynamicLang";

export function SectionDescription() {
   const [aboutData, setaboutData] = useState([]);
  const { t } = useTranslation();
const{data}=useAboutData();
useEffect(()=>{
  if (data) {
    setaboutData(data)
  }
},[data])
  return (
    <div className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">{t("ourheading")}</span>
          <h2 className="section-title">{t("ourtittle")}</h2>
        </div>
        <p className="aboutDescription">{aboutData?.historyAndDetails}</p>
       
      </div>
    </div>
  );
}
