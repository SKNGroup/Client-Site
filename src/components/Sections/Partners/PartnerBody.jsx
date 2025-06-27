import React, { useCallback } from "react";
import { baseImgUrl } from "../../../axios_services/BaseUrl";
import { useState, useEffect } from "react";
import { Partnermodal } from "./PartnerModaj";
import { usePartner, usePartnerData } from "../../../hooks/DynamicLang";



export function Partnerbody() {
  const [partners, setPartners] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState(false);
  const [modalData,setModalData] = useState([]);
  const{data}=usePartner();
useEffect(()=>{
    if (data) {
        setPartners([...data?.$values]);
    }
},[data]);
useEffect(()=>{
document.body.style.overflow =selectedPartners?'hidden':'' 
},[selectedPartners])
  const handlePartnerClick = (partner) => {
    setModalData(partner);
    setSelectedPartners(true);
  };
  return (
     <section className="section partners">
        <div className="section-container">
          <div className="section-content">
            <div className="partners-container">
              {Boolean(partners) && partners.map((partner) => (
                <div
                  className="partners-lists"
                  key={partner.id}
                  onClick={() => handlePartnerClick(partner)}
                >
                  <img src={`${baseImgUrl}${partner.imageFile.path}${partner.imageFile.fileName}`} alt={partner.name} />
                </div>
              ))}
            </div>
              {selectedPartners && (<Partnermodal data={modalData} setstate={setSelectedPartners}/>)}
          </div>
        </div>
      </section>
    
  );
}