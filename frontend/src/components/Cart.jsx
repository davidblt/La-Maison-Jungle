import '../styles/Cart.css';

// Prices :
const monsteraPrice = 8;
const lierrePrice = 10;
const bouquetDeFleursPrice = 15;

function Cart() {
	return (
		<div className="lmj-cart">
			<h2>Panier</h2>
			<ul>
				<li>Monstera : {monsteraPrice}€</li>
				<li>Lierre : {lierrePrice}€</li>
				<li>Bouquet de fleurs : {bouquetDeFleursPrice}€</li>
			</ul>
			<p>Total : {monsteraPrice + lierrePrice + bouquetDeFleursPrice}€</p>
		</div>
	);
}

export default Cart;
