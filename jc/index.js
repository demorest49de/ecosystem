import {el, setChildren} from "../node_modules/redom/dist/redom.es.js";

const URL = 'https://muddy-substantial-gear.glitch.me/api/';


const goodsDetailsPage = (id, comeBack) => {
    const body = el(`div`, `Загрузка...`);
    fetch(`${URL}/goods/${id}`)
        .then(res => res.json())
        .then(({title, description, price}) => {
            setChildren(body, [
                el(`h2`, title),
                el(`p`, description),
                el(`p`, `${price} Р`),
                el(`a`, {
                    href: '/',
                    onclick(event) {
                        event.preventDefault();
                        setChildren(document.body, comeBack());
                    }
                }, `вернуться на главную`),
            ]);
        });
    return el(`div`, {className: `container`},
        [el(`h1`, `Карточка товара`), body]);
};

const goodsListPage = () => {
    const list = el('ul', el('li', "загрузка"));

    fetch(`${URL}goods`).then(res => res.json())
        .then(data => {
            setChildren(list, data.map(({id, title}) =>
                el('li', el('a', {
                    href: `/goods/${id}`,
                    onclick(e) {
                        e.preventDefault();
                        setChildren(document.body, goodsDetailsPage(id, goodsListPage));
                    },
                }, title))));
        });

    return el('div', {className: 'container'}, [el('h1', 'товары')], list);
};

setChildren(document.body, goodsListPage());