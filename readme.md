<p align="center">
  <img alt="Logo da Letmeask" src=".github/logo.svg" width="160px">
</p>

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=version&message=1.0.0&color=8257E5&labelColor=000000" alt="Versão"> 

  <img src="https://img.shields.io/github/last-commit/lhmoreno/letmeask?color=8257E5&labelColor=000000" alt="Último commit" />

  <img src="https://img.shields.io/github/repo-size/lhmoreno/letmeask?color=8257E5&labelColor=000000" alt="Tamanho do repositório" />

  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000" alt="Licença">   
</p>

<h1 align="center">
  <img alt="Letmeask" src=".github/capa.png" />
</h1>

## Projeto

Letmeask é perfeito para criadores de conteúdos e professores poderem criar salas de perguntas e respostas, de uma forma muito organizada e democrática. 

O código base deste projeto foi desenvolvido pela **[Rocketseat](https://www.rocketseat.com.br/)**, nos dias 20 a 27 de Junho de 2021. Mas agora ele conta com algumas integrações atualizadas como [React Router - Version 6](https://reactrouter.com/docs/en/v6/getting-started/overview) e [Firebase SDK Web – Version 9](https://firebase.google.com/docs/web/modular-upgrade). Além disso, ele está recebendo atualizações frequentes, isso inclui novas funcionalidades e melhorias no desempenho. Para acompanhar o projeto em modo de de produção acesse: https://letmeask-92dc4.web.app/

## Tecnologias utilizadas
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [react-inlinesvg](https://github.com/gilbarbara/react-inlinesvg)

## Funcionalidades
- **Atuais**
  - [x] Criar uma conta
  - [x] Pesquisar salas por ID
  - [x] Entrar em uma sala
  - [x] Ver todas perguntas em real-time
  - [x] Enviar uma pergunta
  - [x] Dar like em outra pergunta
  
<br />

- **Futuras**
  - [ ] Criar uma sala
  - [ ] Listar salas criadas pelo usuário
  - [ ] Encerrar uma sala
  - [ ] Marcar pergunta como respondida
  - [ ] Destacar pergunta
  - [ ] Listar perguntas feitas pelo usuário
  - [ ] Deletar pergunta
  - [ ] Editar pergunta feita
  - [ ] Deletar pergunta feita
  - [ ] Deletar sua conta

<br />

- **Layout**
  - [x] Responsividade
  - [ ] Acessibilidade

## Melhorias
- Criar um PWA
- Login com email e senha
- Recuperação de senha
- Login com outras redes sociais


## Como executar
Para garantir o devido funcionamento do projeto, certifique-se de ter uma conta no [Firebase](https://firebase.google.com/). Depois siga as configurações a seguir:

1. Crie um projeto com nome Letmeask, ative autenticação com Google e crie um Realtime Database.

2. Adicione essas regras no seu Realtime Database:
```json
{
  "rules": {
    "rooms": {
      ".read": true,
      ".write": false,
        "$roomId": {
        ".read": true,
        ".write": false,
        "questions": {
          ".read": true,
          ".write": false,
          "$questionId": {
            ".read": true,
          	".write": "auth != null && !data.exists()",
            "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"  
          }
          }
        }
      }
    }
  }
}
```

3. Clone este projeto: 
```bash 
$ git clone https://github.com/lhmoreno/letmeask
```

4. Acesse a pasta e instale as depedências:
```bash
# Acesse a pasta
$ cd letmeask

# Instalar as dependências
$ yarn
```

5. No firebase, crie um app Web. Após isso crie um arquivo ```.env``` dentro da pasta raíz do projeto e preencha os dados com as informações fornecidas pelo firebase:

```
# Firebase
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
```

6. Agora basta rodar o projeto com:
```bash
$ yarn start
```

O app estará disponível no seu browser pelo endereço http://localhost:3000

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [license](license) para mais detalhes.
