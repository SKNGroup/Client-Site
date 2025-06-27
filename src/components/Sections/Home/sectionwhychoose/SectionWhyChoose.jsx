import React from "react";
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useChoose, useFeature } from "../../../../hooks/DynamicLang";


export function WhyChooseUs() {
  const{data}=useChoose()
  const{data:ftr}=useFeature();
  const { t } = useTranslation();
  const [feature, setFeature] = useState();
  const [choose, setChoose] = useState([]);
  const [position, setPosition] = useState(false);
  const [count, setcount] = useState({
    project: 0,
    year: 0,
    meters: 0,
    office: 0,
  });
  useEffect(() => {
    if (data) {
      setChoose(data);
    }
  
    if (Array.isArray(ftr?.$values)) {
      setFeature(ftr.$values);
    } else {
      setFeature([]); 
    }
  }, [data, ftr]);
  const countStart = useRef();

  useEffect(() => {
    function handleScroll() {
      if (!countStart.current) return;
      const { bottom } = countStart.current.getBoundingClientRect();
      if (bottom < window.innerHeight) {
        setPosition(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatSquareMeters = (value) => {
    if (value >= 1_000_000) {
      const millions = Math.floor(value / 1_000_000);
      const thousands = Math.floor((value % 1_000_000) / 1_000);
      const firstDigitOfThousands = String(thousands).charAt(0);
      return thousands > 0 ? `${millions}, ${firstDigitOfThousands}M` : `${millions}M`;
    } else if (value >= 1_000) {
      return `${Math.floor(value / 1_000)}K`;
    } else {
      return `${value}`;
    }
  };


  return (
    <section className="section job-stats" ref={countStart}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">
            {t("WhyChooseUs.ourheading")}
          </span>
          <h2 className="section-title ">{t("why-title")}</h2>
        </div>
        <div className="section-content">
          <div className="stats-content">
            <p className="description">{choose.description}</p>
            <ul className="highlights-list">
              {feature&&feature.map((el)=>(<li className="highlight">{el.highlight}</li>))}
            </ul>
          </div>
          <div className="stats">
            <div className="stat">
            <CountUp className="stat-count" end={position?choose.projectsCompleted:count.project} duration={5} />
              <span className="stat-label">PROJECT COMPLETED</span>
            </div>
            <div className="stat">
            <CountUp className="stat-count" end={position?choose.yearsOfExperience:count.year} duration={5} />
              <span className="stat-label">YEARS OF EXPERIENCES</span>
            </div>
            <div className="stat">
            <CountUp className="stat-count" end={position?choose.regionalOffices:count.office} duration={5} />
              <span className="stat-label">REGIONAL OFFICE</span>
            </div>
            <div className="stat">
            <CountUp className="stat-count" end={position?choose.squareMeters:count.meters} duration={5}formattingFn={formatSquareMeters}/> 
            <span className="stat-label">SQUARE METERS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
