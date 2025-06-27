import React, { useEffect ,useState } from "react";
import { useContent } from "../../../../hooks/DynamicLang";




export function ContactMap(){
 const {data}=useContent();
const [Data, setData] = useState('');
 useEffect(()=>{
 if (data) {
  setData(data?.mapIframeSrc)
 }
 },[data])


    return (
      <section className="section">
       <div className="mapped"> 
        <iframe 
        className="map-speci"
          src={Data}
         
          style={{
            border: 0,
            display: 'block',
            margin: 0,
            padding: 0
              }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ariaHidden="false"
          tabIndex="0"
          title="Google Map"
        ></iframe>
        </div>
      </section>
    );
}