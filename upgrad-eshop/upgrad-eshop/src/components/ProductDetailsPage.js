import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../common/api'; // Import the API function for fetching product details
import './ProductDetailsPage.css';



const ProductDetailsPage = () => {
    const { id } = useParams(); // Get the product ID from the URL parameter
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      // Fetch the product details when the component mounts
      fetchProductById(id)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error)); // Handle any error that occurs during product fetch
    }, [id]);
  
    if (!product) {
      // Display a loading state or error message if the product details are being fetched or not available
      return <div>Loading...</div>;
    }
  
    return (
      <div className="product-details-page-root">
        <div className="product-details">
          <img src={product.image} alt={product.title} className="product-details-image" />
          <div className="product-details-content">
            <h2 className="product-details-title">{product.title}</h2>
            <p className="product-details-price">{product.price}</p>
            <p className="product-details-description">{product.description}</p>
            {/* Implement the quantity input for the product */}
            {/* You can use an input field or any other suitable component */}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetailsPage;
  