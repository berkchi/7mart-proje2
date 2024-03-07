
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function(){
    let searchTerm = searchInput.value.trim().toLowerCase();
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards)

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase(); // Parantezleri ekledim
        console.log(productName);

        if(productName.includes(searchTerm)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
    searchInput.value = "";
});

// ! sepeti arttırıp azaltmak için

const row = document.querySelector(".row")
const sepet = document.querySelector("#result")

row.addEventListener("click", function(e){
    if(e.target.className.includes("add-to-card")){
        sepet.innerHTML++;
    }else if(e.target.className.includes("remove-to-card")){
        if(sepet.innerHTML != 0){
                sepet.innerHTML--;
        }
    }
})

// ! markalara göre filtreleme yapmak 
const toyota = document.querySelector("#toyota")
const renault = document.querySelector("#renault")
const peugot = document.querySelector("#peugot")

toyota.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards)

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase(); // Parantezleri ekledim
        console.log(productName);

        if(productName.includes("toyota")){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
    searchInput.value = "";
});

peugot.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards)

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase(); // Parantezleri ekledim
        console.log(productName);

        if(productName.includes("peugot")){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
    searchInput.value = "";
});

renault.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards)

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase(); // Parantezleri ekledim
        console.log(productName);

        if(productName.includes("renault")){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
    searchInput.value = "";
});


