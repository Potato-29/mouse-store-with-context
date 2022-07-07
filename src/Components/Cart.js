import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import CartItem from "./CartItem";

const Cart = () => {

    const {showCart, cartItems, showHideCart} = useContext(CartContext)

    return <>
        {showCart && (
            <div className="cart__wrapper">
                <div style={{textAlign: 'right'}}>
                    <button onClick={showHideCart}>hide</button>
                </div>
                <div className="cart__innerWrapper">
                    {cartItems.length === 0 ? (<h4>Empty!</h4>) : (
                        <ul>
                            {cartItems.map((item) => (
                                <CartItem key={item._id} item={item}/>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="Cart__cartTotal">
                    <div className="">
                        Total
                    </div>
                    <div></div>
                    <div style={{marginLeft: 5}}>
                        {cartItems.reduce((amount, item) => item.price + amount, 0)}
                    </div>
                </div>
            </div>
        )}
    </>
        
}
 
export default Cart;