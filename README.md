# Simple quiz using Js

Desenvolvi um simples quiz apenas utilizando um pouco de Js recebendo dados de algum json. Para chegar a um resultado é feito a soma dos valores nos objetos em **"questions"** e você receberá o resultado se o range entre o **"min"** e **"max"** estabelecidos em **"results"** for atingido.


## Obs

Tirei as imagens de teste para não ocorrer problemas.


#
Abaixo tem uma imagem deste projeto:

<img src="screenshot.jpeg" width="550" height="450"/>


## Stack utilizada

**Javascript**


## Json

No json do arquivo **quiz.json**, estou utilizando o seguinte padrão para o funcionamento do quiz:

```json
{
  "quizTitle": "O quanto você conhece de Hunter x Hunter?",
  "questions": [
    {...}
  ],
  "results": [
    {...}
  ]
}
```
##
Aqui tem objeto de exemplo para colocar em uma pergunta dentro do array  **"questions"**:
```json
{
    "question": "Quem é o melhor amigo de Gon?",
    "img":"",
    "answers": [
      {
          "txtButtons": "Hisoka",
          "valor": 0
      }
}
```
(Aqui é onde você coloca os botões para as questões, podendo alterar o valor contido caso a questão esteja correta ou não).
##
E um exemplo de objeto colocado dentro de **"results"** seria: 
```json
{
    "result": "You're a pro!",
    "img": "",
    "text": "You accepted all the answers",
    "range": {
        "min": 0,
        "max": 0
    }
}
```
(apartir do range entre min e max com base nos pontos escolhidos da questão, irá aparecer o resultado na tela).
## Conclusão

Pensei primeiramente em como seria os dados e coloquei no **Json**. Após isso capturei os dados em Javascript e criei o script por lá. Para mim, o resultado saiu melhor do que o esperado. Este projeto pode ser melhorado e muito como o **css** e algumas funções, mas o começo está aqui.
## Tempo de Projeto

Consegui finalizar o projeto por volta de umas duas horas.
