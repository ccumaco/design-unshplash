const contentFotos = document.getElementById('fotos');
const contentImage = document.getElementsByClassName('container-img');
const menuLateral = document.getElementsByClassName('menu-lateral');
let drawer = false;
cantidadImagenes = 10;

let columna1 = [];
let columna2 = [];
let columna3 = [];

for (let index = 0; index < (images.length/3); index++) {
    columna1.push(images[index]);
}
for (let index = columna1.length; index < (images.length/3)*2; index++) {
    columna2.push(images[index]);
}
for (let index = columna2.length*2; index < images.length; index++) {
    columna3.push(images[index]);
}
async function crearFilas () {
    for (let index = 0; index < images.length; index++) {
        
        contentImage[0].innerHTML+= `
            <div class="container-icons-img">
                <img src="${columna1[index].route}" alt="${columna1[index].alt}" id="${index}">
                <div class="avatar-creator"></div>
                    <button class="add-tofavorite"><i class="fas fa-heart"></i></button>
                    <button class="add-to-collection"><i class="fas fa-plus"></i></button>
                    <button class="download"><i class="fas fa-download"></i></button>
                </img>
            </div>
        `
        contentImage[1].innerHTML+= `
        <div class="container-icons-img">
            <img src="${columna2[index].route}" alt="${columna2[index].alt}" id="${index}"/>
            <div class="avatar-creator"></div>
                <button class="add-tofavorite"><i class="fas fa-heart"></i></button>
                <button class="add-to-collection"><i class="fas fa-plus"></i></button>
                <button class="download"><i class="fas fa-download"></i></button>
            </img>
        </div>
        `
        contentImage[2].innerHTML+= `
        <div class="container-icons-img">
            <img src="${columna3[index].route}" alt="${columna3[index].alt}" id="${index}"/>
            <div class="avatar-creator"></div>
                <button class="add-tofavorite"><i class="fas fa-heart"></i></button>
                <button class="add-to-collection"><i class="fas fa-plus"></i></button>
                <button class="download"><i class="fas fa-download"></i></button>
            </img>
        </div>
        `
    }
}

function closeDrawer(){
    drawer = !drawer
    console.log(drawer);
    if(drawer === true){
        console.log(menuLateral[0]);
        menuLateral[0].style.display = 'flex'
    } else {
        console.log(menuLateral[0]);
        menuLateral[0].style.display = 'none'
    }
}

function rowImages() {
    contentFotos.style.flexDirection = 'column'
}
function columImages() {
    contentFotos.style.flexDirection = 'row'
}
function showMore () {
    cantidadImagenes += 10;
    if(cantidadImagenes <= images.length){} else {
        cantidadImagenes = images.length
    }
    crearFilas()
}

crearFilas()
