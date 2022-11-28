import React from 'react';
import Banner from './components/Banner';
// import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';

function App() {
	return (
		<React.Fragment>
			{/* Permet de ne pas afficher la balise parent dans le DOM */}
			<Banner />
			{/* <Cart /> */}
			<ShoppingList />
		</React.Fragment>
	);
}

export default App;
