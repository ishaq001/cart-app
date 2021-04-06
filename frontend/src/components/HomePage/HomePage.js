import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>

            <div>
            <div className="links">
                <Link to="/store">
                <span>Shopping Store</span>
                </Link>

                <Link to="/cart">
                <span>Checkout</span>
                </Link>

                <Link to="/add">
                <span>Add Items</span>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default HomePage
