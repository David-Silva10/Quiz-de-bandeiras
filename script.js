 const comecar = document.querySelector(".comecar")
 const proximapergunta = document.querySelector(".proxima")
 const imgGlobo = document.getElementById("globo")
 const perguntasRespostas = document.querySelector(".questoes")
 const respostas = document.querySelector(".answers-buttons")
 const pergunta = document.getElementById("pergunta")
 const h1 = document.querySelector("h1")
 const imgBandeira = document.getElementById("bandeira")
 const refazer = document.createElement("button")
 const pontuacao = document.createElement("h2")
 const container = document.querySelector(".container")
 let currentquestionindex = 0
 let pontos = 0

comecar.addEventListener("click", startgame)
proximapergunta.addEventListener("click", displayNextQuestion)
refazer.addEventListener("click", reiniciar)

function startgame() {
    comecar.classList.add("hide")
    imgGlobo.classList.add("hide")
    perguntasRespostas.classList.remove("hide")
    displayNextQuestion()
}
function displayNextQuestion() {
    while (respostas.firstChild) {
        respostas.removeChild(respostas.firstChild)
    }
    imgBandeira.removeAttribute("class")
    imgBandeira.src = questions[currentquestionindex].img
    document.body.removeAttribute("class")

    questions[currentquestionindex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("botao")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        respostas.appendChild(newAnswer)
        newAnswer.addEventListener("click", selecionada)
    })
}
function selecionada(event) {
    const respostaClicada = event.target

    if (respostaClicada.dataset.correct) {
        document.body.classList.add("correct")
        cormudada()
        pontos++

    } else {
        document.body.classList.add("incorrect")
        deuruim()
    }
    document.querySelectorAll(".botao").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
             button.classList.add("incorrect")
        }
        button.disabled = true
    })
    proximapergunta.classList.remove("hide")
    currentquestionindex++
    if (currentquestionindex === 30) {
        document.body.removeAttribute("class")
        pontuacao.classList.remove("hide")
        refazer.classList.remove("hide")
        imgBandeira.classList.add("hide")
        perguntasRespostas.classList.add("hide")
        proximapergunta.classList.add("hide")
        pontuacao.textContent = `Total de acertos: ${pontos}/30`
        refazer.textContent = "Refazer Quiz"
        pontuacao.classList.add("pontuacao")
        refazer.classList.add("botaoRefazer")
        container.appendChild(pontuacao)
        container.appendChild(refazer)
    }
}
function reiniciar() {
    currentquestionindex = 0
    pontos=0
    comecar.classList.remove("incorrect")
    refazer.classList.remove("botaoRefazer")
    if (pontuacao.parentNode) container.removeChild(pontuacao)
    if (refazer.parentNode) container.removeChild(refazer)
    refazer.classList.add("hide")
    pontuacao.classList.add("hide")
    imgGlobo.classList.remove("hide")
    comecar.classList.remove("hide")
    comecar.disabled = false
}
function cormudada() {
    h1.style.backgroundColor = "black"
    h1.style.border = "5px solid white"
    h1.style.borderRadius = "10px"
    h1.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.9"
}
function deuruim() {
    h1.style.backgroundColor = "black"
    h1.style.border = "5px solid white"
    h1.style.borderRadius = "10px"
    h1.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.9"
}








