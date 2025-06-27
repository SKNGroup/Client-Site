import React, { useEffect } from "react";
import { FaqsHeader } from "../../components/Sections/Faqs/FaqsHeader";
import { FaqsBody } from "../../components/Sections/Faqs/FaqsBody";



export function FAQs(){
useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])
    return (
      <>
      <div className="body">
         <FaqsHeader/>
         <FaqsBody/>
      </div>
     
      </>
    );
}