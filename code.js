let chocs = [
    {
      chocName: "Plain Milk",
      description: "Smooth milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "plain_milk.jpg",
    },
    {
      chocName: "Plain Dark",
      description: "Dark chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "plain_dark.jpg",
    },
    {
      chocName: "Bailey's Cup",
      description: "Dark chocolate with Bailey's Cream Filling",
      calories: 100,
      ingredients: "Cocoa butter, Milk, Cream, baileys",
      img: "baileys_cup.jpg",
    },
    {
      chocName: "Cappuccino Cup",
      description: "Dark chocolatewith Cappuccino style cream filling",
      calories: 120,
      ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
      img: "cappuccino_cup.jpg",
    },
    {
      chocName: "Nutter Butter",
      description: "Dark chocolate with peanut butter",
      calories: 190,
      ingredients: "Cocoa butter, Milk, Cream, peanut butter",
      img: "nutter_butter.jpg",
    },
    {
      chocName: "Orange Fondant",
      description: "Dark chocolate folded with orange fondant",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
      img: "orange_fondant.jpg",
    },
    {
      chocName: "Pistachio Cup",
      description: "Dark chocolate with nuggets of pistachio",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
      img: "pistachio_diamond.jpg",
    },
    {
      chocName: "Rum Barrel",
      description: "Dark chocolate with a decadent rum filling",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
      img: "rum_barrel.jpg",
    },
    {
      chocName: "Toffee Crunch",
      description: "Dark chocolate with brittle toffee candy",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, toffee",
      img: "toffee_crunch.jpg",
    },
    {
      chocName: "Plain Supreme",
      description: "Dark chocolate with slivers of milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "plain_hybrid.jpg",
    },
  ];

  function displayChocolateCards() {
    const chocolateCardsContainer = document.getElementById('chocolate-cards');
    chocs.forEach((choc, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${choc.img}" alt="${choc.chocName}">
            <div class="info">
                <h3>${choc.chocName}</h3>
                <p>${choc.description}</p>
                <p>Calories: ${choc.calories}</p>
            </div>
        `;
        chocolateCardsContainer.appendChild(card);
    });
}

function pickRandomSample() {
    const randomIndex = Math.floor(Math.random() * chocs.length);
    const selectedCard = document.querySelectorAll('.card')[randomIndex];
    selectedCard.style.backgroundColor = 'yellow';
    alert(`Your random code is: ${randomIndex + 1}`);
}

function showCaloriesAndContent() {
    const caloriesContentDiv = document.getElementById('calories-content');
    caloriesContentDiv.style.display = 'block';
    caloriesContentDiv.innerHTML = '<h2>Chocolates Information</h2>';
    chocs.forEach((choc, index) => {
        const chocInfo = document.createElement('div');
        chocInfo.innerHTML = `
            <h3>${choc.chocName}</h3>
            <p>Description: ${choc.description}</p>
            <p>Calories: ${choc.calories}</p>
            <p>Ingredients: ${choc.ingredients}</p>
        `;
        caloriesContentDiv.appendChild(chocInfo);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    displayChocolateCards();
});