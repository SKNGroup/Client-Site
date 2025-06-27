import { flagObj } from "./flag";

export const languageOptions = {
  "en-US": {
    flag: flagObj["en-US"],
    name: "English",
  },
  "az-AZ": {
    flag: flagObj["az-AZ"],
    name: "Azerbaijan",
  },
  "ru-RU": {
    flag: flagObj["ru-RU"],
    name: "Russian",
  },
};



export function headerScroll(state,setstate,isTrue){
   const scrollY=window.scrollY;

if (scrollY<state) {
    isTrue(false)
}else{
    isTrue(true)
}
setstate(scrollY)
}