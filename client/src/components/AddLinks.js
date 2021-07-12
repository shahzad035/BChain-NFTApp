import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

export const AddLinks = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/AddTransaction">Create NFT Image</Link>
            </BrowserRouter>
        </div>
    )
}
