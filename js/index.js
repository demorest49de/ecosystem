import {el, setChildren} from 'redom';
import axios from 'axios';
import Navigo from 'navigo';

const router = new Navigo('/');

const URL = 'https://muddy-substantial-gear.glitch.me/api/';


const goodsDetailsPage = (id) => {
  const body = el(`div`, `Загрузка...`);
  axios.get(`${URL}/goods/${id}`)
      .then(({data: {title, description, price}}) => {
        setChildren(body, [
          el(`h2`, title),
          el(`p`, description),
          el(`p`, `${price} Р`),
          el(`a`, {
            href: '/',
            onclick(event) {
              event.preventDefault();
              router.navigate(event.target.getAttribute('href'));
            },
          }, `вернуться на главную`),
        ]);
      });
  return el(`div`, {className: `container`},
      [el(`h1`, `Карточка товара`), body]);
};

const goodsListPage = () => {
  const list = el('ul', el('li', 'загрузка'));

  axios.get(`${URL}goods`)
      .then(({data}) => {
        setChildren(list, data.map(({id, title}) =>
          el('li', el('a', {
            href: `/goods/${id}`,
            onclick(e) {
              e.preventDefault();
              router.navigate(event.target.getAttribute('href'));
            },
          }, title))));
      });

  return el('div', {className: 'container'}, [el('h1', 'товары')], list);
};

router.on('/', () => {
  setChildren(document.body, goodsListPage());
});

router.on('/goods/:id', (data) => {
  const {data: {id}} = data;
  console.log(' : ', data);
  setChildren(document.body, goodsDetailsPage(id));
});

router.resolve();
