import { useEffect, useMemo, useRef, useState } from 'react';
import './MenuPage.css';
import { GiFullPizza, GiHamburger, GiSandwich } from 'react-icons/gi';
import { CiBowlNoodles } from 'react-icons/ci';
import { LuSalad, LuSoup } from 'react-icons/lu';
const MenuPage = () => {
  const pizze = [
    {
      id: 1,
      ime: 'Margherita',
      cijena: 10,
      description: 'tomato souce, mozzarela, basil, olive oil ',
      slika: require('../assets/hrana/p2.jpg'),
      sort: 'pizza',
    },
    {
      id: 2,
      ime: 'Quatro Formaggio',
      cijena: 12,
      description:
        'tomato souce, mozzarela, gorgonzola,Grana Padano,Edamer, basil, olive oil ',
      slika: require('../assets/hrana/p1.jpg'),
      sort: 'pizza',
    },
    {
      id: 3,
      ime: 'Pizza Vegettalla',
      cijena: 15,
      description:
        'tomato souce, mozzarela,eggplant,olives,fungi, basil, olive oil ',

      slika: require('../assets/hrana/p3.jpg'),
      sort: 'pizza',
    },
    {
      id: 4,
      ime: 'Big Juicy Burger XXL',
      cijena: 18,
      description:
        '100%  ground beef,cheddar cheese, lettuce, secreat souce, with a side dish of french fries ',

      slika: require('../assets/hrana/burger.jpg'),
      sort: 'burger',
    },
    {
      id: 5,
      ime: 'Penne with 4 Cheeses',
      cijena: 15,
      description: 'penne, Parmigiano, Grana Padano, mozzarela, gorgonzola ',
      slika: require('../assets/hrana/penne.jpg'),
      sort: 'pasta',
    },
    {
      id: 6,
      ime: 'Soup Pumpkin',
      cijena: 8,
      description: 'Homemade soup with pumpkin and basil',
      slika: require('../assets/hrana/soup.jpg'),
      sort: 'soup',
    },
    {
      id: 7,
      ime: 'Sendwich Factory Best',
      cijena: 10,
      description:
        'Homemade bread ,chicken file, ice berg lettuce with a side dish of french fries, with 3 souces ',
      slika: require('../assets/hrana/sendvich.jpg'),
      sort: 'sendwich',
    },
    {
      id: 8,
      ime: 'Cezar Salad',
      cijena: 10,
      description:
        'Ice berg lettuce with a secret souce, mixed with Grana Padano, cherry tomatos, and juicy fried chicken',
      slika: require('../assets/hrana/cezar_salad.jpg'),
      sort: 'salad',
    },
    {
      id: 9,
      ime: 'Double Chessburger',
      cijena: 10,
      description: 'Double 100% ground beef,with homegrown vagetables  ',
      slika: require('../assets/hrana/burger_dc.jpg'),
      sort: 'burger',
    },
    {
      id: 10,
      ime: 'Burger Veggie',
      cijena: 12,
      description:
        'tomato souce,100% ground Beef,lettuce, tomatos, rikola, cherry tomatos,onions',
      slika: require('../assets/hrana/burger_veggie.jpg'),
      sort: 'burger',
    },
    {
      id: 11,
      ime: 'Ham and Eggs Sendwich',
      cijena: 15,
      description: 'bread grilled with ham and eggs, with a bit of mozzarella',

      slika: require('../assets/hrana/ham_egg_sendwich.jpg'),
      sort: 'sendwich',
    },
    {
      id: 12,
      ime: 'Pasta Milanese',
      cijena: 18,
      description: 'Pasta with a tomato souce, basil and olive oil',

      slika: require('../assets/hrana/pasta_milanese.jpg'),
      sort: 'pasta',
    },
    {
      id: 13,
      ime: 'Penne di Mare',
      cijena: 15,
      description: 'penne, Grana Padano, mozzarela,frutti di Mare  ',
      slika: require('../assets/hrana/pasta2.jpg'),
      sort: 'pasta',
    },
    {
      id: 14,
      ime: 'Pasta Bolognese',
      cijena: 8,
      description: 'Pasta with 100% ground beef, tomato souce, and basil',
      slika: require('../assets/hrana/pasta3.jpg'),
      sort: 'pasta',
    },
    {
      id: 15,
      ime: 'Sendwich Beef',
      cijena: 11,
      description:
        'Homemade bread ,beef, ice berg lettuce with a side dish of french fries, with 3 souces ',
      slika: require('../assets/hrana/sendwich_beef.jpg'),
      sort: 'sendwich',
    },
    {
      id: 16,
      ime: 'Salad Tomatos',
      cijena: 7,
      description: 'Cherry Tomatos, basil, olive oil ',
      slika: require('../assets/hrana/salad_tomato.jpg'),
      sort: 'salad',
    },
    {
      id: 17,
      ime: 'Salad Lettuce',
      cijena: 6,
      description: 'Ice berg lettuce with olive oil and basilico ',
      slika: require('../assets/hrana/salad_lettuce.jpg'),
      sort: 'salad',
    },
    {
      id: 18,
      ime: ' Homemade soup',
      cijena: 6,
      description: 'Homemade chicken soup',
      slika: require('../assets/hrana/soup2.jpg'),
      sort: 'soup',
    },
    {
      id: 19,
      ime: 'Tomato Soup',
      cijena: 7,
      description: 'Homemade tomato soup',
      slika: require('../assets/hrana/soup_tomato.jpg'),
      sort: 'soup',
    },
  ];
  const sortedAsc = useMemo(
    () => pizze.map((obj) => obj).sort((a, b) => a.cijena - b.cijena),
    [pizze]
  );
  const sortedDes = useMemo(
    () => pizze.map((obj) => obj).sort((a, b) => b.cijena - a.cijena),
    [pizze]
  );
  const [sorted, setSorted] = useState(pizze);
  const [categorie, setCategorie] = useState('');
  const firstRender = useRef(true);
  const filteredFoods = useMemo(
    () => pizze.filter((food) => food.sort === categorie),
    [categorie]
  );
  useEffect(() => {
    if (!firstRender.current) {
      setSorted(filteredFoods);
    }
    firstRender.current = false;
  }, [categorie]);
  return (
    <div className="menu_page">
      <h1>Menu page</h1>

      <div className="menu_filter_nav">
        <div className="filter_nav_item">
          <div class="dropdown">
            <button class="dropbtn">Sort by categories:</button>
            <div class="dropdown-content">
              <button
                value="soup"
                onClick={() => {
                  setCategorie('soup');
                }}
              >
                Soup <LuSoup />
              </button>

              <button
                onClick={() => {
                  setCategorie('sendwich');
                }}
              >
                Sendwich <GiSandwich />
              </button>

              <button
                onClick={() => {
                  setCategorie('pasta');
                }}
              >
                Pasta <CiBowlNoodles />
              </button>

              <button
                onClick={() => {
                  setCategorie('salad');
                }}
              >
                Salad <LuSalad />
              </button>

              <button
                onClick={() => {
                  setCategorie('pizza');
                }}
              >
                Pizza <GiFullPizza />
              </button>

              <button
                onClick={() => {
                  setCategorie('burger');
                }}
              >
                Burger <GiHamburger />
              </button>
            </div>
          </div>
        </div>
        <div className="filter_nav_ad">
          <button onClick={() => setSorted(sortedAsc)}>Cijena ↑</button>

          <button onClick={() => setSorted(sortedDes)}>Cijena ↓</button>
        </div>
      </div>
      <div className="menu-container">
        {sorted.map((pizza) => {
          return (
            <div key={pizza.id} className="menu-item-container">
              <img
                key={pizza.id}
                src={pizza.slika}
                className="menu_item_img"
                loading="lazy"
              />
              <div className="pizza_ime_cijena">
                <p className="pizza_ime">{pizza.ime}</p>
                <p className="pizza_description">{pizza.description}</p>
                <p className="pizza_cijena">{pizza.cijena} $</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
