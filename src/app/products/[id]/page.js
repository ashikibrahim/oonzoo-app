// app/products/[id]/page.js
import styles from "./product.module.css";
import Head from 'next/head';


export async function generateMetadata({ params }) {
  const { id } = params;
  console.log("id: ",id);
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  console.log("res: ",res);
  if (!res.ok) {
    // Handle not found response
    return {
      title: 'Product Not Found',
    };
  }
  const product = await res.json();
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    return <p>Product not found</p>;
  }
  const product = await res.json();

  return (
    <>
     <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://yourdomain.com/products/${product.id}`} />
        <meta property="og:type" content="product" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
      </Head>
    <div className={styles.productContainer}>
    <h1 className={styles.productTitle}>{product.title}</h1>
    <img
      className={styles.productImage}
      src={product.image}
      alt={product.title}
    />
    <p className={styles.productDescription}>Description: {product.description}</p>
    <p className={styles.productPrice}>Price: ${product.price}</p>
    <p className={styles.productRating}>Rating: {product.rating.rate}</p>
  </div>
  </>
  );
}
