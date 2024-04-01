// Función para mostrar el formulario según la opción seleccionada
function mostrarFormulario() {
  let opciones = document.getElementById("opciones").value;
  let resultado = document.getElementById("resultado");
  let mensaje = document.getElementById("mensaje");

  // Limpiar el contenido anterior
  resultado.innerHTML = "";

  // Ocultar el formulario por defecto
  document.getElementById("formulario").style.display = "none";

  //OPERADORES
  if (opciones === "operadores") {
    // Mostrar el formulario si se selecciona la opción de operadores
    let ejercicio = prompt("Elija un ejercicio:\n1. Calcular el área de un triángulo\n2. Suma de dos números\n3. Elevar un número al cuadrado\n4. Conversión de euros a dolares\n5. Área y Perimetro de un cuadrado\n6. Área y volúmen de un cilindro\n7. Calcular longitud y área de una circunferencia\n8. Calcular el promedio de tres números");
      //ejercicio 1!
    if (ejercicio === "1") {
      let base = parseFloat(prompt("Ingrese la base del triángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
      let area = (base * altura) / 2;
      resultado.innerHTML = "El área del triángulo es: " + area;
      //ejercicio 2!
    } else if (ejercicio === "2") {
      let num1 = parseFloat(prompt("Ingrese el primer número:"));
      let num2 = parseFloat(prompt("Ingrese el segundo número:"));
      let suma = (num1 + num2);
      resultado.innerHTML = "La suma de " + num1 + " y " + num2 + " es: " + suma;
      //ejercicio 3!
    } else if (ejercicio === "3") {
      let num = prompt("Ingrese el número a elevar al cuadrado");
      mult = parseFloat(Math.pow(num,2));
      resultado.innerHTML = "El número " + num + " elevado al cuadrado es: " + mult;
      //ejercicio 4!
    } else if (ejercicio === "4") {
      let euros = parseFloat(prompt("Ingrese el valor de euros:"));
      let conversión = (euros*1.083);
      resultado.innerHTML = euros + " euros son: " + conversión + " dolares";
      //ejercicio 5!
    } else if (ejercicio === "5") {
      let lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));
      let areaC = Math.pow(lado,2);
      let perimetro = (4*lado);
      resultado.innerHTML = "El perimetro es de: " + perimetro + " y el área es: " + areaC;
      //ejercicio 6!
    } else if (ejercicio === "6") {
      let r = parseFloat(prompt("Ingrese el valor del radio:"));
      let h = parseFloat(prompt("Ingrese el valor de la altura:"));
      let areaCilindro = (2*Math.PI*r*h+(2*Math.PI*Math.pow(r,2)));
      let vol = (Math.PI*Math.pow(r,2)*h);
      resultado.innerHTML = "El área es: " + areaCilindro + " y el volúmen es de: " + vol;
      //ejercicio 7!
    } else if (ejercicio === "7") {
      let rr = parseFloat(prompt("Ingrese el valor del radio:"));
      let long = (2*Math.PI*rr);
      let area7 = (Math.PI*Math.pow(rr,2));
      resultado.innerHTML = "El área es: " + area7 + " y la longitud es de: " + long;
      //ejercicio 8!
    } else if (ejercicio === "8") {
      let n1 = parseFloat(prompt("Ingrese el primer número:"));
      let n2 = parseFloat(prompt("Ingrese el segundo número:"));
      let n3 = parseFloat(prompt("Ingrese el tercer número:"));
      let promedio = (n1 + n2 + n3)/3;
      resultado.innerHTML = "El promedio de los tres números ingresados es de: " + promedio;
    } else {
      alert("Ejercicio inválido");
    }
    // Mostrar el formulario
    document.getElementById("formulario").style.display = "block";
    document.getElementById("mensaje").style.display = "block";
  }

  //CONDICIONALES
  if (opciones === "condicionales") {
    // Mostrar el formulario si se selecciona la opción de condicionales
    let ejercicio = prompt("Elija un ejercicio:\n1. Saber si el número es positivo o negativo\n2. El menor y mayor entre dos números\n3. El mayor y el menor entre tres números\n4. Sumatoria si numA es menor que numB sino se Resta\n5. Cociente entre dos números\n6. Restar si entre dos números hay uno negativo, sino multiplicarlos\n7. Determinar si un año es bisiesto o no");
    //ejercicio 1!
    if (ejercicio === "1") {
      let j = parseFloat(prompt("Ingrese un número:"));
        if (j>0){
          resultado.innerHTML = "El número" + j + "es positivo";
        } else if(j<0){
          resultado.innerHTML = "El número" + j + "es negativo";
        } else{
          resultado.innerHTML = "El número" + j + "es de valor nulo";
        }
    //ejercicio 2!
    } else if (ejercicio === "2") {
      let z1 = parseFloat(prompt("Ingrese el primer número:"));
      let z2 = parseFloat(prompt("Ingrese el primer número:"));
        if (z1>z2){
        resultado.innerHTML = "El número mayor es: " + z1 + " y el menor es: " + z2;
        }else if (z1==z2){
        resultado.innerHTML = "Los números ingresados son iguales";
        }else{
        resultado.innerHTML = "El número mayor es: " + z2 + " y el menor es: " + z1;
        }
        //ejercicio 3!
    } else if (ejercicio === "3") {
      let x1 = parseFloat(prompt("Ingrese el primer número"));
      let x2 = parseFloat(prompt("Ingrese el segundo número"));
      let x3 = parseFloat(prompt("Ingrese el tercer número"));

       encontrarMinMax = () =>{
        let min = Math.min(x1, x2, x3);
        let max = Math.max(x1, x2, x3);
        return{min, max};
      }
      const {min, max}=encontrarMinMax(x1, x2, x3);
      resultado.innerHTML = "El número menor es: " + min + " y el número mayor es: " + max;
      //ejercicio 4!
    } else if (ejercicio === "4") {
      let numA = parseFloat(prompt("Ingrese el número A"));
      let numB = parseFloat(prompt("Ingrese el número B"));
      if(numA<numB) {
        let ssuma = (numA+numB);
        resultado.innerHTML = "Al ser numA menor, el resultado de la suma es de: " + ssuma;
      }else if(numA==numB){
        resultado.innerHTML = "La operación no es posible ya que los dos números son del mismo valor";
      }else{
        let resta = (numA-numB);
        resultado.innerHTML = "Al ser numA mayor, el resultado de la resta es de: " + resta;
      }
      //ejercicio 5
    } else if (ejercicio === "5") {
      let k1 = parseFloat(prompt("Ingrese el primer número:"));
      let k2 = parseFloat(prompt("Ingrese el segundo número:"));

      if(k1!==0 && k2!==0) {
        let div = (k1 / k2);
        resultado.innerHTML = "El cociente entre " + k1 + " y " + k2 + " es de: " + div;
      }else{
        resultado.innerHTML = "La división no es posible ya que alguno de los dos números es igual a cero";
      }
      //ejercicio 6
    } else if (ejercicio === "6") {
      let j1 = parseFloat(prompt("Ingrese el primer número:"));
      let j2 = parseFloat(prompt("Ingrese el segundo número:"));

      if(j1<0 || j2<0) {
        let sum = (j1 + j2);
        resultado.innerHTML = "El resultado de la suma entre los números" + j1 + " y " + j2 + " es: " + sum;
      }else{
        let multi = (j1 * j2);
        resultado.innerHTML = "El resultado de la multiplicación entre los números " + j1 + " y " + j2+ " es: " + multi;
      }
      //ejercicio 7!
    } else if (ejercicio === "7") {
      let year = parseFloat(prompt("Ingrese el año que desea:"));

      if ((year%4==0 && year%100!=0) || year%400==0) {
        resultado.innerHTML = "El año " + year + " es un año bisiesto.";
    } else {
        resultado.innerHTML = "El año " + year + " no es un año bisiesto.";
    }
    } else {
      alert("Ejercicio inválido");
    }
    // Mostrar el formulario
    document.getElementById("formulario").style.display = "block";
    document.getElementById("mensaje").style.display = "block";
  }

  //CICLOS
  if (opciones === "ciclos") {
    // Mostrar el formulario si se selecciona la opción de ciclos
    let ejercicio = prompt("Elija un ejercicio:\n1. Imprimir todos los múltiplos de 3 que hay entre 1 y 100\n2. Imprimir los números impares entre 0 y 100\n3. Imprimir los números pares de 0 a 100\n4. Cuadrados de los números del 1 al 30\n5. Suma de cuadrados de los cien primeros números naturales\n6. Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los números comprendidos entre ellos en secuencia ascendente\n7. Sumar todos los numeros que se digiten por teclado mientras no sea cero");
    //ejercicio 1!
    if (ejercicio === "1") {
      for(let i=3; i<101 ; i+=3){
        resultado.innerHTML = "Los multiplos de 3 que hay entre 1 y 100 son: " + i;
    }
      //ejercicio 2!
    } else if (ejercicio === "2") {
      for(let i=1; i<101 ; i+=2){
        resultado.innerHTML = "Los números impares que hay entre 0 y 100 son: " + i;
    }
      //ejercicio 3!
    } else if (ejercicio === "3") {
      for(let i=0; i<101 ; i+=2){
        resultado.innerHTML = "Los números pares que hay entre 0 y 100 son: " + i;
    }
      //ejercicio 4!
    } else if (ejercicio === "4") {
      for(let ii=1; ii<31 ; ii++){
        resultado.innerHTML +=(ii + " * " + ii + " = " + (ii * ii) + "<br>");
    }
      //ejercicio 5!
    } else if (ejercicio === "5") {
      let mm = 0;
      for (let i = 1; i < 101; i++) {
          mm += i * i;
      }
      resultado.innerHTML = "La suma de los cuadrados de los cien primeros números naturales es: " + mm;
      //ejercicio 6!
    } else if (ejercicio === "6") {
      let numm = parseFloat(prompt("Ingrese el primer número:"));
      let numM = parseFloat(prompt("Ingrese el segundo número:"));
      let secu = "";

      for (let i = numm; i <= numM; i++) {
          secu += i + " ";
      }
      resultado.innerHTML = "Los números naturales comprendidos entre " + numm + " y " + numM + " en secuencia ascendente son: " + secu;
      //ejercicio 7!
    } else if (ejercicio === "7") {
      let num;
      let suma = 0;
      let resultado = document.getElementById("resultado");
      do {
        num = parseInt(prompt("Ingrese un número (digite 0 para terminar):"));
        suma += num;
      } while (num !== 0);
    resultado.innerHTML = "La suma de los números ingresados es: " + suma;

    } else {
      alert("Ejercicio inválido");
    }
    // Mostrar el formulario
    document.getElementById("formulario").style.display = "block";
    document.getElementById("mensaje").style.display = "block";
  }
}
