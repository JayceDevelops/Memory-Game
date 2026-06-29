import { useEffect, useState } from 'react';
import '../styles/Game.css';
import Card from './Card';

export default function Game({current, setCurrent, best, setBest}) {

    const [cards, setCards] = useState([]);
    const [usedID, setUsedID] = useState([]);

    getPokimonData(setCards, setUsedID);

    return (
        <main>
            <div className='cardholder'>
                {cards.map((pokemon) => {
                    return (
                        <Card title={pokemon.name} image={pokemon.image} description={pokemon.description}/>
                    );
                })}
            </div>
        </main>
    );
};

const getPokimonData = (setCards, setUsedID) => {
    useEffect(() => {
        let ignore = false;

        const fetchCards = async () => {

            try {
                for (let i = 0; i < 11; i++){

                    if (ignore === false){
                        const number = Math.floor(Math.random() * 100) + 1;
                    
                        const pokemonPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
                        const speciesPromise = fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}`);

                        const [pokemonRes, speciesRes] = await Promise.all([pokemonPromise, speciesPromise]);

                        const pokemonData = await pokemonRes.json();
                        const speciesData = await speciesRes.json();

                        const englishDescription = speciesData.flavor_text_entries.find(
                            (entry) => entry.language.name === 'en'
                        );

                        const card = {
                            id: pokemonData.id,
                            name: pokemonData.name,
                            image: pokemonData.sprites.front_default,
                            description: englishDescription?.flavor_text || "No description available."
                        };

                        setCards((prevCards) => [...prevCards, card]);
                        setUsedID((prevUsedID) => [...prevUsedID, pokemonData.id]);
                    }
                }
            }
            catch {
                console.log("Error: Fetching Data");
            }
        };

        fetchCards();

        return () => {
            ignore = true;
        };

    }, []);
};