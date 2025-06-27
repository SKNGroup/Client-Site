
import axios from "axios";
import qs from 'qs';

import { baseUrl, } from "./BaseUrl";

export const fetchapi = {
  get: (lang) => {
    return axios.get(baseUrl, {
      headers: {
        "Accept-Language": lang ,
      },
    });
  },
};

 
export const sliderApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Slider`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  }
}

export const aboutapi={
  get:(lang)=>{
    return axios.get(`${baseUrl}CompanyOverview`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}

export const chooseApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}WhyChooseUs`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const featureApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Feature`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const partnerApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Partner`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}

export const faqApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Faq`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const contentApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}ContactContent`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const infoApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}ContactInfo`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const SocialApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}SocialMedia`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const ServicesApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Service`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const CountryApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Country`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const StatusApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}ConstructionStatus`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const CategoryApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Category`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}
export const CityApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}City`,{
      headers:{
        "Accept-Language": lang,
    }
    })
  }
}

export const ServiceDApi={
  get:(lang,id)=>{
    return axios.get(`${baseUrl}Service/${id}`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}

export const ProjeceDApi={
  get:(lang,id)=>{
    return axios.get(`${baseUrl}Project/${id}`,{
      headers:{
          "Accept-Language": lang,
      }
    })
  }
}


export const filterApi = {
  get: (lang, filtered,skip,start) => {
    

    const rawParams = {
      CategoryId: filtered.categoryId,
      CountryId: filtered.countryId,
      CityId: filtered.cityId,
      StatusId: filtered.statusId,
      MinArea: filtered.min,
      MaxArea: filtered.max,
      Search:filtered.search,
      Page: skip,
      PageSize: start
    };
    const cleanedParams = Object.fromEntries(
      Object.entries(rawParams).filter(
        ([_, value]) => value !== null && value !== undefined && value !== ''
      )
    );
    return axios.get(`${baseUrl}Project/Filter`, {
      params: cleanedParams,
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
      headers: {
        "Accept-Language": lang,
      }
    });
  }
};



export const ProjectSApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Admin/Project/SelectedGet`,{
      headers:{
        "Accept-Language": lang,
    }
    })
  }
}
export const areaApi={
  get:(lang)=>{
    return axios.get(`${baseUrl}Project/TotalArea`,{
      headers:{
        "Accept-Language": lang,
    }
    })
  }
}














































