//Codigo del cuadrado
//El console.group() nos sirve para poder agrupar varios console.log en un solo bloque
console.group('Cuadrado');
//const ladoCuadrado = 5;
//console.log('los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado){ 
    return lado * 4;
}

//console.log('El perimetro del cuadrado miden: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) { 
    return lado * lado;
}
//console.log('El area del cuadrado miden: ' + areaCuadrado + 'cm**2');
console.groupEnd();

//Codigo del triangulo
// console.group('Triangulo');
// const ladoTriangulo = 6;
// const ladoTriangulo1 = 6;
// const baseTriangulo = 4;

// console.log(
//     'los lados del triangulo miden: '
//     + ladoTriangulo 
//     + 'cm, ' 
//     + ladoTriangulo1 
//     + 'cm, ' 
//     + baseTriangulo 
//     + 'cm');
    
// const alturaTriangulo = 5.5;
// console.log('La altura del triangulo mide: ' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado,lado1,base) {
    return lado + lado1 + base;
}
//console.log('El perimetro del triangulo miden: ' + perimetroTriangulo + 'cm');

function areaTriangulo(base,altura) {
    return (base*altura) / 2;
}
//console.log('El area del triangulo miden: ' + (baseTriangulo * alturaTriangulo) / 2 + 'cm**2');
console.groupEnd();

//Codigo del ciruclo
console.group('Circulo');

//Radio
// const radioCirculo = 4;
// console.log('El radio del circulo miden: ' + radioCirculo + 'cm');

//Diametro
function diametroCirculo(radio) {
   return radio * 2;
}
//console.log('El diametro del circulo miden: ' + diametroCirculo + 'cm');

//PI
const pi = 3.1415; //forma 1 de definir PI
const pi2 = Math.PI; //forma 2 de definir PI con la libreria Math y el atributo PI
console.log('El valor de PI es: ' + pi2);

//Circunferencia
function perimetroCirculo(radio)  {
    return diametroCirculo(radio) * pi2;
}
//console.log('El perimetro del circulo miden: ' + perimetroCiruclo + 'cm');

//Area
function areaCirculo(radio) {
   return (radio * radio) * pi2;
}
//console.log('El area del circulo miden: ' + areaCirculo + 'cm**2');
console.groupEnd();



 

