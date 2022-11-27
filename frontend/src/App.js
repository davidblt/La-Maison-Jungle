import React from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';

function App() {
	return (
		<React.Fragment>
			{/* Permet de ne pas afficher la balise parent dans le DOM */}
      <Banner />
      <Cart />
      
		</React.Fragment>
	);
}

export default App;
