
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
    } else if (document.getElementById('camiseta').classList.contains('confirm')) {
        camiseta = 1;
        tshirt = 0;
        mangalonga = 0;
    } else if (document.getElementById('mangalonga').classList.contains('confirm')) {
        mangalonga = 1;
        tshirt = 0;
        camiseta = 0
    }
    console.log(tshirt,camiseta,mangalonga)

} 

