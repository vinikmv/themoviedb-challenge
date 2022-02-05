# Front-End Challenge
> Projeto de uma aplicação utilizando React e Styled Components, que permite o usuário visualizar a listagem dos filmes mais populares e os detalhes de cada filme.
> Utilizado a API do TheMovieDB

## Pré-requisitos
> - **NPM** com versão superior ou igual que 5.6 - [NPM Download](https://nodejs.org/en/download/)
> - **GIT** com a versão mais atual - [GIT Download](https://git-scm.com/downloads)
> - Chave da API do The MovieDB

## Instalação
> Abra o terminal e clone esse projeto em seu computador com o comando:
> ```
> 	git clone https://github.com/vinikmv/themoviedb-challenge.git
> ```
> Acesse a pasta do projeto seu terminal:
> ```
> 	cd themoviedb-challenge
> ```
> Já na pasta da aplicação em seu terminal, digite o seguinte comando:
> ```
> 	npm install
> ```
> Aguarde a instalação das dependências do projeto.
>

## Configuração da Chave da API no Projeto
> Crie uma conta no TheMovieDB clicando [aqui](https://www.themoviedb.org/signup)
> Caso já possui uma conta, realize o login clicando [aqui](https://www.themoviedb.org/login)
> 
> Após realizar o login, você será redirecionado para as [configurações](https://www.themoviedb.org/settings/api) do seu perfil, onde você poderá obter a chave da API (v3 auth).  
> Caso for a sua primeira vez na plataforma, será necessário [solicitar](https://www.themoviedb.org/settings/api/request) a chave API.  
> Copie a Chave da API (v3 auth), navegue até o arquivo .env na pasta raiz do projeto e cole o valor na variável
>```
>REACT_APP_TMDB_API_KEY=
>```
>**Exemplo** (Com chave aleatória):
>```
>REACT_APP_TMDB_API_KEY=83a1281113895ea7988fdf20bbbd3b1b
>```
>
## Execução
> Após ter aguardado a instalação das dependencias de desenvolvimento e ter configurado a chave da API no projeto, execute o comando:
> ```
> 	npm start
> ```
> A aplicação estará disponível para visualização em seu navegador, caso isso não aconteça automaticamente abre o navegador no seguinte endereço: _localhost:3000_
>

