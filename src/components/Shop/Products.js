import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {
  const [prods, setProds] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_PRODUCTS);
      if(response.status !== 200) {
        throw new Error(response.status + ': ' + response.statusText || 'Something went wrong');
      }
      const data = await response.json();
      
      const items = [];
      for(const p in data) {
        items.push({
          id: p,
          title: data[p].name,
          price: data[p].price,
          description: data[p].description,
        });
      }
      setProds(items);
    } catch (error) {
      throw new Error(error.status + ': ' + error.message || 'Something went wrong');
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {prods?.map(p => (
          <ProductItem
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
