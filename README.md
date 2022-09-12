<div align="center" style="margin-bottom: 20px;">
<img alt="demonstração da pagina" src="./public/images/fastfood-logo.png" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">
    <p align="center" >
      <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
      <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
      <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
      <a href="#open_book-código"> :open_book: Código </a> |
      <a href="#grinning-conclusão"> :grinning: Conclusão </a> |
      <a href="#phone-contatos"> :phone: Contatos </a>
    </p>
</div>

## :barber: O projeto

Bem-vindo ao Orloke FastFood excelente para qualquer tipo de restaurante.


Na nossa tela inicial você pode encontrar as opções mais populares, onde também é possível pesquisar por nome do produto ou categoria. E com apenas um clique você seleciona o seu produto, quais adicionais vai querer e se deseja deixar alguma observação. Feito isso é só revisar seu pedido e clicar em “Finalizar Pedido”.
Você será redirecionado para a tela de pagamento. Nessa parte, a desejo do estabelecimento, será exibido os tipos de pagamentos que são aceitos: Paypal, cartão de credito, dinheiro... por enquanto deixamos apenas a opção de digitar o nome do cliente.


Confirmado o pagamento vamos para a “Cozinha” (somente pessoal) onde é possível ver os produtos que estão em preparo e aqueles que já estão prontos. E com apenas um click você pode mudar o status deles de preparo para pronto, e automaticamente já são encaminhados para o delivery. Tudo isso de uma maneira rápida e intuitiva que que vai de dar mais tranquilidade e prazer em administrar o seu negócio! 

## :fire: Prévia da Aplicação

https://orlokefood.vercel.app

Não esqueça de ativar o áudio do vídeo!

https://user-images.githubusercontent.com/96503495/188948217-85e34da0-006e-4969-ba84-d497cb6d973e.mp4

## :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [NextJs](https://nextjs.org)
- [Styled-Components](https://styled-components.com/)
- [React-Redux](https://react-redux.js.org)
- [React-Bootstrap](https://react-bootstrap.github.io)

## :zap: Executando o Projeto
#### Clonando o projeto

```sh
$ git clone git@github.com:orloke/devio-test.git
$ cd devio-test
```

#### Iniciando o projeto

```sh
$ npm install
$ npm run dev
```

## :open_book: Código

Escolhi o Next para esse desafio porque por se tratar de um e-commerce é importante ter uma boa indexação pelos motores de busca, além de já possuir uma parte de back-end já estruturada de modo que não é necessário criar uma API, coloca-la em um servidor para depois consumi-la. 

```sh
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    products: [
      {
        id: 1,
        category: 'hamburger',
        title: 'Smash da casa',
        price: 30.5,
        description: 'Esse é muito bom',
        image: '/images/hamburguer.png',
      },
      {
        id: 2,
        category: 'hamburger',
        title: 'Pão alemão',
        price: 31.5,
        description: 'Esse é 7 a 1 de sabor',
        image: '/images/hamburguer.png',
      }, ...
      
      //codigo encontrado dentro de src/api
```
Na parte de Front-End dê preferencia a usar Redux em vez de ContextApi. Ambos resolveriam os problemas que surgiram, mas através de pesquisas e opiniões de outros Devs considero o Redux mais poderoso. 

## :grinning: Conclusão

#### Dificuldades

* Esse foi o primeiro e-commerce que desenvolvi e por isso considerei um projeto desafiador, mas muito gratificante.

* A primeira dificuldade foi sem duvida o Eslint, nunca tinha usado com os padrões de configuração exigidos, mas felizmente consegui configura-lo!

* Tive de quebrar a cabeça para poder separar os pedidos entre clientes.

Todo o projeto é resultado de escolhas pessoais, que sempre busquei basear em pesquisas e nos estudos que fiz. 

Algumas partes do projeto, como a pagina de pagamento, ainda podem e serão melhoradas com o tempo, mas fico feliz de ter cumpridos as exigências para a entrega!

Agradeço a [Devio](https://devio.com.br/) pela oportunidade! :D


## :phone: Contatos

Email: [juniordering@hotmail.com](juniordering@hotmail.com)

WhatsApp: [(65) 98175-1036](https://wa.me/5565981751036)


