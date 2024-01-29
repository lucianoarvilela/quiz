import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                key={props.key}
                trailColor="#6c54d8" // "#6c34d0"
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#ED827A']}
                colorsTime={[6, 3, 0]}
                >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}