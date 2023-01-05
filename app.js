
const container = document.getElementById('container');
const colores = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const cantidadCuadrados = 500;

for(let i=0; i<cantidadCuadrados; i++) {
  const cuadraditos = document.createElement('div');
  cuadraditos.classList.add('estiloCuadradito');
  
  cuadraditos.addEventListener('mouseover', () => {
    elegirColor(cuadraditos);
  });
  
  cuadraditos.addEventListener('mouseout', () => {
    removerColor(cuadraditos);
  });
  
  container.appendChild(cuadraditos);
}

function elegirColor(losdivs) {
  const color = getRandomColor();
  losdivs.style.background = color;
  losdivs.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removerColor(losdivs) {
    losdivs.style.background = '#1d1d1d';
    losdivs.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colores[Math.floor(Math.random() * colores.length)];
}


/*//declaracion de variables

let container=document.getElementById('container')
let colores=['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let cantidadCuadrados= 500




for (let i = 0; i < cantidadCuadrados; i++) {
   let cuadraditos= document.createElement('div')
   cuadraditos.classList.add('estiloCuadradito')

   //container.innerHTML=cuadraditos
   container.appendChild(cuadraditos)

   cuadraditos.addEventListener('mouseover', ()=>{
    obtenerColor(cuadraditos)
   })

    
}

//funciones

function obtenerColor(midivs){
    let color=randomColor()
console.log()

midivs.style.background=colores[color]
}


function randomColor(){
  let resultado=  Math.floor(Math.random() * colores.length)
  return resultado
}

//Eventos*/






