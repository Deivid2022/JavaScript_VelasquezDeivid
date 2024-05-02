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

function mostrarCartasSinPrimera(cartas, jugador) {
    const cartasRestantes = cartas.slice(1); // Obtener todas las cartas excepto la primera
    mostrarCartas(cartasRestantes, jugador); // Llamar a la función original con las cartas restantes
}

async function JuegoBlackjack() {
    const deckId = await CrearMazo();
    let jugadorReal = await obtenerCartas(deckId, 2);
    let Maquina = await obtenerCartas(deckId, 2);

    mostrarCartas(jugadorReal, 'jugador');
    const PuntajeJ = CalcularValor(jugadorReal);
    document.getElementById('puntajeJugador').innerHTML = `Puntaje = ${PuntajeJ}`;

    mostrarCartas([Maquina[0]], 'Maquina');
    const PuntajeM = CalcularValor(Maquina);
    const PuntajeOculto = CalcularValor([Maquina[0]]);
    document.getElementById('puntajeMaquina').innerHTML = `Puntaje = ${PuntajeOculto}`;

    // Verificar si el puntaje del jugador es igual a 21 después de recibir las dos cartas iniciales
    if (PuntajeJ === 21) {
        setTimeout(function() {
            document.getElementById("miDiv").style.display = "block";
            document.getElementById("fondoTransparente").style.display = "block";
        }, 1000);
        document.getElementById('resultado').innerHTML = '¡Ganaste!, bien hecho';
        return; // Salir de la función si el juego ya ha terminado
    }

    document.getElementById('PedirCarta').addEventListener('click', async () => {
        const NuevaCarta = await obtenerCartas(deckId, 1);
        jugadorReal.push(NuevaCarta[0]);
        mostrarCartas([NuevaCarta[0]], 'jugador');
        const nuevoPuntaje = CalcularValor(jugadorReal);
        document.getElementById('puntajeJugador').innerHTML = `Puntaje = ${nuevoPuntaje}`;
        if (nuevoPuntaje > 21) {
            setTimeout(function() {
                document.getElementById("miDiv").style.display = "block";
                document.getElementById("fondoTransparente").style.display = "block";
            }, 1000);
            document.getElementById('resultado').innerHTML = `¡Te pasaste!, gana la maquina.`;
        } else if (nuevoPuntaje === 21) {
            setTimeout(function() {
                document.getElementById("miDiv").style.display = "block";
                document.getElementById("fondoTransparente").style.display = "block";
            }, 1000);
            document.getElementById('resultado').innerHTML = '¡Ganaste!, bien hecho';
        }
    });

    document.getElementById('Quedarse').addEventListener('click', async () => {
        mostrarCartasSinPrimera(Maquina, 'Maquina');
        while (CalcularValor(Maquina) < 17) {
            const NuevaCarta = await obtenerCartas(deckId, 1);
            Maquina.push(NuevaCarta[0]);
            mostrarCartas([NuevaCarta[0]], 'Maquina');
        }
    
        const PuntosTotalesJugador = CalcularValor(jugadorReal);
        const PuntosTotalesMaquina = CalcularValor(Maquina);
        document.getElementById('puntajeMaquina').innerHTML = `Puntaje = ${PuntosTotalesMaquina}`;
    
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

document.getElementById("Quedarse").addEventListener("click", function() {
    document.getElementById("imgrevers").style.display = "none"
    // Agregar un retraso de 2 segundos (2000 milisegundos)
    setTimeout(function() {
      // Mostrar el div
      document.getElementById("miDiv").style.display = "block";
      document.getElementById("fondoTransparente").style.display = "block";
    }, 1000);
  });

document.getElementById("mostrarReglasBtn").addEventListener("click", function() {
    document.getElementById("miDiv2").style.display = "block";
    document.getElementById("fondoTransparente").style.display = "block";
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("miDiv2").style.display = "none";
    document.getElementById("fondoTransparente").style.display = "none";
});



