import React from 'react'; // need to have this at the top of every component created (may not need to with new react)
import Pokecard from './Pokecard';
import cards from './cards';

// CSS
import "./Pokecard.css";
import "./Pokedex.css";

const Pokedex = ({ cards, isWinner = false, deckName = "" }) => {
	return (
		<div className="Pokedex" >
			<div>
				<h3>{ deckName } 1</h3>
				{ cards.deck1.map(n => (
					<Pokecard key={ n.id } id={ n.id } name={ n.name } type={ n.type } base_experience={ n.base_experience } />
				)) }
			</div>
			<div>
				<h3>{ deckName } 2</h3>
				{ cards.deck2.map(n => (
					<Pokecard key={ n.id } id={ n.id } name={ n.name } type={ n.type } base_experience={ n.base_experience } />
				)) }
			</div>
		</div >
	);
};

export default Pokedex;