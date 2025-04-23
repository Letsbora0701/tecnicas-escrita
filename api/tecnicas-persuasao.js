export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      nome: "Storytelling Jurídico Sensorial",
      descricao: "Narrativa jurídica com foco em imagens mentais e emoção.",
      funcionamento: "Cria simulações mentais vívidas para engajar o julgador.",
      exemplo: "Ainda antes do sol nascer, João já atravessava a cidade..."
    },
    {
      id: 2,
      nome: "Gatilhos Mentais",
      descricao: "Atalhos emocionais que influenciam decisões inconscientes.",
      funcionamento: "Usa escassez, urgência, autoridade e prova social.",
      exemplo: "Oferta por tempo limitado. Tentativa extrajudicial ignorada."
    },
    {
      id: 3,
      nome: "Espelhamento de Valores",
      descricao: "Mostra que o autor compartilha valores com o juiz.",
      funcionamento: "Constrói sintonia moral e emocional com julgador.",
      exemplo: "Não busca privilégio, mas justiça restauradora."
    },
    {
      id: 4,
      nome: "Estrutura Cognitiva do Texto",
      descricao: "Organiza o texto para facilitar compreensão e memorização.",
      funcionamento: "Usa ritmo, repetição, clareza e encadeamento lógico.",
      exemplo: "Grave. Culpável. Indenizável."
    }
  ]);
}
