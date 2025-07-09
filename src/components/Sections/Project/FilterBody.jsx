import React, { useEffect } from "react";
import { useState } from "react";
import { useArea, useCategory, useCity, useCountry, useStatus } from "../../../hooks/DynamicLang";
import { useTranslation } from "react-i18next";
import { useIdStore } from "./idFunc";

export  function FilterBody({setSendData,refetch,setSkip,setCheckbtn,setItem,setStart}){
  const { t, i18n } = useTranslation();
  const sendId=useIdStore(state => state.id);
 const{data:totalArea}=useArea(); 
const{data:country}=useCountry();
const{data:status}=useStatus();
const{data:category}=useCategory();
const{data:city,refetch:cityRestart}=useCity();
const [activeIndex, setActiveIndex] = useState([]);
const [ctId, setCtId] = useState(null);
const [stId, setStId] = useState(null);
const [ctgryId, setCtgryId] = useState(null);
const [ctData, setCtData] = useState([]);
const [ctyId, setCtyId] = useState([]);
const [stData, setStData] = useState([]);
const [cityData, setCityData] = useState([]);
const [total, setTotal] = useState('');
const [ctgryData, setCtgryData] = useState([]);
const [searchVal, setSearchVal] = useState('');
const [area, setArea] = useState({
    min:'',
    max:''
});

useEffect(()=>{
if(sendId){
setStId(sendId);
}
},[sendId])
const handleDelete=()=>{
    setCtId(null);
    setCtyId([]);
    setStId(null);
    setCtgryId(null);
    setCityData([])
    setArea({
        min:'',
        max:''
    })

    setSendData({
        cityId:'',
        countryId:'',
        categoryId:'',
        statusId:'',
        min:'',
        max:''
      })
      setItem([])
      setSkip(1);

      setTimeout(() => {
        refetch().then(res => {
          const newData = res?.data?.$values || [];
         
          
          setItem(newData);         
          setCheckbtn(newData.length > 0); 
        });
      }, 0);
    setStart(12)
    cityRestart()
}
useEffect(()=>{
if (country) {
    setCtData([...country?.$values])
}
if (status) {
    setStData([...status?.$values])
}
if (category) {
    setCtgryData([...category?.$values])
}
if (totalArea) {
  setTotal(totalArea)
}

},[country,status,category])

const handleClick=(e)=>{
  const value=e.currentTarget.id
  setActiveIndex(prev =>
    prev.includes(value)
      ? prev.filter(el => el !== value)
      : [...prev, value]
  );
  
}

useEffect(()=>{
    if (city) {
      
      
       const cData=[...city?.$values]; 
       let filtered=ctId? cData.filter((el)=>el.countryId===ctId):[...cData];
       if (searchVal) {
        filtered=filtered.filter((el)=>el.cityName.toLowerCase().includes(searchVal.toLowerCase()))
       }
       
      setCityData(filtered)
    }
},[ctId,city,searchVal,ctyId])

useEffect(()=>{
  setSkip(1)
  if (ctId) {
     setStart(6)
  }
 
  setItem([])
setSendData((prew)=>({...prew,cityId: ctyId.length === 0 ? null : ctyId,countryId:ctId,categoryId:ctgryId,statusId:stId, min: area.min === "" ? null : Number(area.min), max: area.max === "" ? null : Number(area.max)}))
},[ctyId,ctId,ctgryId,stId,area])


    
   
    
   
   


    return(
        <div className="form_body">
          <div className="filter_list_box">
            <div className="filter_list_header"
             id='1'
              onClick={handleClick}
            >
                <div className="filter_header_left">
                <h4 className="filter_h_context">{t('country')}</h4>
                </div>
                <div className="filter_icon_box">
                <span> <i className={`fa-solid fa-arrow-up icon-transition ${activeIndex.includes('1') ? "rotated" : ""}`}></i></span>
                </div>
            </div>
            <div className={ activeIndex.includes('1')  ? "faqs_questions_footer_show": "faqs_questions_footer_hide" } >
              <ul className="filter_ul">
                {ctData && ctData.map((el)=>(
                    <li className={`filter_li ${ctId === el.id ? "active" : "passive"}`} key={el.id} onClick={() => (setCtId(el.id), setCtyId([]))}><span className="line"></span>{el.countryName}</li>
                ))}
                </ul>
               
            </div>
          </div>

          <div className="filter_list_box">
            <div className="filter_list_header"
             id='2'
              onClick={handleClick}
            >
                <div className="filter_header_left">
                <h4 className="filter_h_context">{t('city')}</h4>
                </div>
                <div className="filter_icon_box">
                <span> <i className={`fa-solid fa-arrow-up icon-transition ${activeIndex.includes('2') ? "rotated" : ""}`}></i></span>
                </div>
            </div>
            <div className={ activeIndex.includes('2')  ? "faqs_questions_footer_show": "faqs_questions_footer_hide" } >
              <div className="filter-special">
                <div className="input-box">
                <i className="fa fa-search search-icons"></i>
                 <input className="searced" type="search" placeholder="Search" onChange={(e)=>setSearchVal(e.target.value)}/> 
                </div>
            
              <ul className="filter_ul_searced">
              
                {cityData && cityData.map((el)=>(
                     
                    <li className={`filter_li ${ctyId.includes(el.id)? "active" : "passive"}`} key={el.id} onClick={()=>setCtyId((prew)=>{
                        const value=el.id
                        return prew?.includes(value)?prew.filter((el)=>el!==value):[...prew,value]
                    })}><span className="line"></span>{el.cityName}</li>
                ))}
                </ul>  
                <div className="selected_box">
                  {ctyId.length>0&&
                  cityData
                  .filter(el => ctyId.includes(el.id))
                  .map(el => <span key={el.id} className="selected_one">{el.cityName} <button onClick={()=>setCtyId((prew)=>prew.filter((id)=>id!==el.id))}>X</button></span>)
                  }  
                </div>  
            </div>
            </div>
          </div>

          <div className="filter_list_box">
            <div className="filter_list_header"
             id='3'
              onClick={handleClick}
            >
                <div className="filter_header_left">
                <h4 className="filter_h_context">{t("status")}</h4>
                </div>
                <div className="filter_icon_box">
                <span> <i className={`fa-solid fa-arrow-up icon-transition ${activeIndex.includes('3') ? "rotated" : ""}`}></i></span>
                </div>
            </div>
            <div className={ activeIndex.includes('3')  ? "faqs_questions_footer_show": "faqs_questions_footer_hide" } >
              <ul className="filter_ul">
                {stData && stData.map((el)=>(
                    <li className={`filter_li ${stId === el.id ? "active" : "passive"}`} key={el.id} onClick={()=>setStId(el.id)}><span className="line"></span>{el.name}</li>
                ))}
                </ul>  
            </div>
          </div>

          <div className="filter_list_box">
            <div className="filter_list_header"
             id='4'
              onClick={handleClick}
            >
                <div className="filter_header_left">
                <h4 className="filter_h_context">{t('category')}</h4>
                </div>
                <div className="filter_icon_box">
                <span> <i className={`fa-solid fa-arrow-up icon-transition ${activeIndex.includes('4') ? "rotated" : ""}`}></i></span>
                </div>
            </div>
            <div className={ activeIndex.includes('4')  ? "faqs_questions_footer_show": "faqs_questions_footer_hide" } >
              <ul className="filter_ul">
                {ctgryData && ctgryData.map((el)=>(
                    <li className={`filter_li ${ctgryId === el.id ? "active" : "passive"}`} key={el.id} onClick={()=>setCtgryId(el.id)}><span className="line"></span>{el.name}</li>
                ))}
                </ul>  
            </div>
          </div>

          <div className="filter_list_box">
            <div className="filter_list_header"
             id='5'
              onClick={handleClick}
            >
                <div className="filter_header_left">
                <h4 className="filter_h_context">{t('area')}</h4>
                </div>
                <div className="filter_icon_box">
                <span> <i className={`fa-solid fa-arrow-up icon-transition ${activeIndex.includes('5') ? "rotated" : ""}`}></i></span>
                </div>
            </div>
            <div className={ activeIndex.includes('5')  ? "faqs_questions_footer_show": "faqs_questions_footer_hide" } >
              <ul className="filter_ul">
                 <li className="filter_li_speci">{total.minArea}-{total.maxArea} m²</li>
                 <li className="filter_li_speci"><span className="black_box">Min</span><input className="areas" type="number" value={area.min} placeholder={`${total.minArea} m²`} onChange={(e)=>setArea((prew)=>({...prew,min:e.target.value}))} onKeyDown={e => /^[0-9]$/.test(e.key) && parseInt(e.target.value + e.key) < Number(total.minArea) && e.preventDefault()}/></li>
                 <li className="filter_li_speci"><span className="black_box">Max</span><input className="areas" type="number" value={area.max} placeholder={`${total.maxArea} m²`} onChange={(e)=>setArea((prew)=>({...prew,max:e.target.value}))} onKeyDown={e => /^[0-9]$/.test(e.key) && parseInt(e.target.value + e.key) > Number(total.maxArea) && e.preventDefault()}/></li>
                 
                </ul>  
            </div>
          </div>

          <div className="clear_filter">
            <button className="clear_btn" onClick={handleDelete}><span>{t('clear')}</span> <span>X</span></button>
          </div>
        </div>

    )
}


