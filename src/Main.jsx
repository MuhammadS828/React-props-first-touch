import React from 'react';

const Main = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt="картинка" />
            <p>{props.price}</p>
            <p>{props.name}</p>
            <button>Купить</button>
        </div>
    );
};

export default Main;