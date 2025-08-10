import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080/clothing_backend';

export const fetchProducts = () => axios.get(`${API_BASE}/products.php`).then(r => r.data);