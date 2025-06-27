


export function resize(setState){

const checked=window.innerWidth<=941?true:false;
setState(checked)
    


}

export function resizeBtn(setState){

    const checked=window.innerWidth<=450?true:false;
    setState(checked)

}

export function resizeMobile(setstate){

    const checked=window.innerWidth<=410?true:false;
    setstate(checked)
}

export function resizeSlider(setstate){

    setstate(()=>{
        if(window.innerWidth<=768&&window.innerWidth>=410){
            return 3
        }
         if ( window.innerWidth <= 409) {
          return 2;
        } else {
          return 4;
        }

    })
}