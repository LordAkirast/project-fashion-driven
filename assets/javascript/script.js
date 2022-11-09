let ownerShirt;
let ownerNeck;
let ownerMaterial;
let ownerImg;


let userName = prompt('Entre com o seu nome de usuário: ');


document.getElementById('btn_confirm').onclick = null;

let tShirt = 0;
let topTank = 0;
let long = 0;
function chooseModel(selected) {
    const element = document.querySelector('.confirm-shirt')
    if (element !== null) {
        element.classList.remove('confirm-shirt')
    }
    selected.classList.add('confirm-shirt')
    ownerShirt = selected.getAttribute('id')
    confirmButton()
    /* document.getElementById('top-tank').classList.remove('confirm')
    document.getElementById('long').classList.remove('confirm')
    document.getElementById('t-shirt').classList.remove('confirm')
    selected.classList.toggle('confirm')

    if (document.getElementById('t-shirt').classList.contains('confirm')) {
    tShirt = 1;
    topTank = 0;
    long = 0;
    confirmButton();
    } else if (document.getElementById('top-tank').classList.contains('confirm')) {
        topTank = 1;
        tShirt = 0;
        long = 0;
        confirmButton();
    } else if (document.getElementById('long').classList.contains('confirm')) {
        long = 1;
        tShirt = 0;
        topTank = 0
        confirmButton();
    } */

} 


let golav = 0;
let golaredonda = 0;
let golapolo = 0;
function chooseNeck(selected) {
    const element = document.querySelector('.confirm-neck')
    if (element !== null) {
        element.classList.remove('confirm-neck')
    }
    selected.classList.add('confirm-neck')
    ownerNeck = selected.getAttribute('id')
    confirmButton();
   /*  document.getElementById('v-neck').classList.remove('confirm')
    document.getElementById('round').classList.remove('confirm')
    document.getElementById('polo').classList.remove('confirm')
    selected.classList.toggle('confirm')

    if (document.getElementById('v-neck').classList.contains('confirm')) {
        golav = 1;
        golaredonda = 0;
        golapolo = 0;
        confirmButton();
    } else if (document.getElementById('round').classList.contains('confirm')) {
        golav = 0;
        golaredonda = 1;
        golapolo = 0;
        confirmButton();
    } else if (document.getElementById('polo').classList.contains('confirm')) {
        golav = 0;
        golaredonda = 0;
        golapolo = 1;
        confirmButton();
    } */

} 



let seda = 0;
let algodao = 0;
let poliester = 0;
function chooseMaterial(selected) {
    const element = document.querySelector('.confirm-material')
    if (element !== null) {
        element.classList.remove('confirm-material')
    }
    selected.classList.add('confirm-material')
    ownerMaterial = selected.getAttribute('id')
    confirmButton()
    /* document.getElementById('silk').classList.remove('confirm')
    document.getElementById('cotton').classList.remove('confirm')
    document.getElementById('polyester').classList.remove('confirm')
    selected.classList.toggle('confirm')

    if (document.getElementById('silk').classList.contains('confirm')) {
        seda = 1;
        algodao = 0;
        poliester = 0;
        confirmButton();
    } else if (document.getElementById('cotton').classList.contains('confirm')) {
        seda = 0;
        algodao = 1;
        poliester = 0;
        confirmButton();
    } else if (document.getElementById('polyester').classList.contains('confirm')) {
        seda = 0;
        algodao = 0;
        poliester = 1;
        confirmButton();
    } */

} 

function confirmButton() {
    console.log(userName,ownerShirt,ownerNeck,ownerMaterial)
    if(userName && ownerShirt && ownerNeck && ownerMaterial) {
        document.getElementById('btn_confirm').classList.add('button_confirm');
        document.getElementById('btn_confirm').onclick = proceed;


    }
}




let url;
function proceed() {
    alert('Confirmando encomenda...')
    ownerImg = document.querySelector('input').value
    let newTshirt = {
        model: ownerShirt,
        neck: ownerNeck,
        material: ownerMaterial,
        image: ownerImg,
        owner: userName,
        author: userName
    }

     url = document.getElementById('url').value
     
     console.log(newTshirt)
   axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts',newTshirt)
    .then(getTshirts);
   


}

let promise;
let id;
let image;
let material;
let model;
let neck;
let owner;

function getTshirts() {
   promise =  axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    .then((response) => {
        element = document.querySelector('.last_orders')
        element.innerHTML = ''
        for(let i in response.data) {
        id = response.data[i].id
        image = response.data[i].image
        material = response.data[i].material
        model = response.data[i].model
        neck = response.data[i].neck
        owner = response.data[i].owner
        element.innerHTML += `<div class="order" id=${i} onclick="copy(this)"> <img src="${image}" style="width:180px; height: 180px" alt="Blusa1"><p>Criador: ${owner}</p></div>`
        }
    });
}

function copy(i) {
    
    if(confirm("Encomendar um produto igual?")=== true) {
    let id = i.id
    promise =  axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    .then((response) => {
    ownerImg = response.data[id].image
    ownerMaterial = response.data[id].material
    ownerShirt = response.data[id].model
    ownerNeck = response.data[id].neck
    
    let newTshirt = {
        model: ownerShirt,
        neck: ownerNeck,
        material: ownerMaterial,
        image: ownerImg,
        owner: userName,
        author: userName   
    }

    axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts',newTshirt)
    .then(getTshirts);})
} else {
    alert("Cancelando encomenda...")
}

    

     
     
   
   
}


getTshirts();