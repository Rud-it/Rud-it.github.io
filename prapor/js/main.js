let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let tempHeight = 100;
let tempWidth = 200;
let one = 1;
/***** НИЖЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/
let canvas = document.getElementById('flag');
one = canvas.getContext('2d');
flagWidth = tempWidth * 2 + tempHeight;
flagHeight = tempHeight / 1.5;
one.fillStyle = '	rgb(30,144,255)';
one.fillRect(0, 0, flagWidth, flagHeight);
one.fillStyle = 'rgb(255,255,0)';
one.fillRect(0, flagHeight, flagWidth, flagHeight);

/***** ВЫШЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/
/*

.flag { 
  width: <значение переменной flagWidth>;
  height: <значение переменной flagHeight>;
  background: linear-gradient(<значение переменной flagBackgroundLG>);
}

*/

flag.style.height = flagHeight;
flag.style.width = flagWidth;
flag.style.background = `linear-gradient(${ flagBackgroundLG })`;

