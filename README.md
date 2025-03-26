# Estilização em React - Serviço Web

Este repositório contem os componentes de estilização do nosso serviço web estruturado em React. Ele foi criado para facilitar a construção e padronização de componentes, páginas e outros elementos visuais, todos baseados em nosso design do Figma.

## 📌 Seções disponíveis
O projeto inclui as seguintes seções:
- **Hovers**
- **Botões**
- **Modais/Cards**
- **Listas**
- **Menu**

Essas seções estão representadas no código em diretórios como `pages/nomePagina`, onde cada diretório corresponde a uma seção específica do design.

## 🚀 Como utilizar este arquivo?

1. **Clone o repositório**
   ```sh
   git clone https://github.com/i9-tech/i9-design-react.git
   ```
2. **Execute o arquivo setup.bat**
   Basta executar o arquivo `setup.bat`, clicando nele duas vezes

3. **Aguarde a instalação de dependências**
    O arquivo `setup.bat` irá instalar a última versão do Node, NPM e as dependências do projeto. Após a instalação, ele rodará automaticamente o projeto em desenvolvimento.

4. **Selecione uma opção no menu inicial**
   - Cada seção está identificada dentro de um diretório, como `pages/Botoes`, `pages/Cards`, etc.
   - Essas páginas são **componentes** e já possuem algumas estilizações padrão, como:
     - Cor de fundo
     - Elementos centralizados
     - Preenchimento de 100% da tela | **NÃO ALTERE ESSE**

5. **Adicione suas estilizações**
   - Dentro de cada componente `.jsx`, há uma `div` de exemplo com um texto para que você possa começar a prototipar.
   - Modifique e adicione páginas e componentes conforme necessário.

## 🔀 Como colaborar no projeto?

Para desenvolver novos componentes ou modificar os existentes, siga as boas práticas do Git:

1. **Crie uma nova branch**
   ```sh
   git checkout -b dev-NOMESEÇÃO
   ```
   Exemplo:
   ```sh
   git checkout -b dev-botoes
   ```

2. **Desenvolva e teste seu código**
   - Faça as alterações na sua branch.
   - Teste localmente antes de enviar.

3. **Adicione e faça commit das mudanças**
   ```sh
   git add .
   git commit -m "add: Novos estilos para botoes"
   ```

4. **Envie para o repositório remoto**
   ```sh
   git push origin dev-NOMESEÇÃO
   ```

5. **Crie um Pull Request para a branch `main`**
   - No GitHub, vá até a aba de "Pull Requests" e crie um novo PR.
   - Certifique-se de que sua branch está atualizada e sem conflitos.

6. **Aguarde a aprovação e faça o merge**
   - Após a revisão, o código será integrado à branch principal.

## ⚠️ Atenção!
- *Não* faça um Pull Request para realizar o Merge entre sua Branch e a Main enquanto não finalizar seu trabalho.
- Sempre mantenha backups antes de grandes alterações.
- Se tiver dúvidas, pergunte antes de fazer mudanças que possam impactar outros componentes.

💡 **Dica:** As imagens dos componentes estão na pasta `assets`, então caso tenha alguma dúvida ou precise de auxílio, elas estão disponíveis para visualização.

💡 **Bons Costumes:** Nomeie as branches como `dev-NomeBranch`, e sempre utilize prefixos para commits:
- `add:` Adicionar algo novo.
- `fix:` Ajustar algo existente.
- `feat:` Nova funcionalidade pequena dentro de algo grande existente.
- `del:` Remoção de algo.


Feliz codificação! 🚀

&copy; 2025 i9tech. Todos os direitos reservados. 
