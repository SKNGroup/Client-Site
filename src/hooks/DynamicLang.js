import { useTranslation } from "react-i18next";
import { useQuery, useInfiniteQuery,useQueryClient } from "@tanstack/react-query";
import {
  aboutapi,
  areaApi,
  CategoryApi,
  chooseApi,
  CityApi,
  contentApi,
  CountryApi,
  faqApi,
  featureApi,
  fetchapi,
  filterApi,
  infoApi,
  partnerApi,
  ProjeceDApi,
  ProjectSApi,
  ServiceDApi,
  ServicesApi,
  sliderApi,
  SocialApi,
  StatusApi,
} from "../axios_services/AxiosLangService";

export const useDynamicLang = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["translateValue", Lang],
    queryFn: () => fetchapi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useDynamicSlider = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["siteSlider", Lang],
    queryFn: () => sliderApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
   
  });
};


export const useChoose = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["choose", Lang],
    queryFn: () => chooseApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useFeature = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["feature", Lang],
    queryFn: () => featureApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const usePartner = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["partners", Lang],
    queryFn: () => partnerApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useAboutData = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["About", Lang],
    queryFn: () => aboutapi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useFaq = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["faaq", Lang],
    queryFn: () => faqApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useContent = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["content", Lang],
    queryFn: () => contentApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useInfo = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["info", Lang],
    queryFn: () => infoApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useSocial = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["socials", Lang],
    queryFn: () => SocialApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useServices = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["srvce", Lang],
    queryFn: () => ServicesApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useCountry = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["coutry", Lang],
    queryFn: () => CountryApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useStatus = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["statuss", Lang],
    queryFn: () => StatusApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useCategory = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["categoryss", Lang],
    queryFn: () => CategoryApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useCity = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["cities", Lang],
    queryFn: () => CityApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const useServiceSpecial = () => {
  const { i18n } = useTranslation();
  const id=sessionStorage.getItem('serviceid')
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["specis", Lang,id],
    queryFn: () => ServiceDApi.get(Lang,id).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};



export const useProjectSpecial = () => {
  const { i18n } = useTranslation();
  const id=sessionStorage.getItem('projectid');
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["ebsc", Lang,id],
    queryFn: () => ProjeceDApi.get(Lang,id).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};


export const useProjectData = (skip, filterData,start) => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;

  return useQuery({queryKey:['getProject',Lang,skip,filterData,start],
    queryFn: () =>
      filterApi
        .get(Lang, filterData, skip ,start)
        .then((res) => res.data),
        enabled:true,
        cacheTime: 0,      
        staleTime: 0,
        suspense:false,
        keepPreviousData: true,
        
  })
};


export const useProjectSlider = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["ps", Lang],
    queryFn: () => ProjectSApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useArea = () => {
  const { i18n } = useTranslation();
  const Lang = i18n.language;
  return useQuery({
    queryKey: ["totalArea", Lang],
    queryFn: () => areaApi.get(Lang).then((res) => res.data),
    staleTime: 1000 * 60 * 20,
    keepPreviousData: true,
    retry: false,
    suspense: false,
    enabled: !!Lang,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const usePartnerData=(limit)=>{
const { i18n } = useTranslation();
const lang = i18n.language;
return useQuery({queryKey:['partner',lang,limit],queryFn: () =>partnerApi.get(lang,limit ).then((res) => res.data),enabled:limit>0,suspense:true,keepPreviousData: true,})}
    
      
       
        
        
        
       
  







