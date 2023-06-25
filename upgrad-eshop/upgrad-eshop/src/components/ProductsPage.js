import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, ToggleButton, ToggleButtonGroup } from '@material-ui/core';
import { fetchCategories, fetchProducts } from '../common/api'; // Import the API functions for fetching categories and products
import './ProductsPage.css';
const ProductsPage = ({ isLoggedIn }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('default');
  
    useEffect(() => {
      // Fetch the categories and products when the component mounts
      fetchCategories()
        .then(response => setCategories(response.data))
        .catch(error => console.log(error)); // Handle any error that occurs during category fetch
  
      fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error)); // Handle any error that occurs during product fetch
    }, []);
  
    const handleSortOptionChange = (event, newSortOption) => {
      setSortOption(newSortOption);
      // Sort the products based on the selected sort option
      // Update the state to trigger a re-render with the sorted products
    };
  
    if (!isLoggedIn) {
      // Redirect the user to the login page if not logged in
      return <Redirect to="/login" />;
    }
  
    return (
      <div className="products-page-root">
        <ToggleButtonGroup value={sortOption} exclusive onChange={handleSortOptionChange} className="products-page-sort">
          <ToggleButton value="default">Default</ToggleButton>
          <ToggleButton value="priceHighToLow">Price High to Low</ToggleButton>
          <ToggleButton value="priceLowToHigh">Price Low to High</ToggleButton>
          <ToggleButton value="newest">Newest</ToggleButton>
        </ToggleButtonGroup>
        <div className="products-page-content">
          {products.map(product => (
            <Card key={product.id} className="product-card">
              <CardMedia image={product.image} className="product-card-image" />
              <CardContent>
                <Typography variant="h6" component="h2" className="product-card-title">
                  {product.title}
                </Typography>
                <Typography variant="body2" className="product-card-price">
                  {product.price}
                </Typography>
                <Typography variant="body2" className="product-card-category">
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" className="product-card-description">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsPage;
  