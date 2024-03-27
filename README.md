# CONVERSOR ANOS-LUZ/KM

## Páginas do Site

### Página Inicial: CONVERSOR ANOS-LUZ/KM

- Descrição: Página principal do site, onde os usuários podem acessar o conversor de anos-luz para quilômetros.

## Componentes React

### App.jsx

- Descrição: Componente principal que contém o conversor de anos-luz para quilômetros.
- Funcionalidades:
  - [ ] Os usuários podem converter valores de quilômetros para anos-luz e vice-versa.
  - [ ] Exibe erros caso o valor inserido não seja um número não negativo maior ou igual a 1.
  - [ ] Não permite letras, espaços vazios entre números nem espaço vazio no inicio.
  - [ ] Mostra as conversões realizadas em uma tabela com a data de medição, valor em quilômetros e valor em anos-luz.

### Info.jsx

- Descrição: Página de informações sobre o desenvolvedor do site.
  - [ ] Apresenta informações sobre o desenvolvedor, como seu nome, interesses e detalhes pessoais.
  - [ ] Inclui um rodapé com informações de direitos autorais e créditos de desenvolvimento.

### Menubar.jsx

- Descrição: Componente de barra de menu que permite navegar entre as páginas do site.
- Funcionalidades:
  - [ ] Inclui um ícone de menu hamburguer que, quando clicado, abre ou fecha o menu lateral.
  - [ ] Mostra links para as páginas "Página Inicial" e "Info" quando o menu é aberto.
  - [ ] Utiliza o React Router para navegar entre as páginas do site sem recarregar a página.

### Loginbar.jsx

- Descrição: Componente de barra de login e cadastro.
- Funcionalidades:
  - [ ] Exibe um botão de "LOGIN" que, quando clicado, abre ou fecha o menu de login.
  - [ ] O estado `isLoginOpen` é alternado entre verdadeiro e falso quando o botão é clicado, controlando a exibição do menu de login.
  - [ ] No menu de login, os usuários podem inserir seu email e senha.
  - [ ] Exibe um link "Cadastre-se" que, quando clicado, alterna para exibir o menu de cadastro.
  - [ ] O estado `isCadastroOpen` é alternado quando o link "Cadastre-se" é clicado, exibindo ou ocultando o menu de cadastro.
  - [ ] No menu de cadastro, os usuários podem inserir seu nome, email e senha.
  - [ ] Exibe um link "Voltar" que, quando clicado, alterna de volta para exibir o menu de login.

Desenvolvido por Diego Ramon.# Conversor-Anos-Luz-Km-React-
