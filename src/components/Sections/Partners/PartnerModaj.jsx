import React from "react";
import { baseImgUrl } from "../../../axios_services/BaseUrl";



export function Partnermodal({data,setstate}){

const closeModal = () => {
    setstate(false);
  };
    




    return(
         <div className="partner-modal-backdrop" onClick={closeModal}>
                   <div className="section-modal">
                  <div
                    className="partner-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img className="logos" src={`${baseImgUrl}${data.imageFile.path}${data.imageFile.fileName}`} />

                    <div className="partner-modal-des">
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                       
                      
                    </div>
                  </div>
                </div>
            </div>
    )
}