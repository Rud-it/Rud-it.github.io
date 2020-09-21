
// function someFunc(){
//     // alert(document.getElementById("txt").value);
//     let a = document.getElementById("txt").value;
//     console.log(a);
//     }
//     document.getElementById("btn").onclick = someFunc;
let d = document.querySelector('.door');
d.style.backgroundColor = "red";
d = d.textContent;
let e = document.querySelector('.move');
e.style.backgroundColor = 'red';
e = e.textContent;
let f = document.querySelector('.alarm');
f.style.backgroundColor = 'red';
f = f.textContent;
let a = 4 << 4;
let b = document.querySelector('.code');
b.innerHTML = a;
b.style.backgroundColor = "yellow";
let c = prompt('Введите пароль')
if (c == a) {
    d = (true);
    console.log('Пароль верный');
}   else 
        if (console.log(prompt('вы ввели неверный пароль')));
        else {
            d = (false);
            console.log(alert('сигнализация включена'));
        }
