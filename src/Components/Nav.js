import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const Nav = () => {

    const {cartItems, showHideCart} = useContext(CartContext); 

    return (  
        <div className="navbar">
            <h2>Mouse Store</h2>
            <div className="nav-list">
                <li>Home</li>
                <li>Products</li>
                <li><button className="cartbtn" onClick={showHideCart}>Cart <span>{cartItems.length}</span></button></li>
            </div>
        </div>
    );
}
 
export default Nav;