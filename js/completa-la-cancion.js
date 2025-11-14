document.addEventListener('DOMContentLoaded', () => {
    const lyricsContainer = document.getElementById('lyrics');
    const checkAnswersBtn = document.getElementById('check-answers-btn');
    const resultMessage = document.getElementById('result-message');

    const originalLyrics = `
        Sí, sabes que ya llevo un rato mirándote
        Tengo que bailar contigo hoy (DY)
        Vi que tu mirada ya estaba llamándome
        Muéstrame el camino que yo voy (Oh)
        Tú, tú eres el imán y yo soy el metal
        Me voy acercando y voy armando el plan
        Solo con pensarlo se acelera el pulso (Oh, yeah)
        Ya, ya me está gustando más de lo normal
        Todos mis sentidos van pidiendo más
        Esto hay que tomarlo sin ningún apuro
        Despacito
        Quiero respirar tu cuello despacito
        Deja que te diga cosas al oído
        Para que te acuerdes si no estás conmigo
        Despacito
        Quiero desnudarte a besos despacito
        Firmo en las paredes de tu laberinto
        Y hacer de tu cuerpo todo un manuscrito
    `;

    const wordsToBlank = ['bailar', 'mirada', 'imán', 'metal', 'plan', 'pulso', 'sentidos', 'apuro', 'cuello', 'oído', 'besos', 'cuerpo'];

    function createBlanks(lyrics, words) {
        let finalLyrics = lyrics;
        words.forEach((word, index) => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            const blank = `<input type="text" id="blank-${index}" data-word="${word.toLowerCase()}" class="lyrics-blank">`;
            finalLyrics = finalLyrics.replace(regex, blank);
        });
        return finalLyrics;
    }

    lyricsContainer.innerHTML = createBlanks(originalLyrics, wordsToBlank);

    checkAnswersBtn.addEventListener('click', () => {
        let allCorrect = true;
        wordsToBlank.forEach((word, index) => {
            const input = document.getElementById(`blank-${index}`);
            if (input.value.trim().toLowerCase() !== word.toLowerCase()) {
                allCorrect = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = '1px solid green';
            }
        });

        if (allCorrect) {
            resultMessage.textContent = '¡Felicidades! Has completado la canción correctamente.';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Algunas respuestas son incorrectas. Inténtalo de nuevo.';
            resultMessage.style.color = 'red';
        }
    });
});
