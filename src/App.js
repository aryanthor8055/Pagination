import './App.css';
import { useEffect, useState } from 'react'
function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products)
    }

  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage)
  }
  return (
    <div>
      {
        products.length > 0 && <div className='products'>{
          products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (<span className='products__single' key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
            )
          })
        }</div>
      }
      {
        products.length > 0 && <div className='pagination'>
          <span>◀️</span>
          {
            [...Array(products.length / 10)].map((_, i) => {
              return <span onClick={() => selectPageHandler(i + 1)} key={i}>{i + 1}</span>
            })
          }
          <span>▶️</span>
        </div>
      }
    </div>

  );
}

export default App;
