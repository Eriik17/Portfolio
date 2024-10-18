const movies = [
    { title: "Inception", image: "imagenes/inception.jpg" },
    { title: "Avatar", image: "imagenes/avatar.jpg" },
    { title: "Titanic", image: "imagenes/titanic.jpg" },
    { title: "Venom", image: "imagenes/venom.jpg" },
    { title: "Free Guy", image: "imagenes/freeguy.jpg" },
    { title: "Spiderman 2", image: "imagenes/spiderman.jpg" },
    { title: "Dune", image: "imagenes/dune.jpg" },
    { title: "Gladiator", image: "imagenes/gladiator.jpg" },
    { title: "Shrek", image: "imagenes/shrek.jpg" },
    { title: "Los juegos del hambre", image: "imagenes/hambre.jpg" },
    { title: "Matrix", image: "imagenes/matrix.jpg" },
];

let currentMovie = {};

function getRandomMovie() {
    if (movies.length === 0) {
        document.getElementById("result").textContent = "¡Has adivinado todas las películas!";
        document.getElementById("movie-image").style.display = "none"; // Ocultar la imagen
        return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    currentMovie = movies[randomIndex];
    document.getElementById("movie-image").src = currentMovie.image;
    document.getElementById("result").textContent = "";
    document.getElementById("guess-input").value = "";
}

document.getElementById("submit-guess").addEventListener("click", () => {
    const userGuess = document.getElementById("guess-input").value.trim();
    if (userGuess.toLowerCase() === currentMovie.title.toLowerCase()) {
        document.getElementById("result").textContent = "¡Correcto!";
        movies.splice(movies.indexOf(currentMovie), 1);
    } else {
        document.getElementById("result").textContent = "Incorrecto. La película era " + currentMovie.title + ".";
    }
});

document.getElementById("next-movie").addEventListener("click", getRandomMovie);

document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector(".container").classList.toggle("dark");
    const button = document.getElementById("toggle-theme");
    button.textContent = button.textContent === "Modo Oscuro" ? "Modo Claro" : "Modo Oscuro";
});

// Cargar la primera película al iniciar
getRandomMovie();

// Evento para detectar Enter en el campo de entrada
document.getElementById("guess-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que se envíe el formulario si hay uno
        document.getElementById("submit-guess").click(); // Simula un clic en el botón de adivinar
    }
});
