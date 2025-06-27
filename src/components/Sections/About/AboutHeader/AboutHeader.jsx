import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export function SectionHeader() {
  const { t, i18n } = useTranslation();
  const navigate=useNavigate();
  return (
    <div className="aboutContainer">
      <h2>{t('companys')}</h2>
      <p className="pages_special_hover">
        <span onClick={()=>navigate(`/${i18n.language}/`)}>{t('homes')}</span> <span>/</span> <span>{t('companys')}</span>
        </p>
    </div>
  );
}
