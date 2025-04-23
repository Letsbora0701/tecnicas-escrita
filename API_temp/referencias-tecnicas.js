export default function handler(req, res) {
  res.status(200).json([
    {
      tecnica: "Storytelling Jurídico Sensorial",
      autores: ["Marcelo Brando", "António Damásio", "Leonard Mlodinow"],
      obras: ["Como Decidem os Juízes?", "O Cérebro Criador", "Subliminar"]
    },
    {
      tecnica: "Gatilhos Mentais",
      autores: ["Robert Cialdini", "Daniel Kahneman", "Leonard Mlodinow"],
      obras: ["As Armas da Persuasão", "Rápido e Devagar", "Subliminar"]
    },
    {
      tecnica: "Espelhamento de Valores",
      autores: ["Lyra Filho", "Damásio", "Daniel Mitidiero"],
      obras: ["Teoria Dialética do Direito", "O Cérebro Criador", "Precedentes: Da Persuasão à Vinculação"]
    },
    {
      tecnica: "Estrutura Cognitiva do Texto",
      autores: ["Steven Pinker", "Victor Gabriel Rodríguez", "António Damásio"],
      obras: ["Como a Mente Funciona", "Argumentação Jurídica", "O Cérebro Criador"]
    }
  ]);
}
