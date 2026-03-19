# Pedro Lioni — Landing page

## Google Analytics (GA4)

O ID **não fica no código**: o site lê `NEXT_PUBLIC_GA_MEASUREMENT_ID` em tempo de build/execução.

### Produção (Vercel)

1. No projeto na Vercel: **Settings → Environment Variables**.
2. Adicione:
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** seu ID `G-...` (Google Analytics → Administração → Fluxos de dados → Web).
   - **Environment:** Production (e Preview/Development, se quiser testar em deploy de preview).
3. Salve e faça um **Redeploy** para o valor entrar no próximo build.

### Desenvolvimento local (opcional)

Copie [`.env.example`](.env.example) para `.env.local` e preencha o mesmo nome de variável para testar o GA no `npm run dev`.

### Validar

No GA4: **Relatórios → Tempo real** ao acessar o site publicado.

Sem a variável definida, o build segue ok e o script do GA **não** é carregado.
