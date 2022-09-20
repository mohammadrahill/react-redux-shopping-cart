import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../reducers/cartSlice';
import { fetchProducts } from "../reducers/productSlice";
import { STATUES } from "../reducers/productSlice";

function Product() {
    const dispatch = useDispatch();
    const { products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])


    if (status === STATUES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    const handleAdd = (product) => {
        dispatch(add(product))
    }



    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className='cart' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>${product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Product;