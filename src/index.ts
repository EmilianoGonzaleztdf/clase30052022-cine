let n: number = 0;
let butacasCine: boolean[] = new Array(n);
let butacaOcupada: number = 0;
let butacaLibre: number = 0;

function generadorNumerosRandom(): number {
  return Boolean(Math.floor(Math.random() * 2));
}
function cargarArray(arrayLocal: boolean[], longitudLocal: number) {
  let i: number;
  for (i = 0; i < longitudLocal; i++) {
    arrayLocal[i] = generadorNumerosRandom();
  }
}
function calcularButacasDisponibles(
  butacaCineLocal: number[],//porque volver a crear variables?
  longitudlocal: number
) {
  let indice: number = 0;
  let butacaOcupadalocal: number = 0;
  let butacaLibrelocal: number = 0;
  //con SWITCH// nooo
  for (indice = 0; indice < longitudlocal; indice++) {
    for (indice = 0; indice < longitudlocal; indice++) {
      switch (butacaCineLocal[indice]) {
        case 0:
          butacaLibrelocal = butacaLibrelocal + 1;
          break;
        case 1:
          butacaOcupadalocal = butacaOcupadalocal + 1;
          break;
        default:
          break;
      }
    }
  }
  //con FOR
  /* for (indice = 0; indice < longitudlocal; indice++){
      if (butacaCineLocal[indice] === 0) {
  butacaLibrelocal = butacaLibrelocal+1;
      }else (butacaOcupadalocal = butacaOcupadalocal +1)
  }
  butacaOcupada = butacaOcupadalocal; 
  butacaLibre = butacaLibrelocal;
*/
}
function mostrarOcupacionSala() {
  console.log(
    "capacidad maxima:" + n,
    ", butacas libres:" + butacaLibre,
    ", butacas ocupadas: " + butacaOcupada
  );
}
function ejec() {
  cargarArray(butacasCine, n);
  calcularButacasDisponibles(butacasCine, n);
  mostrarOcupacionSala();
}
function cargarN(a: number) {
  a = Number(prompt("ingrese la longitud del arreglo"));
  if (isNaN(a)) {
    console.log("usted ingreso un valor incorrecto");
  } else if (a <= 0) {
    console.log("usted ingreso un valor incorrecto");
  } else {
    n = a;
    ejec();//mal nombre!!
  }
}

cargarN(n);
