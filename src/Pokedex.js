import React from 'react'; // need to have this at the top of every component created (may not need to with new react)
import Pokecard from './Pokecard';

// CSS
import "./Pokecard.css";
import "./Pokedex.css";

const Pokedex = ({ items }) => {
	return (
		<div className="Pokedex" >
			<div>
				{ items.map(n => (
					<Pokecard key={ n.id } item={ n.item } id={ n.id } name={ n.name } type={ n.type } base_experience={ n.base_experience } img={ n.img } />
				)) }
			</div>
		</div >
	);
};

export default Pokedex;