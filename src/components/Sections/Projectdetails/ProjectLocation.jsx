import React, { useEffect,useState } from "react";
import { useProjectSpecial } from "../../../hooks/DynamicLang";

export function ProjectLocation() {
const [Data, setData] = useState({});
  const{data}=useProjectSpecial();
    useEffect(()=>{
    if (!data) return 
      
      
  setData({...data})
    
    },[data])


  return (
    <div className="body location-background">
      <section className="section partners">
        <div className="section-container">
          <div className="section-content project-location">
                <div className="location-list">
                  <i class="fa-solid fa-location-dot"></i>
                  <div className="location-list-info">
                    <span className="location-first-span">Location</span>
                    <span className="location-second-span">{Data?.city?.countryName}, {Data?.city?.cityName} </span>
                  </div>
                </div>
                <div className="location-list">
                <i class="fas fa-ruler-combined"></i>
                  <div className="location-list-info">
                    <span className="location-first-span">Total Area</span>
                    <span className="location-second-span">{Data?.totalArea} m²</span>
                  </div>
                </div>
                <div className="location-list">
                  <i class="fa-solid fa-boxes-stacked"></i>
                  <div className="location-list-info">
                    <span className="location-first-span">APARTMENTS</span>
                    <span className="location-second-span">{Data?.apartmentCount}</span>
                  </div>
                </div>
                <div className="location-list">
                <i class="fa-solid fa-house-flood-water"></i>
                  <div className="location-list-info">
                    <span className="location-first-span">FLOORS</span>
                    <span className="location-second-span">{data?.floor}</span>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
}