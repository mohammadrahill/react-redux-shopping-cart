import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../reducers/cartSlice";

function Cart() {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove =(id)=>{
        dispatch(remove(id))
    }


    return (
        <div>
            <h3>Cart</h3>
            {products.length === 0 && <div><strong>Cart is empty!!!</strong></div>}
            <div className='cartWrapper'>
                {products.map((product) => (
                    <div className='cartCard' key={product.id}>
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>${product.price}</h5>
                        <button onClick={()=>handleRemove(product.id)} className="btn">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;