const questions = [
    {
       img: "assents/Flag_of_South_Africa.svg",
        answers: [
        {text: "Brasil", correct: false},
        {text: "China", correct: false},
        {text: "Africa do Sul", correct: true},
        {text: "Tanzânia", correct: false}
        ]
    },
    {
        img: "assents/Bhutan.jpg",
        answers: [
        {text: "Japão", correct: false},
        {text: "China", correct: false},
        {text: "Azerbaijão", correct: false},
        {text: "Butão", correct: true}
        ]
    },
    {   img: "assents/Japan flag.jpg",
        answers: [
        {text: "Bangladesh", correct: false},
        {text: "Japão", correct: true},
        {text: "Coréia do Sul", correct: false},
        {text: "Palau", correct: false}
        ]
    },
    {   img: "assents/Morocco.jpg",
        answers: [
        {text: "Filipinas", correct: false},
        {text: "Mauricio", correct: false},
        {text: "Vietnã", correct: false},
        {text: "Marrocos", correct: true}
        ]
    },
    {   img: "assents/Nepal.jpg",
        answers: [
        {text: "Nepal", correct: true},
        {text: "Fiji", correct: false},
        {text: "Vietnã", correct: false},
        {text: "Ilhas Marshall", correct: false}
        ]
    },
    {   img: "assents/New Zealand.jpg",
        answers: [
        {text: "Austrália", correct: false},
        {text: "Reino Unido", correct: false},
        {text: "Taiwan", correct: false},
        {text: "Nova Zelândia", correct: true}
        ]
    },
    {   img: "assents/Saint Lucia.jpg",
        answers: [
        {text: "Filipinas", correct: false},
        {text: "Maurício", correct: false},
        {text: "Cazaquistão", correct: false},
        {text: "Santa Lucia", correct: true}
        ]
    },
    {   img: "assents/Escocia - Wikipedia, a enciclopedia libre.jpg",
        answers: [
        {text: "Grécia", correct: false},
        {text: "Honduras", correct: false},
        {text: "Escócia", correct: true},
        {text: "Guatemala", correct: false}
        ]
    },
    {   img: "assents/Sri Lanka.jpg",
        answers: [
        {text: "Butão", correct: false},
        {text: "Sri Lanka", correct: true},
        {text: "Suazilândia", correct: false},
        {text: "Granada", correct: false}
        ]
    },
    {   img: "assents/ÍNDIA 🇮🇳.jpg",
        answers: [
        {text: "Níger", correct: false},
        {text: "Palau", correct: false},
        {text: "Índia", correct: true},
        {text: "Iêmen", correct: false}
        ]
    },
    {   img: "assents/República do Chipre 1960-2006.jpg",
        answers: [
        {text: "Hungria", correct: false},
        {text: "Irã", correct: false},
        {text: "Geórgia", correct: false},
        {text: "Chipre", correct: true}
        ]
    },
    {   img: "assents/Essuatíni.jpg",
        answers: [
        {text: "Essuatíni", correct: true},
        {text: "Mauricio", correct: false},
        {text: "Lesoto", correct: false},
        {text: "Letônia", correct: false}
        ]
    },
    {   img: "assents/Bandeira da Finlândia - Portal São Francisco.jpg",
        answers: [
        {text: "Macedônia do Norte", correct: false},
        {text: "Iraque", correct: false},
        {text: "Suécia", correct: false},
        {text: "Finlândia", correct: true}
        ]
    },
    {   img: "assents/Libya.jpg",
        answers: [
        {text: "Madagascar", correct: false},
        {text: "Malásia", correct: false},
        {text: "Lituânia", correct: false},
        {text: "Líbia", correct: true}
        ]
    },
    {   img: "assents/Ghana.jpg",
        answers: [
        {text: "Gana", correct: true},
        {text: "Guiana", correct: false},
        {text: "Gâmbia", correct: false},
        {text: "Guiné", correct: false}
        ]
    },
    {   img: "assents/Flag of Nigeria.jpg",
        answers: [
        {text: "Hungria", correct: false},
        {text: "Irlanda", correct: false},
        {text: "Vietnã", correct: false},
        {text: "Nigéria", correct: true}
        ]
    },
    {   img: "/assents/Tanzania.jpg",
        answers: [
        {text: "Jamaica", correct: false},
        {text: "Maldivas", correct: false},
        {text: "Tanzania", correct: true},
        {text: "Malauí", correct: false}
        ]
    },
    {   img: "assents/Uruguai_ cinco fatos para conhecer o país.jpg",
        answers: [
        {text: "Uruguai", correct: true},
        {text: "Paraguai", correct: false},
        {text: "Nauru", correct: false},
        {text: "Namíbia", correct: false}
        ]
    },
    {   img: "assents/Zimbabwe.jpg",
        answers: [
        {text: "Mauritânia", correct: false},
        {text: "Quênia", correct: false},
        {text: "Zâmbia", correct: false},
        {text: "Zimbábue", correct: true}
        ]
    },
    {   img: "assents/BELIZE.jpg",
        answers: [
        {text: "Tuvalu", correct: false},
        {text: "Belize", correct: true},
        {text: "Togo", correct: false},
        {text: "Tonga", correct: false}
        ]
    },
    {   img: "assents/Bandeira do Paquistão • Bandeiras do Mundo.jpg",
        answers: [
        {text: "Tunísia", correct: false},
        {text: "Turcomenistão", correct: false},
        {text: "Vanuatu", correct: false},
        {text: "Paquistão", correct: true}
        ]
    },
    {   img: "assents/baixados (13).jpg",
        answers: [
        {text: "Grécia", correct: true},
        {text: "Geórgia", correct: false},
        {text: "Escócia", correct: false},
        {text: "Grã-Bretãnha", correct: false}
        ]
    },
    {   img: "assents/baixados (12).jpg",
        answers: [
        {text: "Iraque", correct: false},
        {text: "Irã", correct: false},
        {text: "Arábia Saudita", correct: true},
        {text: "Emirados Árabes Unidos", correct: false}
        ]
    },
    {   img: "assents/baixados (11).jpg",
        answers: [
        {text: "Brunei", correct: false},
        {text: "Argélia", correct: false},
        {text: "Benim", correct: false},
        {text: "Barbados", correct: true}
        ]
    },
    {   img: "assents/baixados (10).jpg",
        answers: [
        {text: "Filipinas", correct: false},
        {text: "Fiji", correct: true},
        {text: "Ilhas Marshall", correct: false},
        {text: "Ilhas Salomão", correct: false}
        ]
    },
    {   img: "assents/baixados (9).jpg",
        answers: [
        {text: "Iraque", correct: true},
        {text: "Irã", correct: false},
        {text: "Egito", correct: false},
        {text: "Emirados Árabes Unidos", correct: false}
        ]
    },
    {   img: "assents/baixados (8).jpg",
        answers: [
        {text: "Kuwait", correct: false},
        {text: "Lesoto", correct: false},
        {text: "Mauritânia", correct: false},
        {text: "Moçambique", correct: true}
        ]
    },
    {   img: "assents/Bahamas.jpg",
        answers: [
        {text: "Maldivas", correct: false},
        {text: "Malta", correct: false},
        {text: "Bahamas", correct: true},
        {text: "Barein", correct: false}
        ]
    },
    {   img: "assents/Albania.jpg",
        answers: [
        {text: "Comores", correct: false},
        {text: "Camboja", correct: false},
        {text: "Eritréia", correct: false},
        {text: "Albânia", correct: true}
        ]
    },
    {   img: "assents/Flag_of_Kiribati.svg.png",
        answers: [
        {text: "Jordãnia", correct: false},
        {text: "Kuwait", correct: false},
        {text: "Vietnã", correct: false},
        {text: "Kiribati", correct: true}
        ]
    }, 
]