import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Navbar() {
    const item = useSelector((state)=>state.cart)
    return (
        <div className='navBar'>
            <span className='logo'>RAHIL STORE</span>

            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart:<button className='badge'>{item.length}</button></Link>
            </div>
        </div>
    );
}

export default Navbar;