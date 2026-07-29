# Dra. Angela Carolina — Site Oficial

Site institucional da Dra. Angela Carolina Nascimento, médica dermatologista em Manaus (CRM-AM 14029, RQE 6467).

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19
- TypeScript
- CSS Modules

## Como rodar localmente

```bash
npm install
npm run dev
```

O site fica disponível em [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera o build de produção
- `npm run start` — sobe o build de produção
- `npm run lint` — roda o linter

## Estrutura

```
app/
  layout.tsx        # layout raiz, fontes e metadata (SEO/Open Graph)
  page.tsx           # página principal
  page.module.css    # estilos da página principal
  globals.css        # estilos globais
public/              # assets estáticos
```
