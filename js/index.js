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
                                id: "ccsingle"
                            }
                        ),
                        el('svg',
                            {
                                version: "1.1",
                                id: "cardfront",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                x: "0px", y: "0px",
                                viewBox: "0 0 750 471",
                                "style": "enable-background: new 0 0 750 471",
                                "xml:space": "preserve",
                            }, el(`g`,
                                {
                                    id: "Front"
                                },
                                [
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
                                                            d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40," +
                                                                "40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
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
                                            x: "82", y: "70", className: "st12", width: "1.5", height: "60"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "167.4", y: "70", className: "st12", width: "1.5", height: "60"
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
                                    el(`rect`,
                                        {
                                            x: "82", y: "70", className: "st12", width: "1.5", height: "60"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "167.4", y: "70", className: "st12", width: "1.5", height: "60"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "82", y: "70", className: "st12", width: "1.5", height: "60"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "167.4", y: "70", className: "st12", width: "1.5", height: "60"
                                        },
                                    ),
                                ]
                            )
                        )
                    ]
                ),
                el('div',
                    {
                        className: 'back'
                    },
                    el('svg',
                        {
                            version: "1.1",
                            id: "cardback",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px", y: "0px",
                            viewBox: "0 0 750 471",
                            "style": "enable-background: new 0 0 750 471",
                            "xml:space": "preserve",
                        },
                        [
                            el(`g`,
                                {
                                    id: "Front"
                                },
                                el(`line`,
                                    {
                                        className: "st0",
                                        x1: "35.3", y1: "10.4", x2: "36.7", y2: "11"
                                    },
                                ),
                            ),
                            el(`g`,
                                {
                                    id: "Back"
                                },
                                [
                                    el(`g`,
                                        {
                                            id: "Page-1_2_"
                                        },
                                        el(`g`,
                                            {
                                                id: "amex_2_"
                                            },
                                            el(`path`,
                                                {
                                                    id: "Rectangle-1_2_",
                                                    className: "darkcolor greydark",
                                                    d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40" +
                                                        "C0,17.9,17.9,0,40,0z"
                                                },
                                            ),
                                        ),
                                    ),
                                    el(`rect`,
                                        {
                                            y: "61.6", className: "st2", width: "750", height: "78"
                                        },
                                    ),
                                    el(`path`,
                                        {
                                            className: "st3",
                                            d: "M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6," +
                                                "6-6h652.1c3.3,0,6,2.7,6,6v52.5C707.1,246.4,704.4,249.1,701.1,249.1z"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "42.9", y: "198.6", className: "st4", width: "664.1", height: "10.5"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "42.9", y: "224.5", className: "st4", width: "664.1", height: "10.5"
                                        },
                                    ),
                                    el(`path`,
                                        {
                                            className: "st5",
                                            d: "M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7," +
                                                "6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 621.999 227.2734)',
                                            id: 'svgsecurity',
                                            className: 'st6 st7',
                                            textContent: '985',
                                        },
                                    ),
                                    el(`g`,
                                        {
                                            className: 'st8'
                                        },
                                        el('text',
                                            {
                                                transform: 'matrix(1 0 0 1 518.083 280.0879)',
                                                id: '',
                                                className: 'st9 st6 st10',
                                                textContent: 'security code',
                                            }
                                        )
                                    ),
                                    el(`rect`,
                                        {
                                            x: "58.1", y: "378.6", className: "st11", width: "375.5", height: "13.5"
                                        },
                                    ),
                                    el(`rect`,
                                        {
                                            x: "58.1", y: "405.6", className: "st11", width: "421.7", height: "13.5"
                                        },
                                    ),
                                    el(`text`,
                                        {
                                            transform: 'matrix(1 0 0 1 59.5073 228.6099)',
                                            id: 'svgnameback',
                                            className: 'st12 st13',
                                            textContent: 'Иван Иванов',
                                        },
                                    ),
                                ]
                            ),
                        ]
                    ),
                )
            ]
        )
    );

    const formContainer = el('div', {
            className: 'form-container'
        },
        el('div', {
                className: 'field-container'
            },
            [
                el('label', {
                        for: 'name',
                        textContent: 'Name'
                    },
                ),
                el('input', {
                        id: 'name',
                        maxlength: "20",
                        type: "text"
                    },
                ),
            ]
        ),
        el('div', {
                className: 'field-container'
            },
            [
                el('label', {
                        for: 'cardnumber',
                        textContent: 'Card Number'
                    },
                ),
                el('input', {
                        id: 'cardnumber',
                        type: "text",
                        pattern: "[0-9]*",
                        inputmode: "numeric",
                    },
                ),
                el('svg',
                    {
                        version: "1.1",
                        id: "ccicon",
                        className: "ccicon",
                        width: "750",
                        height: "471",
                        viewBox: "0 0 750 471"
                    },
                )
            ]
        ),
    );

    setChildren(document.body, [title, container, formContainer]);
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