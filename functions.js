
window.onload = async function() {
    let quiz = await fetch('quiz.json').then((response) => response.json());
    let points = 0;
    let label           = document.getElementById("label-quiz");
    let contentResult   = document.getElementById("respostas");
    let title           = document.getElementById("titulo-pergunta");
    let background      = document.getElementById("bg-pergunta");
    let numQuestion     = document.getElementById("num-pergunta");

    let questions  = quiz.questions;
    let answers    = quiz.results;

    label.innerHTML = quiz.quizTitle;
    generateQuestions(questions,answers,0);

    function getResult(answers) {
        let result = answers.find(r => points >= r.range.min && points <= r.range.max);

        title.innerHTML                  = result.result;
        contentResult.innerHTML          = result.text;
        background.style.backgroundImage = `url('${result.img}')`;
        numQuestion.style.display        = 'none';
    }
    
    function generateQuestions(questions, result, index) {
        
        if((index + 1) > questions.length) {
            getResult(result);
        }
        else {
            title.innerHTML                  = questions[index].question;
            numQuestion.innerHTML            = index + 1;
            background.style.backgroundImage = `url('${questions[index].img}')`;
    
            questions[index].answers.forEach(e => {
                let buttons = document.createElement("div");
                buttons.classList.add("resposta");
                buttons.innerHTML = e.txtButtons;
        
                contentResult.append(buttons);
        
                buttons.addEventListener("click", function() {
                    points += e.valor;
                    contentResult.innerHTML = '';
                    generateQuestions(questions, result, index + 1);
                })
        
            });
        }
    }

}

