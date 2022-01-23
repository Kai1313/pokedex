import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
    let URL = props.url
    // console.log(fetch(props.url).then((response) => response.json()))
    console.log(props.url)
    let ids = props.url.replace('https://').split('/')
    return (
        <NavLink className='card' to={{ pathname: `/pokemon/${props.name}` }}>
            <h3 className='card__title'>{props.name}</h3>
            <img className='card__img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[4]}.png`} />
        </NavLink>
    )
}
export default PokemonCard;
