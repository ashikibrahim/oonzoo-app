
import Link from 'next/link';
import styles from './navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>oonzoo</Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
