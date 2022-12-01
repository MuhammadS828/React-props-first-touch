import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";


const products = [
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      left: 31,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      left: 18,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      left: 1,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      left: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
  ];

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="main_main">
          <Main image={products[0].image} price={products[0].price} name={products[0].name} />
          <Main image={products[1].image} price={products[1].price} name={products[1].name} />
          <Main image={products[2].image} price={products[2].price} name={products[2].name} />
          <Main image={products[3].image} price={products[3].price} name={products[3].name} />
          <Main image={products[4].image} price={products[4].price} name={products[4].name} />
          <Main image={products[5].image} price={products[5].price} name={products[5].name} />
          <Main image={products[6].image} price={products[6].price} name={products[6].name} />
          <Main image={products[7].image} price={products[7].price} name={products[7].name} />
          <Main image={products[8].image} price={products[8].price} name={products[8].name} />


        </div>

      </div>
    </div>
  );
};

export default App;
