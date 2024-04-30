const apiUrl = 'https://deckofcardsapi.com/api/deck';

async function CrearMazo() {
    const response = await fetch(`${apiUrl}/new/shuffle/?deck_count=1`);
    const data = await response.json();
    return data.deck_id;
}

async function obtenerCartas(deckId, cantidad) {
    const response = await fetch(`${apiUrl}/${deckId}/draw/?count=${cantidad}`);
    const data = await response.json();
    return data.cards;
}

function CalcularValor(mano) {
    let valor = 0;
    let ases = 0;
    for (let carta of mano) {
        if (carta.value === 'ACE') {
            ases++;
            valor += 11;
        } else if (carta.value === 'KING' || carta.value === 'QUEEN' || carta.value === 'JACK') {
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

function mostrarCartas(cartas, jugador) {
    const divMano = document.getElementById(`${jugador}-mano`);
    for (let carta of cartas) {
        const img = document.createElement('img');
        img.src = carta.image;
        img.alt = `${carta.value} de ${carta.suit}`;
        divMano.appendChild(img);
    }
}

async function JuegoBlackjack() {
    const deckId = await CrearMazo();
    let jugadorReal = await obtenerCartas(deckId, 2);
    let Maquina = await obtenerCartas(deckId, 2);

    mostrarCartas(jugadorReal, 'jugador');
    const PuntajeJ = CalcularValor(jugadorReal);
    document.getElementById('puntajeJugador').innerHTML = `Puntaje = ${PuntajeJ}`;

    mostrarCartas([Maquina[0]], 'Maquina');
    const PuntajeM = CalcularValor([Maquina[0]]);
    document.getElementById('puntajeMaquina').innerHTML = `Puntaje = ${PuntajeM}`;

    document.getElementById('PedirCarta').addEventListener('click', async () => {
        const NuevaCarta = await obtenerCartas(deckId, 1);
        jugadorReal.push(NuevaCarta[0]);
        mostrarCartas([NuevaCarta[0]], 'jugador');
        const nuevoPuntaje = CalcularValor(jugadorReal);
        document.getElementById('puntajeJugador').innerHTML = `Puntaje = ${nuevoPuntaje}`;
        if (nuevoPuntaje > 21) {
            document.getElementById('resultado').innerHTML = `¡Te pasaste!, gana la maquina.`;
        }
    });

    document.getElementById('Quedarse').addEventListener('click', async () => {
        while (CalcularValor(Maquina) < 19) {
            const NuevaCarta = await obtenerCartas(deckId, 1);
            Maquina.push(NuevaCarta[0]);
            mostrarCartas([NuevaCarta[0]], 'Maquina');
        }

        const PuntosTotalesJugador = CalcularValor(jugadorReal);
        const PuntosTotalesMaquina = CalcularValor(Maquina);

        if (PuntosTotalesJugador > 21) {
            document.getElementById('resultado').innerHTML = '¡Te pasaste!, gana la maquina.';
        } else if (PuntosTotalesMaquina > 21 || PuntosTotalesJugador > PuntosTotalesMaquina) {
            document.getElementById('resultado').innerHTML = '¡Ganaste!, bien hecho';
        } else if (PuntosTotalesJugador === PuntosTotalesMaquina) {
            document.getElementById('resultado').innerHTML = 'Obtuviste un Empate';
        } else {
            document.getElementById('resultado').innerHTML = 'La maquina te gano XD';
        }
    });
}

JuegoBlackjack();

