# Pedro Lioni — Landing page

## Google Analytics (GA4)

1. Copie [`.env.example`](.env.example) para `.env.local` e defina `NEXT_PUBLIC_GA_MEASUREMENT_ID` com o ID `G-...` do Google Analytics (Administração > Fluxos de dados > Web).
2. **Produção (ex.: Vercel):** em **Settings > Environment Variables**, adicione `NEXT_PUBLIC_GA_MEASUREMENT_ID` com o mesmo valor e faça um novo deploy.
3. Valide em **GA4 > Relatórios > Tempo real** ao acessar o site.

Sem a variável, o build continua funcionando e o script do GA não é carregado.
