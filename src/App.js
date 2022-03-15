import items from './items';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';

// CSS 
import './Pokecard.css';
import './Pokedex.css';



function App () {
	return (
		<div >
			<h1>Pokedex</h1>
			<Pokedex items={ items } />
			<Pokedex items={ items } />
		</div>

	);
}

export default App;
