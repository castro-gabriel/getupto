import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    // Para contagem do tempo
    const [time, setTime] = useState(25 * 60);
    // Este estado vai armazenar se o countdown está acontecendo ou está parado
    const [active, setActive] = useState(false);

    //Para arredondar o numero para baixo
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    /* O split sem passar caractere vai dividir cada um dos numeros e guardar em um array
     * E caso eu esteja em um minuto que não tem 2 caracteres, ele preence para a esquerda com 0
    */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    useEffect(() => {
        console.log('active');
        if(active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [active, time])

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

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}