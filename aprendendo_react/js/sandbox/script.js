import numeroAleatorio from "./numeroAleatorio.js";
  console.log(numeroAleatorio());

const frutas = ['uva',  'banana'];
const [fruta1, fruta2] = frutas;
console.log(fruta1)




const  useQuadrado = [
  4,
  function (lado) {
    return lado * 4;
  },
];

const [lado, perimetro] = useQuadrado;
  console.log(perimetro(10));
