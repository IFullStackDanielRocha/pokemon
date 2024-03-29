import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'



export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/image/pokeball.png" alt="Pokeball" width="30" height="30" />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/" >
                        <div className={styles.a}>
                            Home
                        </div>

                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <div className={styles.a}>
                            Sobre
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}