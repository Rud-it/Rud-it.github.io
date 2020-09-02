let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let tempHeight = 100;
let tempWidth = 200;
let one = 1;
/***** НИЖЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/

    flagWidth = `${tempWidth + tempWidth + tempHeight}px`;
    flagHeight = `${tempHeight + tempWidth}px`;
    console.log(flagWidth, flagHeight);
    let fifty = `${tempHeight / (one + one)}%`;
    let zero = one - one;
    let tff = `${one + one}${one + one + one + one + one}${one + one + one + one + one}`;
    console.log(tff);
    console.log(fifty);
    
    flagBackgroundLG = `rgb(${zero},${zero},${tff}) ${fifty}, rgb(${tff},${tff},${zero}) ${fifty}`;
    console.log(flag);
    

/***** ВЫШЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/


// .flag { 
//   width: <значение переменной flagWidth>;
//   height: <значение переменной flagHeight>;
//   background: linear-gradient(<значение переменной flagBackgroundLG>);
// }



flag.style.height = flagHeight;
flag.style.width = flagWidth;
flag.style.background = `linear-gradient(${ flagBackgroundLG })`;
