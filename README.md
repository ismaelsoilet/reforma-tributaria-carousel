# 📊 Carrossel & PDF - Reforma Tributária do Consumo no Brasil

Este repositório contém os arquivos de código-fonte e os recursos gerados para o carrossel do Instagram e o documento em PDF sobre a **Reforma Tributária do Consumo no Brasil** (com base na Emenda Constitucional nº 132/2023), criado para o perfil da **@milenelucena87**.

## 🎨 Design & Identidade Visual
O design foi construído seguindo as melhores práticas visuais modernas:
- **Paleta de Cores**: Tons sofisticados de roxo, violeta e acentos neon.
- **Estética**: Glassmorphism (efeito vidro fosco), malhas de grade (grid overlays), formas hexagonais estruturadas e gradientes orgânicos.
- **Tipografia**: Família *Inter* (Google Fonts) para alta legibilidade.
- **Responsividade**: Layout dinâmico que funciona tanto no navegador quanto perfeitamente enquadrado na proporção de publicação do Instagram (1080x1350px, proporção 4:5).

---

## 📁 Estrutura de Arquivos
- **`index.html`**: Estrutura semântica HTML5 com os 6 slides estruturados.
- **`style.css`**: Sistema de design moderno, animações sutis, variáveis HSL e estilos específicos para mídia de impressão (exportação em PDF).
- **`script.js`**: Controle interativo do carrossel (suporta teclas de seta esquerda/direita, cliques, arrastar em telas touch e visualização em grade).
- **`export.js`**: Script automatizado com Puppeteer para renderizar o carrossel sem cabeçalhos de navegação e exportar as imagens em alta resolução (`@2x`, 1080x1350px) e o PDF completo.
- **`output/`**: Contém os arquivos prontos para publicação:
  - `slide-1.png` até `slide-6.png`: Imagens otimizadas em alta resolução para o Instagram.
  - `reforma-tributaria.pdf`: PDF completo e unificado, ideal para distribuição ou leitura.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em seu ambiente (ou WSL).

### Passo a Passo
1. Instale as dependências de renderização:
   ```bash
   npm install
   ```

2. Abra o arquivo `index.html` diretamente em seu navegador ou use um servidor local (ex: Live Server).

3. Para gerar novamente as imagens e o PDF (caso altere algo no código):
   ```bash
   node export.js
   ```
   *Nota: O script de exportação roda um navegador headless usando Puppeteer, limpa os cabeçalhos temporários do site e tira capturas perfeitas em formato 1080x1350px.*

---

## 📄 Conteúdo dos Slides (Roteiro)
1. **Slide 1**: Reforma Tributária do Consumo no Brasil - O que muda de verdade?
2. **Slide 2**: Para os Consumidores (Simplificação e Imposto Único: IVA, Cashback de impostos para famílias de baixa renda).
3. **Slide 3**: Para as Empresas (Simplificação burocrática, Fim da cumulatividade, Crédito financeiro imediato).
4. **Slide 4**: Para o Governo (Fim da guerra fiscal, Criação do Comitê Gestor do IBS, Transição federativa segura).
5. **Slide 5**: Cronograma de Transição (2026: Início com alíquotas de teste; 2029 a 2032: Extinção gradual do ICMS e ISS; 2033: Vigência integral do novo modelo).
6. **Slide 6**: Conclusão (O Brasil se alinha ao padrão internacional de IVA. Base Legal: Emenda Constitucional nº 132/2023. Perfil: @milenelucena87).

---

Criado e estruturado com carinho para **@milenelucena87**! 🚀
