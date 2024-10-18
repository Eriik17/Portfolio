const questions = [
    { question: "¿Cuál es la capital de Francia?", options: ["Berlín", "Madrid", "París", "Lisboa"], answer: 2 },
    { question: "¿Cuál es el océano más grande del mundo?", options: ["Atlántico", "Índico", "Ártico", "Pacífico"], answer: 3 },
    { question: "¿Quién escribió 'Cien años de soledad'?", options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Pablo Neruda"], answer: 0 },
    { question: "¿Cuál es el elemento químico con símbolo O?", options: ["Oro", "Oxígeno", "Osmio", "Oganesón"], answer: 1 },
    { question: "¿Cuál es el país más grande del mundo?", options: ["Canadá", "Rusia", "China", "Estados Unidos"], answer: 1 },
    { question: "¿Cuál es la montaña más alta del mundo?", options: ["K2", "Kangchenjunga", "Everest", "Makalu"], answer: 2 },
    { question: "¿Quién pintó la Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: 2 },
    { question: "¿Qué año llegó el hombre a la Luna?", options: ["1965", "1969", "1972", "1975"], answer: 1 },
    { question: "¿Cuál es el continente más poblado?", options: ["África", "Asia", "Europa", "América"], answer: 1 },
    { question: "¿Quién es el autor de 'Don Quijote de la Mancha'?", options: ["Lope de Vega", "Miguel de Cervantes", "Tirso de Molina", "Gabriel García Márquez"], answer: 1 },
    { question: "¿Cuál es el idioma más hablado del mundo?", options: ["Inglés", "Chino Mandarín", "Español", "Árabe"], answer: 1 },
    { question: "¿Cuál es el planeta más cercano al sol?", options: ["Venus", "Marte", "Mercurio", "Tierra"], answer: 2 },
    { question: "¿Cuál es el río más largo del mundo?", options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], answer: 1 },
    { question: "¿Qué es la fotosíntesis?", options: ["Producción de energía", "Respiración de plantas", "Transformación de luz en energía", "Crecimiento de plantas"], answer: 2 },
    { question: "¿Qué océano se encuentra al este de África?", options: ["Atlántico", "Índico", "Ártico", "Pacífico"], answer: 1 },
    { question: "¿Quién es el rey de la selva?", options: ["Elefante", "Tigre", "León", "Gorila"], answer: 2 },
    { question: "¿Cuál es la moneda de Japón?", options: ["Yuan", "Won", "Yen", "Baht"], answer: 2 },
    { question: "¿Qué gas es esencial para la respiración humana?", options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Helio"], answer: 1 },
    { question: "¿Cuál es el símbolo químico del oro?", options: ["Au", "Ag", "Fe", "Pb"], answer: 0 },
    { question: "¿Quién descubrió la penicilina?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"], answer: 1 },
    { question: "¿Cuál es la capital de Italia?", options: ["Roma", "Milán", "Venecia", "Florencia"], answer: 0 },
    { question: "¿Cuál es el continente donde se encuentra Egipto?", options: ["Asia", "Europa", "África", "América"], answer: 2 },
    { question: "¿Cuántos colores hay en un arcoíris?", options: ["5", "7", "9", "6"], answer: 1 },
    // Agrega más preguntas hasta llegar a 200
    { question: "¿Qué tipo de animal es un delfín?", options: ["Pez", "Mamífero", "Reptil", "Anfibio"], answer: 1 },
    { question: "¿Cuál es la capital de España?", options: ["Barcelona", "Madrid", "Sevilla", "Valencia"], answer: 1 },
    { question: "¿Cuál es el idioma oficial de Brasil?", options: ["Español", "Portugués", "Francés", "Inglés"], answer: 1 },
    { question: "¿Quién fue el primer presidente de los Estados Unidos?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: 1 },
    { question: "¿Cuál es el océano que se encuentra al oeste de América del Norte?", options: ["Atlántico", "Índico", "Ártico", "Pacífico"], answer: 3 },
    { question: "¿Quién escribió 'Romeo y Julieta'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"], answer: 1 },
    { question: "¿Cuál es el planeta conocido como el planeta rojo?", options: ["Venus", "Júpiter", "Marte", "Saturno"], answer: 2 },
    { question: "¿Qué país es famoso por la Torre Eiffel?", options: ["España", "Italia", "Francia", "Alemania"], answer: 2 },
    { question: "¿Quién es el dios del trueno en la mitología nórdica?", options: ["Thor", "Odin", "Loki", "Hades"], answer: 0 },
    { question: "¿Cuál es el metal más ligero?", options: ["Hierro", "Aluminio", "Litio", "Oro"], answer: 2 },
    { question: "¿Qué continente tiene más países?", options: ["Asia", "África", "Europa", "América"], answer: 1 },
    { question: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1 },
    { question: "¿Qué instrumento mide la temperatura?", options: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"], answer: 1 },
    { question: "¿Qué animal es conocido por tener una gran memoria?", options: ["Elefante", "Perro", "Gato", "Delfín"], answer: 0 },
    { question: "¿Cuál es el río más largo de América del Sur?", options: ["Nilo", "Amazonas", "Paraná", "Orinoco"], answer: 1 },
    { question: "¿Quién fue la primera mujer en ganar un Premio Nobel?", options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Elizabeth Blackwell"], answer: 0 },
    // Continúa agregando preguntas hasta alcanzar las 200
];

// Barajar preguntas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function loadQuestions() {
    shuffle(questions); // Barajar preguntas al iniciar
    currentQuestions = questions.slice(0, 5); // Tomar las primeras 5 preguntas
    currentQuestionIndex = 0;
    score = 0;
}

function loadQuestion() {
    const questionContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    if (currentQuestionIndex < currentQuestions.length) {
        questionElement.textContent = currentQuestions[currentQuestionIndex].question;
        optionsElement.innerHTML = "";

        currentQuestions[currentQuestionIndex].options.forEach((option, index) => {
            const button = document.createElement("div");
            button.textContent = option;
            button.classList.add("option");
            button.addEventListener("click", () => selectOption(index));
            optionsElement.appendChild(button);
        });
    } else {
        showResults();
    }
}

function selectOption(selectedIndex) {
    const options = document.querySelectorAll(".option");
    const correctIndex = currentQuestions[currentQuestionIndex].answer;

    options[selectedIndex].classList.add(selectedIndex === correctIndex ? "correct" : "incorrect");

    options.forEach((option, index) => {
        option.classList.add(index === correctIndex ? "correct" : "incorrect");
        option.removeEventListener("click", () => selectOption(index));
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;
    document.getElementById("next-button").classList.remove("hidden");
}

document.getElementById("next-button").addEventListener("click", () => {
    loadQuestion();
    document.getElementById("next-button").classList.add("hidden");
});

function showResults() {
    document.getElementById("quiz-container").classList.add("hidden");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");
    
    scoreElement.textContent = `Tu puntuación es: ${score} de ${currentQuestions.length}`;
    resultContainer.classList.remove("hidden");
}

document.getElementById("restart-button").addEventListener("click", () => {
    loadQuestions(); // Cargar nuevas preguntas al reiniciar
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
});

document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector(".container").classList.toggle("dark");
    const button = document.getElementById("toggle-theme");
    button.textContent = button.textContent === "Modo Oscuro" ? "Modo Claro" : "Modo Oscuro";
});

// Cargar las preguntas al iniciar
loadQuestions();
loadQuestion();