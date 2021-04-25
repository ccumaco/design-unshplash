const element = '';
let crearDiv = document.createElement('div')
const contentImage = document.getElementById('fotos');
async function cargarImagenes () {
    for (let index = 0; index < images.length; index++) {
        contentImage.innerHTML+= `
            <div class="container-img">
                <img src="${images[index].route}" alt="${images[index].alt}"/>
            </div>
        `
    }
}

function rowImages() {
    contentImage.style.gridTemplateColumns = 'repeat(1, 1fr)'
    console.log('entro');
}

cargarImagenes()