import "../styles/Cart.css";
import { useState, useEffect } from "react";
import PlantItem from "./PlantItem";

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total]);
    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setIsOpen(false)} className="btn btn-danger">Fermer</button>
            <h2><i className="fas fa-shopping-cart"></i></h2>
            {cart.length > 0 ? <ul>
                {cart.map(({name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                    </div>
                ))}
            </ul> : <div>Aucune commande</div>}
            <hr/>
            <div>
                <h3>Total : {total}€</h3>
            </div>
            <button className="btn btn-secondary" onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <button className="btn btn-success lmj-cart-toggle" onClick={() => setIsOpen(true)}>
            Mon pannier <i className="fas fa-shopping-cart"></i>
        </button>
    );
}

export default Cart;