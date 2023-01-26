import './App.css';
import { useEffect, useState } from 'react'
function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products)
    }

  }

  console.log(products);
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
