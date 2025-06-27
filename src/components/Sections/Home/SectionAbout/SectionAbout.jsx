import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';
import { useAboutData } from "../../../../hooks/DynamicLang";
import { baseImgUrl } from "../../../../axios_services/BaseUrl";



export function SectionBuilding() {
  const [aboutData, setaboutData] = useState([]);
   const { t } = useTranslation(); 

const{data}=useAboutData();
useEffect(()=>{
  if (data) {
    setaboutData(data)
  }
},[data])
   
 
   
  return (
    <>
      <section className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">
              {t("h-sectiontwo.subheading")}
            </span>
            <h2 className="section-title">{t("h-sectiontwo.title")}</h2>
          </div>

          <div className="section-content">
            <article className="text-content">
              <p className="description">{aboutData.servicesSummary}</p>

              <div className="block">
                <div className="info-block">
                  <h3 className="info-title">
                    {t("h-sectiontwo.whoWeAreTitle")}
                  </h3>
                  <p className="info-text">{aboutData.whoWeAre}</p>
                </div>
              </div>
              <div className="block">
                <div className="info-block">
                  <h3 className="info-title">
                    {t("h-sectiontwo.missionTitle")}
                  </h3>
                  <p className="info-text">{aboutData.mission}</p>
                </div>
              </div>
            </article>

            <figure className="image-wrapper">
              <img src={`${baseImgUrl}${aboutData?.imageFile?.path}${aboutData?.imageFile?.fileName}`} alt="glass building" className="image" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}




