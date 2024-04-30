const apiUrl = 'https://deckofcardsapi.com/api/deck';

async function crearNuevoMazo() {
    const response = await fetch(`${apiUrl}/new/shuffle/?deck_count=1`);
    const data = await response.json();
    return data.deck_id;
}

async function obtenerCartas(deckId, cantidad) {
    const response = await fetch(`${apiUrl}/${deckId}/draw/?count=${cantidad}`);
    const data = await response.json();
    return data.cards;
}

function calcularValorMano(mano) {
    let valor = 0;
    let ases = 0;
    for (let carta of mano) {
        if (carta.value === 'ACE') {
            ases++;
            valor += 11;
        } else if (['KING', 'QUEEN', 'JACK'].includes(carta.value)) {
            valor += 10;
        } else {
            valor += parseInt(carta.value);
        }
    }
    while (valor > 21 && ases > 0) {
        valor -= 10;
        ases--;
    }
    return valor;
}

async function jugarBlackjack() {
    const deckId = await crearNuevoMazo();
    let jugadorMano = await obtenerCartas(deckId, 2);
    let crupierMano = await obtenerCartas(deckId, 2);

    // Mostrar las cartas del jugador
    mostrarCartas(jugadorMano, 'jugador');
    const jugadorPuntaje = calcularValorMano(jugadorMano);
    document.getElementById('jugador-puntaje').innerText = `Puntaje: ${jugadorPuntaje}`;

    // Mostrar una carta del crupier
    mostrarCartas([crupierMano[0]], 'crupier');
    const crupierPuntaje = calcularValorMano([crupierMano[0]]);
    document.getElementById('crupier-puntaje').innerText = `Puntaje: ${crupierPuntaje}`;

    // Lógica para el jugador
    document.getElementById('pedir-cartas').addEventListener('click', async () => {
        const nuevaCarta = await obtenerCartas(deckId, 1);
        jugadorMano.push(nuevaCarta[0]);
        mostrarCartas([nuevaCarta[0]], 'jugador');
        const nuevoPuntaje = calcularValorMano(jugadorMano);
        document.getElementById('jugador-puntaje').innerText = `Puntaje: ${nuevoPuntaje}`;
        if (nuevoPuntaje > 21) {
            document.getElementById('resultado').innerText = '¡Te pasaste de 21! ¡El crupier gana!';
        }
    });

    document.getElementById('quedarse').addEventListener('click', async () => {
        // Lógica para el crupier
        while (calcularValorMano(crupierMano) < 17) {
            const nuevaCarta = await obtenerCartas(deckId, 1);
            crupierMano.push(nuevaCarta[0]);
            mostrarCartas([nuevaCarta[0]], 'crupier');
        }

        // Determinar el ganador
        const jugadorPuntajeFinal = calcularValorMano(jugadorMano);
        const crupierPuntajeFinal = calcularValorMano(crupierMano);

        if (jugadorPuntajeFinal > 21) {
            document.getElementById('resultado').innerText = '¡Te pasaste de 21! ¡El crupier gana!';
        } else if (crupierPuntajeFinal > 21 || jugadorPuntajeFinal > crupierPuntajeFinal) {
            document.getElementById('resultado').innerText = '¡Felicidades! ¡Ganaste!';
        } else if (jugadorPuntajeFinal === crupierPuntajeFinal) {
            document.getElementById('resultado').innerText = 'Empate.';
        } else {
            document.getElementById('resultado').innerText = 'El crupier gana.';
        }
    });
}

function mostrarCartas(cartas, jugador) {
    const divMano = document.getElementById(`${jugador}-mano`);
    for (let carta of cartas) {
        const img = document.createElement('img');
        img.src = carta.image;
        img.alt = `${carta.value} de ${carta.suit}`;
        divMano.appendChild(img);
    }
}

jugarBlackjack();
