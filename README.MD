# Buscador de CEP

## ✅ Descrição do Projeto
<p> Este projeto foi construído no curso Fabrica de aplicativos do <a href="https://sujeitoprogramador.com/"> Sujeito Programador</a>, com <a href="https://reactnative.dev/"> React Native</a>. </p>

<p> Teve como objetivo mostrar o estudo dos Hooks (useState), e poder utilizar componentes funcionais para guardar estado e gerenciar o ciclo de vida do componente no Recte Native.</p>

## 🎁 Demostração e resultado da aplicação
<h1 align="center">
  <img alt="Buscar CEP" title="buscaCep" src="img/viaCep.gif" width=300/>
</h1>

## 🎲 Pré-requisitos e como rodar a aplicação

Este aplicatovo foi desenvido com [Expo](https://expo.io/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de código, recomendo o [VSCode](https://code.visualstudio.com/).

Caso deseje ver o aplicativo excutando em sseu celular físico, baixe também o aplicativo [Expo Go](https://expo.io/client) em seu celular.

### Rodando e executando a aplicação 
#### - Clone este repositório:
- git clone <https://github.com/WillianMedeiros14/buscaCEP.git>

#### - Acesse a pasta do projeto no terminal/cmd:
- cd buscaCep

#### -  Instale as dependências, com o comando de sua preferência:
- npm install 
- yarn install

### Executando o projeto:
- expo start

Após isso aguarde abrir uma aba no navegador, com informações do Metro Bundler e com um qrcode no canto inferior esquerdo.

### Visualizando o aplicativo executando: 
Executar o aplicativo pelo expo em seu celular:
- Quando o qrcode aparecer na aba que abriu em seu navegador, abra o aplicativo Expo Go em seu celular e escaneie o qrcode.
- Aguarde a porcentagem chegar a 100% e o aplicativo abrirá em seu celular igual mostrado na demostração acima.

Executar o aplicativo pelo emulador em seu notbook caso possua o emulador instalado, se não possuir [neste link da Rocketseat](https://react-native.rocketseat.dev/) você pode configurar seu abiente e emulador):  
- Depois que abrir a aba em seu navegador, subir a aplicação e o Metro Bundler ser exibido, use a opção para Android no windows "Run on Android device/emulator" e "Run on iOS simulator" para IOS no MAC.

## Como ultilizar o aplicativo
- Digite um CEP a ser pesquisado;
- Clique em "Buscar";
- Caso esteja disponível na API ultilizada, as informações exibidas após a busca serão: Cep, Logradouro, Bairro, Cidade e Estado;
- Use o botão "Limpar" para limpar um cep digitado e o resultado da busca.

### 🛠 Tecnologias

As seguintes ferramentas foram ultilizada na construção do projeto:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [Máscara para o campo CEP](https://www.npmjs.com/package/react-native-masked-text)
- [API Json do ViaCEP](https://viacep.com.br/)