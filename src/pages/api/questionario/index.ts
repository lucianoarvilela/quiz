import { embaralhar } from "@/functions/arrays";
import questoes from "../bancoDeQuestoes"

const handler = (req: any, res: any) => {
    const {qtd} = JSON.parse(req.body);
    const ids = questoes.map(questao => questao.id).slice(0, qtd)
    res.status(200).json(embaralhar(ids))
}

export default handler;
