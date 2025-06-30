import React,{useEffect,useState} from "react";
import { useTranslation } from "react-i18next";
import SKNlogo from "../../assets/image/Group21.png";
import bgImage from "../../assets/image/bg-footer.svg";
import { useNavigate } from "react-router-dom";
import { useContent, useInfo, useSocial } from "../../hooks/DynamicLang";
export function Footer() {
  const [stInfo, setItInfo] = useState([]);
  const [social, setSocial] = useState([]);
 const [cnt, setCnt] = useState([]);
  const{data:info}=useInfo();
  const{data:scl}=useSocial();
  const {data}=useContent();
  useEffect(() => {
    if (data) {
      setCnt(data);
    }
  
    if (Array.isArray(info?.$values)) {
      setItInfo(info.$values);
    } else {
      setItInfo([]);
    }
  
    if (Array.isArray(scl?.$values)) {
      setSocial(scl.$values);
    } else {
      setSocial([]);
    }
  }, [info, scl, data]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <footer className="footer" >
      <div className="footer-container"  >
        <div className="section-container-content">
          <div className="social-content">
            <img className="sknLogo" src={SKNlogo} />
            <p className="social-description">
            {cnt.followOnSocialMedia}
            </p>
            <div className="social-icons">
            {social&&social.map((el)=>(
                <a className="style-none" href={el.link} target="_blank">{<span dangerouslySetInnerHTML={{ __html: el.cdnIcon}}/>}</a>
              ))}
            </div>
          </div>

          <div className="contact-info">
            {stInfo&&stInfo.map((el,index)=>(
              <div className="contact-info-content" key={index}>
              <div dangerouslySetInnerHTML={{ __html: el.cdnIcon}} />
              <div className="contact-spans">
              <span>{el.label}</span>
              <span>{el.value}</span>
              </div>
            </div>
            ))

            }
            </div>
          <div className="company">
            <h4 className="company-header">Company</h4>
            <div className="company-info">
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/aboutus`);
                }}
              >
                {t("company")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/contact`);
                }}
              >
                {t("contact")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/partners`);
                }}
              >
                {t("partners")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/services`);
                }}
              >
                {t("services")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/FAQs`);
                }}
              >
                {t("FAQS")}
              </button>
            </div>
          </div>
        </div>

        <div className="footer-endpoint">
          <p>Copyright © 2025 SKN Group</p>
          <p>Developed By: <a href="http://webnova.az" style="text-decoration: none; color: inherit;">WebNova</a></p>
        </div>
      </div>
    </footer>
  );
}