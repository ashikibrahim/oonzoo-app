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

  const { title, description, image, price, rating } = product;


  return (
    <>
     <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://products.oonzoo.com/product/${id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Site Name" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
