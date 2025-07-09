import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { ProjectCart } from "./ProjectCart";
import { useProjectData } from "./../../../hooks/DynamicLang";
import {FilterBody} from './FilterBody';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from "react-i18next";
import { ProjectModal } from "./ProjectModal";
import { resize,resizeBtn } from "../../Navbar/ModalFunc";


export function ProjectFilter() {
  const qc = useQueryClient();
const {t, i18n } = useTranslation();
  const Lang = i18n.language;
  const [fiterOpened, setFlterOpened] = useState(false);
  const [item, setItem] = useState([]);
  const [start, setStart] = useState(12);
  const [isFalse, setisFalse] = useState(false);
  const [isTrue, setisTrue] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [Search, setSearch] = useState('');
  const [sendData, setSendData] = useState({
    cityId:'',
    countryId:'',
    search:'',
    categoryId:'',
    statusId:'',
    min:'',
    max:''
  });
  const [checkbtn, setCheckbtn] = useState(true);
  const [skip, setSkip]   = useState(1);
  const { data=[], refetch } = useProjectData( skip, sendData,start);
  
  useEffect(()=>{
  const handleBtn = () => resizeBtn(setisFalse)
    const handleResize = () => resize(setIsSmall);
    handleResize();
    handleBtn();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleBtn);
    if (isSmall) {
      document.body.style.overflow=fiterOpened?'hidden':'auto'
    }
    

    return()=>{
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleBtn);
    }
   },[fiterOpened])

  function GoBack() {
    setCheckbtn(true)
    setSkip(1);
    
    window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
  }
const viewMore = () => {
    setSkip(prev => prev + 1);
    qc.removeQueries(['getProject', Lang, skip]);
    
  }; 



useEffect(() => {
  window.scrollTo({ top: 600, left: 0, behavior: 'smooth' });
  if (data?.$values?.length>0) {
    setItem(prev=>skip===1?data?.$values:[...prev, ...data?.$values]); 
  
  setCheckbtn(true);
  }else{
    setCheckbtn(false)
  }
    
    }, [data, skip, isSmall]);  
   

   const handleSend=()=>{
    if (isFalse) {
      setisTrue(true)
    }
    
   setSendData((prew)=>({...prew,search:Search})) 
   setSkip(1);
  

   }
   
   
  return (
    <div className="section">
      <div className="section_containers">
        <div className="filter_and_search_body">
          {!isFalse&&( <div className='filtered_btn_box' >
            <button
              className="filtered_btn"
              onClick={() => setFlterOpened((prew) => !prew)}
            >
              <span className="p_icon">
                <i
                  className="fa-solid fa-filter fa-lg"
                  style={{ color: "#fafafa" }}
                ></i>
              </span>
              <span className="p_text">{t('filter')}</span>
            </button>
          </div>)}

          {isFalse&&(
             <div className={`filtered_btn_box ${isTrue?'d-none':''}`}>
            <button
              className="filtered_btn"
              onClick={() => setFlterOpened((prew) => !prew)}
            >
              <span className="p_icon">
                <i
                  className="fa-solid fa-filter fa-lg"
                  style={{ color: "#fafafa" }}
                ></i>
              </span>
              <span className="p_text">{t('filter')}</span>
            </button>
          </div>
          )}
             
          <div className="search_box">
            {!isFalse&&(
              <div className='search_inp_box' >
              <i className="fa fa-search search-icon"></i>
              <input
                type="search"
                placeholder={t('get')}
                className="search-input"
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
              />
            </div>
            )}
               {isFalse&&(
             <div className={`search_inp_box ${isTrue?'':'d-none'}`}>
              <i className="fa fa-search search-icon"></i>
              <input
                type="search"
                placeholder={t('get')}
                className="search-input"
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
              />
            </div>
               )}
           {(isFalse&&isTrue)&&(<button className="closes" onClick={()=>setisTrue(false)}>X</button>)}
            <div className="search_btn_box">
              <button className="search_btn" onClick={handleSend}>{t("search")}</button>
            </div>
          </div>
        </div>
        <div className={`filter_and_cart_body ${fiterOpened? 'gapped':''}`} >
          {!isSmall&&(
             <div className={`filtered_body ${fiterOpened ? "f_opened" : "f_closed"}`}>
          <FilterBody setSendData={setSendData} refetch={refetch} setSkip={setSkip} setCheckbtn={setCheckbtn} setItem={setItem} setStart={setStart}/>
          </div>
          )}
         
         {isSmall&&(
            <div className={fiterOpened?"filter_show":"filter_modal"}>
            <ProjectModal filterOpened={fiterOpened} setFilterOpened={setFlterOpened}>
            <FilterBody setSendData={setSendData} refetch={refetch} setSkip={setSkip} setCheckbtn={setCheckbtn} setItem={setItem} setStart={setStart}/>
            </ProjectModal>
          </div>
          )}
          
          <div className="cart_list_body">
            <div
              className={fiterOpened ? "cart_list_sort_two" : "cart_list_sort_one"}>
              {item.length>0 ? (item.map((cart, index) => (
                <>
                  <ProjectCart key={index} cart={cart} />
                  </>
                ))):(<p className="warning">{t("not")}</p>)
              }
               
            </div>
            <div className="add_btn_box">
              {Boolean(checkbtn) ? (
                <button
                  className="add_btn"
                  onClick={viewMore}
                >
                {t("view-more")}
                </button>
              ) : (
                <button className="add_btn" onClick={GoBack}>
                {t("back")}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
