



export const partnerRezise=(setCount)=>{
if (window.innerWidth>940) {
    setCount(28)
}
else if(window.innerWidth>450 && window.innerWidth<940){
setCount(21)
}
else if(window.innerWidth<450){
setCount(16)
}
}