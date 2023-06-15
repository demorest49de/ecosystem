import {el, setChildren} from 'redom';
// import axios from 'axios';
import Navigo from "navigo";
const router = new Navigo('/');
import $ from 'jquery';

const o = $('body').outerHTML;
console.log(' : ',o);

const form = () => {
    return el('form', {
            action: "#",
            className: "form",
            id: "form"
        },
        [
            el('div',
                {
                    className: 'form__input-wrap form__input-wrap_holder',
                },
                [
                    el('label',
                        {
                            htmlFor: "cardName",
                            className: "form__label form__holder-label",
                            textContent: 'Card Holder',
                        }),
                    el('input',
                        {
                            type: 'text',
                            className: 'input input__holder',
                            id: 'cardName',
                            oninput(event) {
                                event.preventDefault();
                                const target = event.target;
                                target.value = target.value.length >= 20 ? target.value.substring(0, 20) : target.value;
                                target.value = target.value.replace(/[^a-zA-Z\s]/g, '');
                                target.value = target.value.replace(/[a-z]/g, x => x.toUpperCase());

                                const regex1 = new RegExp('^(?:[^\\s]*[\\s]?[^\\s]*){1}$', 'g');
                                const res = regex1.test(target.value);

                                const caret = target.selectionStart;
                                if (!res) {
                                    let arr = target.value.split('');
                                    arr.splice(caret - 1, 1);
                                    target.value = arr.join('');
                                }
                                target.value = caret === 1 ? target.value.toString().trimStart() : target.value;
                                document.querySelector('.card__name').textContent = target.value;

                            }
                        }),
                ]
            ),
            el('div',
                {
                    className: 'form__input-wrap form__input-wrap_number',
                },
                [
                    el('label',
                        {
                            htmlFor: "cardNumber",
                            className: "form__label form__holder-label",
                            textContent: 'Card Number',
                        }),
                    el('input',
                        {
                            type: 'text',
                            className: 'input input__number',
                            id: 'cardNumber',
                            onmouseenter(event) {
                                event.preventDefault();
                                const target = event.target;
                                target.placeholder = 'xxxx xxxx xxxx xxxx';
                            },
                            onmouseleave(event) {
                                event.preventDefault();
                                const target = event.target;
                                target.placeholder = '';
                            },
                            onclick(event) {
                                event.preventDefault();
                                const target = event.target;
                                // target.value = document.querySelector('.card__number').textContent;

                            },
                            oninput(event) {
                                event.preventDefault();
                                const target = event.target;
                                target.value = target.value.length >= 19 ? target.value.substring(0, 19) : target.value;
                                target.value = target.value.replace(/[^0-9]/g, '');

                                // document.querySelector('.card__number').textContent = target.value;
                            },
                        }),
                ]
            ),
            el('div',
                {
                    className: 'form__input-wrap form__input-wrap_date',
                },
                [
                    el('label',
                        {
                            htmlFor: "cardDate",
                            className: "form__label form__holder-label",
                            textContent: 'Card Expiry',
                        }),
                    el('input',
                        {
                            type: 'text',
                            className: 'input input__date',
                            id: 'cardDate',
                        }),
                ]
            ),
            el('div',
                {
                    className: 'form__input-wrap form__input-wrap_cvv',
                },
                [
                    el('label',
                        {
                            htmlFor: "cardCVV",
                            className: "form__label form__holder-label",
                            textContent: 'CVV',
                        }),
                    el('input',
                        {
                            type: 'text',
                            className: 'input input__cvv',
                            id: 'cardCVV',
                        }),
                ]
            ),
            el('button',
                {
                    className: 'form__button',
                    textContent: 'CHECK OUT',
                })
        ]
    );
};

const creditCard = () => {

    return el('div', {
            className: 'credit-card',
        },
        [
            el('span',
                {
                    className: 'card__number',
                    textContent: 'xxxx xxxx xxxx xxxx'
                }),
            el('div',
                {
                    className: 'card__personal',
                },
                [
                    el('span', {className: "card__name", textContent: 'John Doe'}),
                    el('span', {className: "card__date", textContent: '04/24'}),
                ]
            ),
        ]
    );
};

const card = () => {
    const secure = el('p', {
            className: 'secure',
            textContent: 'Secure Checkout',
        },
    );

    return el('div', {
            className: 'card'
        }, [secure, creditCard(), form()]
    );
};

const wrapper = () => {
    return el('div', {className: 'wrapper'}, card());
};

router.on('/', () => {
    setChildren(document.body, wrapper());
});

router.resolve();