import {el, setChildren} from 'redom';
// import axios from 'axios';
import Navigo from "navigo";

const router = new Navigo('/');
import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput.js';

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
                                    },
                                    el(`g`,
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
                                                            className: "lightcolor grey",
                                                            d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9," +
                                                                "40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
                                                        },
                                                    )
                                                ),
                                                el(`path`,
                                                    {
                                                        className: "darkcolor greydark",
                                                        d: "M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40," +
                                                            "40h670C732.1,471,750,453.1,750,431z"
                                                    },
                                                ),
                                            ),
                                        ]
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 60.106 295.0121)',
                                            id: 'svgnumber',
                                            className: 'st2 st3 st4',
                                            textContent: '0123 4567 8910 1112',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 54.1064 428.1723)',
                                            id: 'svgname',
                                            className: 'st2 st5 st6',
                                            textContent: 'ИВАН ИВАНОВ',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 54.1064 389.8793)',
                                            id: '',
                                            className: 'st7 st5 st8',
                                            textContent: 'cardholder name',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 479.7754 388.8793)',
                                            id: '',
                                            className: 'st7 st5 st8',
                                            textContent: 'expiration',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 65.1054 241.5)',
                                            id: '',
                                            className: 'st7 st5 st8',
                                            textContent: 'card number',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 574.4219 433.8095)',
                                            id: 'svgexpire',
                                            className: 'st2 st5 st9',
                                            textContent: '01/23',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 479.3848 417.0097)',
                                            id: '',
                                            className: 'st2 st10 st11',
                                            textContent: 'VALID',
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 479.3848 435.6762)',
                                            id: '',
                                            className: 'st2 st10 st11',
                                            textContent: 'THRU',
                                        },
                                    ),
                                    el(`polygon`,
                                        {
                                            className: 'st2',
                                            points: '554.5,421 540.4,414.2 540.4,427.9',
                                        },
                                    ),
                                    el(`g`,
                                        {
                                            id: 'cchip'
                                        },
                                        el(`path`,
                                            {
                                                className: "st2",
                                                d: "M168.1,143.6H82.9c-10.2,0-18.5-8.3-18." +
                                                    "5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85." +
                                                    "3c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6" +
                                                    ",135.3,178.3,143.6,168.1,143.6z",
                                            },
                                        )
                                    ),
                                    el(`rect`,
                                        {
                                            x:"82", y:"70", className:"st12", width:"1.5", height:"60"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x:"167.4", y:"70", className:"st12", width:"1.5", height:"60"
                                        },
                                    ),
                                    el(`path`,
                                        {
                                            className: "st12",
                                            d: "M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6," +
                                                "1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12." +
                                                "3c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18." +
                                                "5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7," +
                                                "7.7,4.7,12.3C143.9,122.5,135.7,130.8,125.5," +
                                                "130.8z M125.5,70.8c-9.3,0-16.9,7.6-" +
                                                "16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5" +
                                                "l-0.5,0.5c-3.1,3.2-4.8,7.4-4.8,11.8c0," +
                                                "9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-" +
                                                "16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5" +
                                                "c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z",
                                        },
                                    ),
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