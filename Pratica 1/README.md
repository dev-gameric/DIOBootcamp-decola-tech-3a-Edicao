# Introdução a criação de websites com HTML5 e CSS3

Iremos por em práticas as primeiras linhas de códigos para absorver todo conteúdo e conhecimento adiquiridos.

## HTML

>Comecei pelo html que é a estrutura do nosso primeiro website, por ele que devemos sempre começar. Dica! Digite uma "!" >e aperte "enter" para criar a estrutura básica. (testado no VsCode) você receberá o seguinte código para começar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
    </body>
    </html>

>Então iniciei importando a foto de perfil e capa, esta semântica é uma das que a gente não "fecha", como por exemplo: >quando abrimos um header, fechamos com header. na img abrimos com img e fechamos apenas com o sinal de maior, veja um >exemplo de código abaixo:

    <img class="capa" src="diretório" alt="legenda da foto">

>Coloquei um título a minha página contendo o meu nome e um subtítulo contendo o meu nick.
>Logo após adicionei dois parágrafos. um relacionado a algumas habilidades minhas e o outro contendo algumas informações >sobre mim.

    <header>
        <p>parágrafo 1</p>
        <p>parágrafo 2</p>
    <header>

>E por fim, adicionei um footer, que é o nosso roda pé do nosso website, nele adicionei ícones das minhas redes sociais >como, linkedin, youtube e instagram, ao clicar nos links você será redirecionado em uma outra aba, para a rede social >clicada.

## CSS

>Para começo de tudo, iremos importar nosso arquivo css utilizando o seguinte código abaixo, após criar o arquivo css é >claro.

    <link rel="stylesheet" href="Stlyle.css">

>iniciamos então alterando o nosso background para que podemos visualizar melhor o container. no arquivo CSS, possuimos >seletores e declarações, em código fica assim.

    seletores {
        declarações
    }

>alterando o background:

    body {
        background: #0d101
    }

>Para que possamos alterar o estilo do nosso html, primeiro iremos criar id ou classe para aquilo que iremos querer que o >css crie regras de estilos. ID: é representado pelo símbolo # (hash) seguido de um nome para esse ID. Classe: a classe é >representada de forma parecida do ID, mas é precedida por um ponto em vez do hash. E a diferença mais importante entre >eles é a forma como devem ser usados: o ID só pode ser usado uma vez em uma página HTML enquanto a classe não tem >restrições.

    .nome_classe {

    }

    #nome_id {

    }
>Então, comecei a estilizar o nosso site em css como algumas declarações do tipo, border-radius (para dar borda ao nosso >objeto), font-size(para alterar o tamanho da fonte), text-align (para centralizar nosso texto, ele também pode colocar a >direita ou a esquerda) e margin(para alterar a margin).

### O que é um box-model?

>Quando estamos criando o layout de um site o navegador representa cada elemento HTML  como uma caixa retangular, isso é >o box-model. E com CSS nós alteramos a aparência dessa caixa (largura, altura, cor de fundo, etc.). Essa caixa é >composta por 4 áreas: o conteúdo, o padding, a borda e a margem.

![box-model](/Pratica%201/imagens/box-model.png "box-model")

### WebSite

"[website](/Pratica%201/imagens/imagem-site.png "Imagem do website")