
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const ProductCard = ({product}) => {
    const { addToCart } = useContext(CartContext)
    return (  
        <div className="product">
            <div className="productCard">
                <div className="productCard__img"><img className="" src={product.image} alt="" id="gpro"/></div>
                <h3>{product.name}</h3>
                <div className="productCard__price">
                    {product.price}
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum, quos tempore sapiente eum accusamus.</p>
                <button className="addBtn" onClick={() =>{
                    addToCart(product)
                }}>Add to cart</button>
            </div>
        </div>
    );
}
 
export default ProductCard;