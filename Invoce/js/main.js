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
        product: {

        },
    },
};
let temp = -5;


// const check = (inp, out) => {
// console.log(inp, out);
//     if (inp.details.storageTemp > temp) {
//         out = inp;
//     };
// };
// check(invoce.container.product.milkPasteurized, returns.container.product.milkPasteurized);
// check(invoce.container.product.butterInPack, returns.container.product.butterInPack);
// check(invoce.container.product.kefirInBottles, returns.container.product.kefirInBottles);
// check(invoce.container.product.fishHuso, returns.container.product.fishHuso);
// check(invoce.container.product.iceСream, returns.container.product.iceСream);
// const check = () => {
//     if (invoce.container.product.milkPasteurized.details.storageTemp > temp) {
//         returns.container.product.milkPasteurized = invoce.container.product.milkPasteurized;
//     };
// };
// const check2 = () => {
//     if (invoce.container.product.butterInPack.details.storageTemp > temp) {
//         returns.container.butterInPack = invoce.container.product.butterInPack;
//     };
// };
// const check3 = () => {
//     if (invoce.container.product.kefirInBottles.details.storageTemp > temp) {
//         returns.container.kefirInBottles = invoce.container.product.kefirInBottles;
//     };
// };
// const check4 = () => {
//     if (invoce.container.product.fishHuso.details.storageTemp > temp) {
//         returns.container.fishHuso = invoce.container.product.fishHuso;
//     };
// };
// const check5 = () => {
//     if (invoce.container.product.iceСream.details.storageTemp > temp) {
//         returns.container.iceСream = invoce.container.product.iceСream;
//     };
// };
// check();
// check2();
// check3();
// check4();
// check5();
// console.log(invoce);
// console.info(returns);