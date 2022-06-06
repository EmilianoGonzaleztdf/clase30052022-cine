let longitud: number = 0;
let butacasCine: number[] = new Array(longitud);
let butacaOcupada: number = 0;
let butacaLibre: number = 0;

function generadorNumerosRandom(): number {
  return Math.floor(Math.random() * 2);
}
function cargarArray(arrayLocal: number[], longitudLocal: number) {
  let i: number;
  for (i = 0; i < longitudLocal; i++) {
    arrayLocal[i] = generadorNumerosRandom();
  }
}
function calcularButacasDisponibles(
  butacaCineLocal: number[],
  longitudlocal: number
) {
  let indice: number = 0;
  let butacaOcupadalocal: number = 0;
  let butacaLibrelocal: number = 0;

  for (indice = 0; indice < longitudlocal; indice++) {
    if (butacaCineLocal[indice] === 0) {
      butacaLibrelocal = butacaLibrelocal + 1;
    } else butacaOcupadalocal = butacaOcupadalocal + 1;
  }
  butacaOcupada = butacaOcupadalocal;
  butacaLibre = butacaLibrelocal;
}
function mostrarOcupacionSala() {
  console.log(
    "capacidad maxima:" + longitud,
    ", butacas libres:" + butacaLibre,
    ", butacas ocupadas: " + butacaOcupada
  );
}
function ejec() {
  cargarArray(butacasCine, longitud);
  calcularButacasDisponibles(butacasCine, longitud);
  mostrarOcupacionSala();
}
function cargarN(longitudLocal: number) {
  longitudLocal = Number(prompt("ingrese la longitud del arreglo"));
  if (isNaN(longitudLocal)) {
    console.log("usted ingreso un valor incorrecto");
  } else if (longitudLocal <= 0) {
    console.log("usted ingreso un valor incorrecto");
  } else {
    longitud = longitudLocal;
    ejec();
  }
}

cargarN(longitud);
