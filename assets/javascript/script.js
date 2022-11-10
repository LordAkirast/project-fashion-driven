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
} 

function confirmButton() {
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
     
   promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts',newTshirt)
    promise.then(getTshirts);
   
    promise.catch(tratarErro)

}
function tratarErro(err) {
    element = document.querySelector('.error')
    element.classList.remove('displaynot')
    element.innerHTML = "Mensagem de erro: " + err.response.data.message
    console.log("Status code: " + err.response.status); // Ex: 404
      console.log("Mensagem de erro: " + err.response.data.message); // Ex: Not Found
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
    })
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
    creator = response.data[id].owner
    
    newTshirt = {
        model: ownerShirt,
        neck: ownerNeck,
        material: ownerMaterial,
        image: ownerImg,
        owner: userName,
        author: creator   
    }

    axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts',newTshirt)
    .then(getTshirts);})
} else {
    alert("Cancelando encomenda...")
}

    

     
     
   
   
}


getTshirts();