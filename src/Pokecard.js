import React from 'react';

// CSS
import './Pokecard.css';
import './Pokedex.css';


// let min = 1;
// let max = 898;
// let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

const Pokecard = ({ name, type, base_experience, id }) => (
	<div className="Pokecard">
		<ul className="Pokecard-ul">
			<h2> { name }  </h2>
			<img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` } />
			<p>Type: { type } </p>
			<p>EXP: { base_experience } </p>
		</ul>
	</div>
);

export default Pokecard;