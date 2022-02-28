//    https://deckofcardsapi.com/api/deck/new/draw/?count=52

// btn event handaler setup
// get input value
//error handaling
const main = document.getElementById('main');
const searchButton = () => {
    // console.log("nahid");
    const input = document.getElementById("input-value")
    const inputValue = input.value;
    const errorMsg = document.getElementById('error');
    if (isNaN(inputValue) || inputValue == "") {
        // alert("not a number")
        errorMsg.innerText = "Please give a number"
        input.value = "";
        main.innerHTML = "";
    }
    else if (inputValue < 0) {
        errorMsg.innerText = "please give a positive number"
        input.value = "";
        main.innerHTML = "";

    }

    else {
        main.innerHTML = "";
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => Cardsdisplay(data.cards))
        input.value = "";
        errorMsg.innerText = "";
    }
}
const Cardsdisplay = (cards) => {

    for (const card of cards) {
        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.suit}</h5>
    <p class="card-text">${card.code}</p>
    <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
  </div>
</div>
        `
        main.appendChild(div)
    }
}

const cardDetails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code === code)
            const div = document.createElement("div");
            main.innerHTML = "";
            div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${singleCard.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${singleCard.suit}</h5>
                        <p class="card-text">${singleCard.code}</p>
                        <p class="card-text">${singleCard.value}</p>
                    </div>
                </div>
            `
            main.appendChild(div)
        })
    }