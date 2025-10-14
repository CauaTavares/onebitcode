import Button from "../button"
import styles from "./styles.module.css"

export default function Card({ title, posterImg }) {
    return (
        <div className={styles.container}>
            
            <img className="poster" src={posterImg} alt={title} />
            <div>
                <h2>{title}</h2>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex suscipit, quam asperiores quaerat pariatur nesciunt inventore quibusdam illo alias laborum. Porro reprehenderit optio officiis repellendus magnam recusandae magni ipsa.</p>

                <Button text="Comprar agora" />
            </div>


        </div>
        
    )
}