const element = '';
let crearDiv = document.createElement('div')
const contentImage = document.getElementById('fotos');
cantidadImagenes = 10;
async function cargarImagenes () {
    
        for (let index = 0; index < cantidadImagenes; index++) {
            contentImage.innerHTML+= `
            <div class="container-img">
             <img src="${images[index].route}" alt="${images[index].alt}"/>
             <div></div>
            </div>
            `
        }
}

function rowImages() {
    contentImage.style.gridTemplateColumns = 'repeat(1, 1fr)'
    console.log('entro');
}
function columImages() {
    contentImage.style.gridTemplateColumns = 'repeat(3, 1fr)'
    console.log('entro');
}
function showMore () {
    cantidadImagenes + 10;
    if(cantidadImagenes <= images.length){} else {
        cantidadImagenes = images.length
    }
    cargarImagenes()
}

cargarImagenes()
