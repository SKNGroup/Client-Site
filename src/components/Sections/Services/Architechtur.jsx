import React, { useEffect,useState } from "react";
import { useServices } from "../../../hooks/DynamicLang";
import { baseImgUrl } from "../../../axios_services/BaseUrl";




export function Architectur(){
const{data}=useServices();
const [service, setService] = useState([]);
useEffect(()=>{
if (data) {
  
  setService([...data?.$values])
}
},[data])


const reduce=()=>{
let check=true
return ()=>{
if (check) {
  check=false
  return 'design_services'
}
else{
  check=true
  return 'design_reverse'
}
}
}
const total=reduce()

    return (
      <section className="section">
        <div className="section-container">
         {service&&service.map((el,index)=>{
          
          
           if (el.isFeatured) {
            
            return(
              <div className={total()} key={el.id}>
              <div className="design_title_dest">
                <h4 className="service_texture_header">
                 {el.name}
                </h4>
  
                <p className="service_texture_destricption">
                 {el.description}
                </p>
              </div>
              <div className="design_img_box">
                <img
                  className="design_img"
                  src={`${baseImgUrl}${el.mainImage.path}${el.mainImage.fileName}`}
                  alt=""
                />
              </div>
            </div>
            ) 
        
           }
         })}

         
         
        </div>
      </section>
    );
}