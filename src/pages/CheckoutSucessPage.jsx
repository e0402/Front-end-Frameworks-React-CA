import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
    return (
        <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6">Checkout Successful!</h2>
            <p className="text-xl mb-6">Thank you for your purchase.</p>
            <Link to="/" className="text-blue-500 underline">Back to Home</Link>
        </div>
    );
};

export default CheckoutSuccessPage;
