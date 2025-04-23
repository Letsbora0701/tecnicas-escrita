export default function handler(req, res) {
  if (req.method === 'POST') {
    const {
      vara, cidade, uf, resumoCaso, fatos,
      fundamentosJuridicos, pedidos,
      requerimentosFinais,
      incluirTutelaUrgencia, incluirValorCausa, incluirProvas
    } = req.body;

    const peticao = `
Excelentíssimo Senhor Doutor Juiz de Direito da ${vara} da Comarca de ${cidade}/${uf}

EMENTA PERSUASIVA:
${resumoCaso}

DOS FATOS:
${fatos}

DOS FUNDAMENTOS JURÍDICOS:
${fundamentosJuridicos}

DOS PEDIDOS:
${pedidos}

REQUERIMENTOS FINAIS:
${requerimentosFinais}

${incluirTutelaUrgencia ? "TUTELA DE URGÊNCIA: Justificativa fundamentada conforme art. 300 do CPC." : ""}
${incluirValorCausa ? "VALOR DA CAUSA: Atribuído conforme pedido principal." : ""}
${incluirProvas ? "PROVAS: Protesta por todos os meios de prova em direito admitidos." : ""}
`;

    return res.status(200).json({ peticao });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
