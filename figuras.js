//Codigo del cuadrado
//El console.group() nos sirve para poder agrupar varios console.log en un solo bloque
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log('los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado miden: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado miden: ' + areaCuadrado + 'cm**2');
console.groupEnd();

//Codigo del triangulo
console.group('Triangulo');
const ladoTriangulo = 6;
const ladoTriangulo1 = 6;
const baseTriangulo = 4;

console.log(
    'los lados del triangulo miden: '
    + ladoTriangulo 
    + 'cm, ' 
    + ladoTriangulo1 
    + 'cm, ' 
    + baseTriangulo 
    + 'cm');
    
const alturaTriangulo = 5.5;
console.log('La altura del triangulo mide: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo + ladoTriangulo1 + baseTriangulo;
console.log('El perimetro del triangulo miden: ' + perimetroTriangulo + 'cm');

console.log('El area del triangulo miden: ' + (baseTriangulo * alturaTriangulo) / 2 + 'cm**2');
console.groupEnd();

//Codigo del ciruclo
console.group('Circulo');

//Radio
const radioCirculo = 4;
console.log('El radio del circulo miden: ' + radioCirculo + 'cm');

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo miden: ' + diametroCirculo + 'cm');

//PI
const pi = 3.1415; //forma 1 de definir PI
const pi2 = Math.PI; //forma 2 de definir PI con la libreria Math y el atributo PI
console.log('El valor de PI es: ' + pi2);

//Circunferencia
const perimetroCiruclo = diametroCirculo * pi2;
console.log('El perimetro del circulo miden: ' + perimetroCiruclo + 'cm');

//Area
const areaCirculo = (radioCirculo * radioCirculo) * pi2;
console.log('El area del circulo miden: ' + areaCirculo + 'cm**2');
console.groupEnd();



 

