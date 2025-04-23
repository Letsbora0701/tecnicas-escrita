export default function handler(req, res) {
  res.status(200).json([
    "Endereçamento",
    "Ementa Persuasiva",
    "Dos Fatos",
    "Dos Fundamentos Jurídicos",
    "Dos Pedidos",
    "Requerimentos Finais",
    "Tutela de Urgência (opcional)",
    "Valor da Causa (opcional)",
    "Provas (opcional)"
  ]);
}
