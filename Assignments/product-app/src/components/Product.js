import React, { useState, useEffect } from 'react';
import './style.css'

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();

    return () => {
      // Cleanup function (if needed)
    };
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (searchTerm === '') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };

    filterProducts();
  }, [searchTerm, products]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search products" />
      {filteredProducts.length > 0 ? (
        <div className='container'>
          {filteredProducts.map((product) => (
            <div key={product.id}className='card'>
                <img src={product.image} alt="" />
                
              <div className="info">
              <h2>{product.title}</h2>
              <p>Price : {product.price}</p>
              </div>
              {/* Render other product details */}
              </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductDetails;