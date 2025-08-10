import React from 'react';

export default function ProductCard({product, onAdd}){
  return (
    <div style={{border:'1px solid #ddd', padding:12, width:220}}>
      <img src={`${process.env.REACT_APP_API_URL || 'http://localhost:8080/clothing_backend'}/images/${product.image}`} alt={product.name} width="180" />
      <h3>{product.name}</h3>
      <p>{Number(product.price).toLocaleString()} VND</p>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ</button>
    </div>
  );
}