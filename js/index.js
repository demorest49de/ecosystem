import {el, setChildren} from 'redom';
// import axios from 'axios';
import Navigo from "navigo";

const router = new Navigo('/');
import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput.js';

// const form = () => {
//     return el('form', {
//             action: "#",
//             className: "form",
//             id: "form"
//         },
//         [
//             el('div',
//                 {
//                     className: 'form__input-wrap form__input-wrap_holder',
//                 },
//                 [
//                     el('label',
//                         {
//                             htmlFor: "cardName",
//                             className: "form__label form__holder-label",
//                             textContent: 'Card Holder',
//                         }),
//                     el('input',
//                         {
//                             type: 'text',
//                             className: 'input input__holder',
//                             id: 'cardName',
//                             oninput(event) {
//                                 event.preventDefault();
//                                 const target = event.target;
//                                 target.value = target.value.length >= 20 ? target.value.substring(0, 20) : target.value;
//                                 target.value = target.value.replace(/[^a-zA-Z\s]/g, '');
//                                 target.value = target.value.replace(/[a-z]/g, x => x.toUpperCase());
//
//                                 const regex1 = new RegExp('^(?:[^\\s]*[\\s]?[^\\s]*){1}$', 'g');
//                                 const res = regex1.test(target.value);
//
//                                 const caret = target.selectionStart;
//                                 if (!res) {
//                                     let arr = target.value.split('');
//                                     arr.splice(caret - 1, 1);
//                                     target.value = arr.join('');
//                                 }
//                                 target.value = caret === 1 ? target.value.toString().trimStart() : target.value;
//                                 document.querySelector('.card__name').textContent = target.value;
//
//                             }
//                         }),
//                 ]
//             ),
//             el('div',
//                 {
//                     className: 'form__input-wrap form__input-wrap_number',
//                 },
//                 [
//                     el('label',
//                         {
//                             htmlFor: "cardNumber",
//                             className: "form__label form__holder-label",
//                             textContent: 'Card Number',
//                         }),
//                     el('input',
//                         {
//                             type: 'text',
//                             className: 'input input__number',
//                             id: 'cardNumber',
//                             onmouseenter(event) {
//                                 event.preventDefault();
//                                 const target = event.target;
//                                 target.placeholder = 'xxxx xxxx xxxx xxxx';
//                             },
//                             onmouseleave(event) {
//                                 event.preventDefault();
//                                 const target = event.target;
//                                 target.placeholder = '';
//                             },
//                         }),
//                 ]
//             ),
//             el('div',
//                 {
//                     className: 'form__input-wrap form__input-wrap_date',
//                 },
//                 [
//                     el('label',
//                         {
//                             htmlFor: "cardDate",
//                             className: "form__label form__holder-label",
//                             textContent: 'Card Expiry',
//                         }),
//                     el('input',
//                         {
//                             type: 'text',
//                             className: 'input input__date',
//                             id: 'cardDate',
//                         }),
//                 ]
//             ),
//             el('div',
//                 {
//                     className: 'form__input-wrap form__input-wrap_cvv',
//                 },
//                 [
//                     el('label',
//                         {
//                             htmlFor: "cardCVV",
//                             className: "form__label form__holder-label",
//                             textContent: 'CVV',
//                         }),
//                     el('input',
//                         {
//                             type: 'text',
//                             className: 'input input__cvv',
//                             id: 'cardCVV',
//                         }),
//                 ]
//             ),
//             el('button',
//                 {
//                     className: 'form__button',
//                     textContent: 'CHECK OUT',
//                 })
//         ]
//     );
// };

// const creditCard = () => {
//
//     return el('div', {
//             className: 'credit-card',
//         },
//         [
//             el('span',
//                 {
//                     className: 'card__number',
//                     textContent: 'xxxx xxxx xxxx xxxx',
//                 }),
//             el('div',
//                 {
//                     className: 'card__personal',
//                 },
//                 [
//                     el('span', {className: "card__name", textContent: 'John Doe'}),
//                     el('span', {className: "card__date", textContent: '04/24'}),
//                 ]
//             ),
//         ]
//     );
// };
//
// const card = () => {
//     const secure = el('p', {
//             className: 'secure',
//             textContent: 'Secure Checkout',
//         },
//     );
//
//     return el('div', {
//             className: 'card'
//         }, [secure, creditCard(), form()]
//     );
// };
//
const wrapper = () => {
    const title = el('div', {className: 'payment-title'},
        el('h1', 'Payment Information'));


    const container = el('div', {
                className: 'container'
            },
            el(`div`,
                {
                    className: "creditcard"
                },
                [
                    el(`div`,
                        {
                            className: "front"
                        },
                        [
                            el(`div`,
                                {
                                    className: "ccsingle"
                                }
                            ),
                            el(`svg`,
                                {
                                    version: "1.1",
                                    id: "cardfront",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    x: "0px", y: "0px",
                                    viewBox: "0 0 750 471",
                                    style: "enable-background:new 0 0 750 471;",
                                    "xml:space": "preserve"

                                }, el(`g`,
                                    {
                                        id: "froint"
                                    }, el(`g`,
                                        {
                                            id: "CardBackground"
                                        },

                                        [
                                            el(`g`,
                                                {
                                                    id: "Page-1_1_"
                                                }, el(`g`,
                                                    {
                                                        id: "amex_1_"
                                                    }, el(`path`,
                                                        {
                                                            id: "Rectangle-1_1_",
                                                            class: "lightcolor grey",
                                                            d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9," +
                                                                "40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
                                                        },
                                                    )
                                                )
                                            ),
                                            el(`path`,
                                                {
                                                    class: "darkcolor greydark",
                                                    d: "M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40," +
                                                        "40h670C732.1,471,750,453.1,750,431z"
                                                },
                                            ),
                                            el(`text`,
                                                {},
                                            ), ,
                                            el(`text`,
                                                {},
                                            ), ,
                                            el(`text`,
                                                {},
                                            ), ,
                                            el(`text`,
                                                {},
                                            ), ,
                                            el(`text`,
                                                {},
                                            ),

                                        ]
                                    )
                                ),
                            )
                        ]
                    ),
                    el('div',
                        {
                            className: 'back'
                        },
                    )
                ]
            )
        )
    ;

    setChildren(document.body, [title, container]);
};

router.on('/', () => {
    wrapper();
});

router.resolve();


// $('.input__number').mask('9999 9999 9999 9999', {placeholder: 'xxxx xxxx xxxx xxxx'});
// $('.input__date').mask('99/99');
// $('.input__cvv').mask('999');
//
//
// $('.input__number').on('keyup', (event) => {
//     const target = event.target;
//     console.log(' : ', target.value);
//     document.querySelector('.card__number').textContent = target.value;
// });
// $('.input__date').on('keyup', (event) => {
//     const target = event.target;
//     console.log(' : ', target.value);
//     document.querySelector('.card__date').textContent = target.value;
// });