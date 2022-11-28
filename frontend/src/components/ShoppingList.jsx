import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';

// Extaire les categories dans plantList et les afficher en liste.
function ShoppingList() {
    
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

	return (
		<div>
			{/* Affiche la liste des catégories de plant */}
			<ul>
				{categories.map((categorie) => (
					<li key={categorie}>{categorie}</li>
				))}
			</ul>

			{/* Afficher la liste des plantes : */}
			<ul className="lmj-plant-list">
				{plantList.map((plant) => (
					// on se sert de l'id des plant pour la key :
					<li key={plant.id} className="lmj-plant-item">
						{plant.name}
						{plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	);
}
export default ShoppingList;

// <ul>
// 	{plantList.map((plant, index) => (
// 		/* pour chaque entrée du tableau, retourne un élément  <li> : */
// 		<li key={`${plant}-${index}`}>{plant}</li>
// 	))}
// </ul>
