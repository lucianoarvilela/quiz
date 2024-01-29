import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (!id) {
        res.status(400).send(
            "ID da questão não fornecido. Por favor, forneça o ID da questão."
        );
        return;
    }

    const questao = questoes.find((q) => q.id === Number(id));

    if (questao) {
        res.status(200).json((questao.embaralharRespostas()).paraObjeto());
    } else {
        res.status(204).send({});
    }
};

export default handler;
