import React from 'react';
import Product from '../components/Product';

function Home() {
    return (
        <div>
           <h2 className='heading'>Welcome to the Rahil Store</h2>
           <section>
               <h3>Product</h3>
               <Product />
           </section>
        </div>
    );
}

export default Home;