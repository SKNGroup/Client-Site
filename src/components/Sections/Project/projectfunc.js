

export const projectarr=[
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim3.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim4.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim1.png",
destript:'The latest name for modern building construction'
},
{
img:"/images/resim2.png",
destript:'The latest name for modern building construction'
},
];





export function starterDataSortOne(setcount,setnumber){

    if (window.innerWidth>=1024) {
         setnumber(4);
         setcount(16);
    }
    else if(window.innerWidth>=450&& window.innerWidth<=1024){
         setnumber(3);
         setcount(12);
    }else if(window.innerWidth<450){
         setnumber(2);
         setcount(8)
    }


}
export function starterDataSortTwo(setcount,setnumber){

    if (window.innerWidth>=1024) {
         setnumber(3);
         setcount(12);
    }
    else if(window.innerWidth>=768&& window.innerWidth<=1024){
         setnumber(2);
         setcount(8);
    }else if(window.innerWidth<768&& window.innerHeight>=450){
         setnumber(3);
         setcount(12);
    }else if(window.innerHeight<450){
        setnumber(2);
        setcount(8);
    }


}




// useEffect(() => {
//     setData(() => {
//       if (projectarr) {
//         return projectarr.slice(0, initialstart);
//       }
//       return [];
//     });
//   }, [initialstart]);