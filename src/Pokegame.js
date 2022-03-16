import React from 'react'; // need to have this at the top of every component created (may not need to with new react)
import Pokecard from './Pokecard';
import cards from './cards';
import Pokedex from './Pokedex';

// CSS
import "./Pokecard.css";
import "./Pokedex.css";



// const totalItems = items.reduce((acc, i) => {
// 	return acc += i.quantity;
// }, 0);

// // sum of items in the cart
// const total = items.reduce((acc, i) => {
// 	return acc + i.price * i.quantity;
// }, 0);


const Pokegame = (deck1) => {

	return (
		<div>
			<Pokedex cards={ deck1 } deckName="Hand" />
		</div>
	);
};

export default Pokegame;