# API de Petições Jurídicas Persuasivas 

Esta API foi projetada para gerar petições jurídicas altamente persuasivas com base em:

- Storytelling jurídico sensorial
- Técnicas de neurociência, psicologia jurídica e cognitiva
- Argumentação retórica (clássica e moderna)
- Embasamento teórico em obras de autores como:
  - Robert Cialdini
  - Daniel Kahneman
  - Steven Pinker
  - António Damásio
  - Lyra Filho
  - Carla Pinheiro
  - Aristóteles, entre outros

## Funcionalidades principais

- `POST /gerar-peticao`: Geração de petições completas e estruturadas
- `GET /estruturas`: Estrutura padrão de petições
- `GET /tecnicas-persuasao`: Técnicas aplicadas e exemplos
- `GET /referencias-tecnicas`: Obras e autores relacionados a cada técnica

## Aplicações

- Ações personalizadas com OpenAI GPT
- Geração de peças jurídicas no contexto de advocacia estratégica
- Ensino e estudo de argumentação jurídica e psicologia do direito

## Exemplo de chamada

```bash
curl -X POST https://api.peticaointeligente.com/v1/gerar-peticao \
  -H "Content-Type: application/json" \
  -d '{
    "vara": "2ª Vara Cível",
    "cidade": "Curitiba",
    "uf": "PR",
    "resumoCaso": "Cliente sofreu lesão após falha de segurança...",
    "fatos": "...",
    "fundamentosJuridicos": "...",
    "pedidos": "...",
    "requerimentosFinais": "...",
    "incluirTutelaUrgencia": true,
    "incluirValorCausa": true,
    "incluirProvas": true
  }'
