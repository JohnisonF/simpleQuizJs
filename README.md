# Simple quiz using Js

Desenvolvi um simples quiz apenas utilizando um pouco de Js recebendo dados de algum json.


## Obs

Tirei as imagens de teste para não ocorrer problemas.


#
Abaixo tem uma imagem deste projeto:
<img src="screenshot.jpeg" width="550" height="450"/>


## Stack utilizada

**Javascript**


## Json

No json do arquivo **quiz.json**, estou utilizando o seguinte padrão para o funcionamento do quiz:

```
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
```
...
{
    "question": "Quem é o melhor amigo de Gon?",
    "img":"",
    "answers": [
      {
          "txtButtons": "Hisoka",
          "value": 0
      }
}
...
```
##
E um exemplo de objeto colocado dentro de **"results"** seria:
```
...
{
    "result": "You're a pro!",
    "img": "",
    "text": "You accepted all the answers",
    "range": {
        "min": 0,
        "max": 0
    }
}
...
```

## Conclusão

Pensei primeiramente em como seria os dados e coloquei no **Json**. Após isso capturei os dados em Javascript e criei o script por lá. Para mim, o resultado saiu melhor do que o esperado. Este projeto pode ser melhorado e muito como o **css** e algumas funções, mas o começo está aqui.
## Tempo de Projeto

Consegui finalizar o projeto por volta de umas duas horas.