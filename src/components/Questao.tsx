import { useState, useEffect } from "react";
import QuestaoModel from "@/model/questao";
import styles from "@/styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Temporizador from "./Temporizador";
import Resposta from "./Resposta";

const letras = [
    { valor: "A", cor: "#F2C866" },
    { valor: "B", cor: "#F266BA" },
    { valor: "C", cor: "#85D4F2" },
    { valor: "D", cor: "#BCE596" },
];

interface QuestaoProps {
    valor: QuestaoModel;
    tempoPraResposta?: number;
    respostaFornecida: (indice: number) => void;
    tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    const [ fadeProp, setFadeProp ] = useState({ fade: styles.initial });

    useEffect(() => {
        setFadeProp({ fade: styles.initial });
        setTimeout(() => {
            setFadeProp({ fade: styles.fadeIn });
        }, 500);
        // run on component unmount
        return () => {
            // setFadeProp({ fade: styles.fadeOut });
        };

    }, [questao]);

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={`${questao.id}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                />
            );
        });
    }

    return (
        <div className={styles.questao}>
        {/* </div><div className={fadeProp.fade}> */}
            <Enunciado texto={questao.enunciado} />
            <Temporizador
                key={questao.id}
                duracao={props.tempoPraResposta ?? 10}
                tempoEsgotado={props.tempoEsgotado}
            />
            {renderizarRespostas()}
        </div>
    );
}
