import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
    const [selectedCategory, setSelectedCategory] = useState("all");

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 },
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }

    // Regrouper les plantes par catégorie
    const groupedPlants = plantList.reduce((acc, plant) => {
        if (!acc[plant.category]) {
            acc[plant.category] = [];
        }
        acc[plant.category].push(plant);
        return acc;
    }, {});

    // Filtrer les plantes selon la catégorie sélectionnée
    const filteredPlants = selectedCategory === "all" ? plantList : groupedPlants[selectedCategory] || [];

    return (
        <div>
            <h2 className="lmj-lmj-subtitle">🌿 Plantes à vendre 🌿</h2>

            {/* Sélecteur de catégorie */}
            <div className="lmj-category-filter">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="lmj-category-select"
                >
                    <option value="all">Toutes les catégories</option>
                    {Object.keys(groupedPlants).map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <button onClick={() => setSelectedCategory("all")} className="lmj-reset-button">
                    Réinitialiser
                </button>
            </div>

            <div className="lmj-category-container">
                {filteredPlants.length > 0 ? (
                    <ul className="lmj-plant-list">
                        {filteredPlants.map((plant) => (
                            <li key={plant.id} className="lmj-plant-block">
                                <span className="lmj-price-tag">{plant.price}€</span>
                                <PlantItem
                                    id={plant.id}
                                    cover={plant.cover}
                                    name={plant.name}
                                    water={plant.water}
                                    light={plant.light}
                                />
                                <button className="lmj-add-button" onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucune plante disponible dans cette catégorie.</p>
                )}
            </div>
        </div>
    );
}

export default ShoppingList;
