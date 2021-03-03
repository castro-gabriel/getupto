import styles from '../styles/components/ChangelleBox.module.css';

export function ChanllegeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeIsNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios
                </p>
            </div>
        </div>
    )
}