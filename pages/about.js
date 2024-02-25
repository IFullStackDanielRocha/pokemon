import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About() {

    return (
        <>
            <div className={styles.about}>
                <h1>Sobre o projeto</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat iste quis quibusdam? Quos maxime cupiditate quaerat ea. Quae, perferendis vitae quia quo architecto, est nisi, sunt minus tempore temporibus tenetur.</p>

                <Image src="/image/charizard.png" alt='Pokemon' width="500" height="500" />
            </div>
        </>
    )
}