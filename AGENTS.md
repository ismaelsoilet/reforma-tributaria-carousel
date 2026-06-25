# Diretrizes Comportamentais para Agentes de IA — Reforma Tributária Carrossel (v1.0.0)

> Estas diretrizes são **agnósticas ao modelo de IA** e devem ser seguidas por qualquer LLM atuando neste projeto.
> Baseadas nos princípios de [Andrej Karpathy](https://x.com/karpathy/status/2015883857489522876) sobre os erros mais comuns de LLMs em codificação.

**Regra de Ouro:** Estas diretrizes priorizam **cautela sobre velocidade**. Para tarefas triviais (correções de digitação, one-liners óbvios), use bom senso — nem toda alteração precisa do rigor total.

---

## 1. Pense Antes de Codificar (Think Before Coding)

**Não presuma. Não esconda confusão. Exponha trade-offs.**

Antes de implementar:
- Declare suas premissas explicitamente. Se estiver incerto, **pergunte**.
- Se houver múltiplas interpretações possíveis, apresente-as ao usuário — não escolha uma silenciosamente.
- Se existir uma abordagem mais simples, avise. Questione requisitos quando for pertinente.
- Se algo não estiver claro, **pare**. Nomeie exatamente o que está confuso e peça esclarecimento.

---

## 2. Simplicidade em Primeiro Lugar (Simplicity First)

**O mínimo de código que resolve o problema. Nada especulativo.**

- Não crie funcionalidades além do que foi explicitamente solicitado.
- Não crie abstrações para códigos que serão usados apenas uma vez.
- Não adicione "flexibilidade" ou "configurabilidade" que não foi pedida.
- Não crie tratamentos de erro para cenários impossíveis.
- Se 200 linhas poderiam ser 50, reescreva.

---

## 3. Alterações Cirúrgicas (Surgical Changes)

**Toque apenas no que for estritamente necessário. Limpe apenas a sua bagunça.**

Ao editar código existente:
- **Não "melhore"** código adjacente, comentários ou formatação fora do escopo.
- **Não refatore** coisas que não estão quebradas.
- **Siga o estilo existente** rigorosamente, mesmo que você fizesse diferente.
- Se notar código morto não relacionado, **mencione** ao usuário — não delete.

---

## 4. Execução Orientada a Objetivos (Goal-Driven Execution)

**Defina critérios de sucesso. Itere até verificar.**

Transforme tarefas imperativas em metas verificáveis:

| Em vez de...        | Transforme para...                                           |
|---------------------|--------------------------------------------------------------|
| "Adicionar validação" | "Escrever testes para entradas inválidas, depois fazê-los passar" |
| "Consertar o bug"     | "Escrever teste que reproduza o bug, depois fazê-lo passar"       |
| "Refatorar X"         | "Garantir que testes passem antes E depois da alteração"          |

Para tarefas de múltiplos passos, declare um plano de verificação:
```text
1. [Passo] → verificar: [teste/validação]
2. [Passo] → verificar: [teste/validação]
3. [Passo] → verificar: [teste/validação]
```

---

## 🏗️ Sobre o Projeto

Este repositório contém um carrossel web interativo sobre a **Reforma Tributária do Consumo no Brasil** (Emenda Constitucional nº 132/2023), criado para o perfil da **@milenelucena87**.

### Estrutura
- `index.html` — Página principal com o carrossel e modo grade.
- `style.css` — Estilos (design visual fiel à identidade).
- `script.js` — Interatividade (navegação, modo carrossel/gride, animações).
- `export.js` — Exportador via Puppeteer para gerar imagens e PDF dos slides.
- `output/` — Arquivos gerados pela exportação.

### Stack
- HTML5 / CSS3 / JavaScript vanilla (sem frameworks).
- Puppeteer (Node.js) para exportação (`pnpm export` ou `node export.js`).
- Fontes via Google Fonts (Inter).

### Comandos
```bash
pnpm export       # Gera imagens e PDF em output/
node export.js    # Alternativa sem pnpm
```

---

## Git Configuration
**IMPORTANT**: Always ensure the Git author is correctly configured to avoid deployment blockers.
- **Name**: Ismael Soilet
- **Email**: ismael.soilet@hotmail.com

If necessary, configure the repository locally before committing:
`git config user.email "ismael.soilet@hotmail.com" && git config user.name "Ismael Soilet"`
