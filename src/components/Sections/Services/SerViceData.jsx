import React, { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { Scart } from "./ServicesCart";
import { useServices } from "../../../hooks/DynamicLang";
import { useNavigate } from "react-router-dom";

export function ServiceData() {
  const navigate=useNavigate()
  const{data}=useServices();
  const [service, setService] = useState([]);
  const [count, setcount] = useState(6);
  const [isCheck, setisCheck] = useState(true);
  const { t,i18n } = useTranslation();
  useEffect(()=>{
    if (data) {
        const success=[...data?.$values]
        if (count>=success.length) {
            setisCheck(false)
        }
        const filterData=success.slice(0,count)
        setService(filterData)
       
    }
  },[data,count])

  return (
    <section className="section full servicess">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">
            {t("h-sectionthree.ourheading")}
          </span>
          <h2 className="section-title">{t("h-sectionthree.ourtittle")}</h2>
        </div>

        <div className="section-content">
          <div className="speci-service-card-box">
            {Boolean(service) &&
              service.map((el) => <Scart key={el.id} cards={el} />)}
          </div>
        </div>
        <div className="more-service-btn-box">
            {isCheck&&( <button className="more-serive-btn" onClick={()=>setcount((prew)=>prew+3)}>
            {t("h-sectionthree.moreservice")}
          </button>)}
         {!isCheck&&( <button className="more-serive-btn" onClick={()=>{setcount(6);setisCheck(true); window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });}}>
            {t('back')}
          </button>)}
        </div>
      </div>
    </section>
  );
}

