import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons } from '../services/pokemons';
import Pagination from '../components/Pagination';

const AllPokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getPokemons(currentPageUrl).then((data) => {
            setLoading(false)
            setNextPageUrl(data.next)
            setPrevPageUrl(data.previous)
            setPokemons(data)
        })
    }, [currentPageUrl])

    if (loading) return 'Loading....'

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }
    // console.log(data.next)
    // console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1])
    return (
        <>
            <div className='cards'>
                {Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1].map((pokemon, index) => {
                    return <PokemonCard key={index} {...pokemon} />
                })}
            </div>
            <Pagination 
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
        </>
    );
};
  
export default AllPokemon;