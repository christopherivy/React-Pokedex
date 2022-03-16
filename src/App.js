import cards from './cards';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

// CSS 
import './Pokecard.css';
import './Pokedex.css';

const choice = (items) => {
	let index = Math.floor(Math.random() * items.length);
	return items[ index ];
};

function getRandom (arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if(n > len)
		throw new RangeError("getRandom: more elements taken than available");
	while(n--) {
		var x = Math.floor(Math.random() * len);
		result[ n ] = arr[ x in taken ? taken[ x ] : x ];
		taken[ x ] = --len in taken ? taken[ len ] : len;
	}
	return result;
}

// console.log(getRandom(cards, 4));

function App () {
	let deck1 = getRandom(cards, 4);
	let deck2 = getRandom(cards, 4);

	return (
		<div >
			<h1>Pokedex</h1>
			<Pokegame deck1={ deck1 } deck2={ deck2 } />
		</div>
	);
}

export default App;
