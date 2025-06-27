import React, { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { useProjectSpecial, } from "../../../hooks/DynamicLang";
import { useNavigate } from "react-router-dom";


export function PDetailsHeader() {
 const navigate=useNavigate();
  const { t, i18n } = useTranslation();
  const [Data, setData] = useState({});
  const{data}=useProjectSpecial();
  useEffect(()=>{
  if (!data) return 
   
    
setData({...data})
  
  },[data])
  return (
    <div className="aboutContainer">
      <h2>{Data.name}</h2>
      <p className="pages_special_hover">
        <span onClick={()=>navigate(`/${i18n.language}/`)}>{t('homes')}</span> <span>/</span> <span onClick={()=>navigate(`/${i18n.language}/project`)}>{t('projectss')}</span> <span>/</span>
        <span>{Data.name}</span>
      </p>
    </div>
  );
}