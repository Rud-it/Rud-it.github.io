let all = document.querySelector('.invoce');
// let all = document.querySelector('.returns');


    const invoce = {
        container: {
            itemCount: 5,
            quantityOfBox: 18,
            product: {
                milkPasteurized: {
                    box: 4,
                    packs: 30,
                    details: {
                        product: {
                            product: 'milk',
                            name: 'prostokvashino',
                        },
                        materialPacks: 'polyethylene',
                        storageTemp: 2,
                        exp: '96 hour',
                    },
                },
                butterInPack: {
                    box: 3,
                    packs: 20,
                    details: {
                        product: {
                            product: 'butter',
                            name: 'prostokvashino',
                        },
                        materialPacks: 'paperPackaging',
                        storageTemp: -6,
                        exp: '168 hour',
                    },
                },
                kefirInBottles: {
                    box: 7,
                    packs: 6,
                    details: {
                        product: {
                            product: 'kefir',
                            name: 'prostokvashino',
                        },
                        materialPacks: 'plastic bottle',
                        storageTemp: +2,
                        exp: '36 hour',
                    },
                },
                fishHuso: {
                    box: 2,
                    weight: 40,
                    details: {
                        product: {
                            product: 'fish',
                            name: 'Huso',
                        },
                        materialPacks: 'wood',
                        storageTemp: -17,
                        exp: '28 day',
                    },
                },
            },
        },
    };
invoce.container.product.iceСream = {
    box: 2,
    packs: 12,
    details: {
        product: {
            product: 'iceCream',
            name: '',
        },
        materialPacks: 'paperPackaging',
        storageTemp: -2,
        exp: '36 hour',
    },
};
const returns = {
    container: {

    },
};
let temp = -5;
const check = () => {
    if (invoce.container.product.milkPasteurized.details.storageTemp > temp) {
        returns.container.milkPasteurized = invoce.container.product.milkPasteurized;
    };
};
const check2 = () => {
    if (invoce.container.product.butterInPack.details.storageTemp > temp) {
        returns.container.butterInPack = invoce.container.product.butterInPack;
    };
};
const check3 = () => {
    if (invoce.container.product.kefirInBottles.details.storageTemp > temp) {
        returns.container.kefirInBottles = invoce.container.product.kefirInBottles;
    };
};
const check4 = () => {
    if (invoce.container.product.fishHuso.details.storageTemp > temp) {
        returns.container.fishHuso = invoce.container.product.fishHuso;
    };
};
const check5 = () => {
    if (invoce.container.product.iceСream.details.storageTemp > temp) {
        returns.container.iceСream = invoce.container.product.iceСream;
    };
};
check();
check2();
check3();
check4();
check5();
console.log(invoce);
console.info(returns);

    


/*
// let all = document.querySelector('test');

// const human = {
//     id: 'test',
//         dog: {
//             breed: "mastiff",
//             height: '80',
//             width:'80',
//             age: '5',
//     },
//         car: {
//             model: `bmw`,
//             speed: '290',
//             color: 'black',
//             Transmission: '5',
//     },
//         wife: {
//             color: 'white',
//             height: '188',
//             name: 'Lusy',
//         },
//     }
// human.dog.age = '6';
// human.new = {
//     man: '30',
//     height: '175',
// }
// delete human.man ;

// console.log(human);
*/