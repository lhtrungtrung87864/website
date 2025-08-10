import React, {useEffect, useState} from 'react';
import { fetchProducts } from './api';
import ProductCard from './components/ProductCard';

function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=>{
    fetchProducts().then(setProducts).catch(err => console.error(err));
  },[]);

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  const addToCart = (p) => setCart(prev => [...prev, p]);
  const removeFromCart = (i) => {
    const copy = [...cart]; copy.splice(i,1); setCart(copy);
  }

  return (
    <div style={{padding:20}}>
      <h1>🛍️ Shop Quần Áo - Mẫu</h1>
      <div style={{display:'flex', gap:20, flexWrap:'wrap'}}>
        {products.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
      </div>

      <h2>Giỏ hàng ({cart.length})</h2>
      {cart.length === 0 ? <p>Chưa có sản phẩm</p> : (
        <ul>
          {cart.map((it, idx) => (
            <li key={idx}>{it.name} - {Number(it.price).toLocaleString()} VND <button onClick={() => removeFromCart(idx)}>Xóa</button></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;