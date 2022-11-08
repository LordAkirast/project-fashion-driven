
let userName = prompt('Entre com o seu nome de usuário: ');


document.getElementById('btn_confirm').onclick = null;

let tshirt = 0;
let camiseta = 0;
let mangalonga = 0;
function choose1(selected) {
    document.getElementById('camiseta').classList.remove('confirm')
    document.getElementById('mangalonga').classList.remove('confirm')
    document.getElementById('tshirt').classList.remove('confirm')
    selected.classList.toggle('confirm')

    if (document.getElementById('tshirt').classList.contains('confirm')) {
    tshirt = 1;
    camiseta = 0;
    mangalonga = 0;
    confirmButton();
    } else if (document.getElementById('camiseta').classList.contains('confirm')) {
        camiseta = 1;
        tshirt = 0;
        mangalonga = 0;
        confirmButton();
    } else if (document.getElementById('mangalonga').classList.contains('confirm')) {
        mangalonga = 1;
        tshirt = 0;
        camiseta = 0
        confirmButton();
    }
    console.log(tshirt,camiseta,mangalonga)

} 


let golav = 0;
let golaredonda = 0;
let golapolo = 0;
function choose2(selected) {
    document.getElementById('golav').classList.remove('confirm')
    document.getElementById('golaredonda').classList.remove('confirm')
    document.getElementById('golapolo').classList.remove('confirm')
    selected.classList.toggle('confirm')

    if (document.getElementById('golav').classList.contains('confirm')) {
        golav = 1;
        golaredonda = 0;
        golapolo = 0;
        confirmButton();
    } else if (document.getElementById('golaredonda').classList.contains('confirm')) {
        golav = 0;
        golaredonda = 1;
        golapolo = 0;
        confirmButton();
    } else if (document.getElementById('golapolo').classList.contains('confirm')) {
        golav = 0;
        golaredonda = 0;
        golapolo = 1;
        confirmButton();
    }
    console.log(golav,golaredonda,golapolo)

} 



let seda = 0;
let algodao = 0;
let poliester = 0;
function choose3(selected) {
    document.getElementById('seda').classList.remove('confirm')
    document.getElementById('algodao').classList.remove('confirm')
    document.getElementById('poliester').classList.remove('confirm')
    selected.classList.toggle('confirm')

    if (document.getElementById('seda').classList.contains('confirm')) {
        seda = 1;
        algodao = 0;
        poliester = 0;
        confirmButton();
    } else if (document.getElementById('algodao').classList.contains('confirm')) {
        seda = 0;
        algodao = 1;
        poliester = 0;
        confirmButton();
    } else if (document.getElementById('poliester').classList.contains('confirm')) {
        seda = 0;
        algodao = 0;
        poliester = 1;
        confirmButton();
    }
    console.log(seda,algodao,poliester)

} 

function confirmButton() {
    if(tshirt + camiseta + mangalonga + golav + golaredonda + golapolo + seda + algodao + poliester === 3) {
        document.getElementById('btn_confirm').classList.add('button_confirm');
        document.getElementById('btn_confirm').onclick = proceed;

    }
}



let url;
function proceed() {
     url = document.getElementById('url').value
     alert('Confirmando encomenda...')
    element = document.querySelector('.last_orders')
    element.innerHTML += '<div class="order"> <img src="./assets/images/Blusa1.png" alt="Blusa1"><p>Criador: Agata</p></div>'
}

let promise;
function get() {
   promise =  axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    .then(console.log(promise))
}


