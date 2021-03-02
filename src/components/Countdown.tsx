import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const [time, setTime] = useState(0.1 * 60); // Para contagem do tempo
    const [isActive, setIsActive] = useState(false); // Este estado vai armazenar se o countdown está acontecendo ou está parado 
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60); //Para arredondar o numero para baixo
    const seconds = time % 60;

    /* O split sem passar caractere vai dividir cada um dos numeros e guardar em um array
     * E caso eu esteja em um minuto que não tem 2 caracteres, ele preence para a esquerda com 0
    */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        console.log('active');
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            console.log('countdown finalized');
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])



    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {  hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (  
                        <button
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo    
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            {/* { isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'} */}
                            Iniciar um ciclo
                        </button>

                    ) }  
                </>
            )}
        </div>
    );
}