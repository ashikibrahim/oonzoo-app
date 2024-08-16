import styles from "./page.module.css";
import { fetchProducts } from "./api";
import Link from "next/link";


export default async function Home() {
  const products = await fetchProducts()

  return (
    <main className={styles.main}>
    <div className={styles.products}>
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id}  href={`/products/${product.id}`}passHref>
            <div key={product.id} className={styles.product}>
              <img src={product.image} alt={product.title} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>Price:${product.price}</p>
              <h4 className={styles.rating}>Rating: {product.rating.rate}</h4>
            </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
  </main>
);
}
