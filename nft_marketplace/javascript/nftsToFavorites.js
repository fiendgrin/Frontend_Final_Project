const nfts = document.querySelector("#nsftsToFavorites .nfts");

const allNftData = [
  { id: 1, name: "Distant Galaxy", image: "1.png" },
  { id: 2, name: "Life On Edena", image: "2.png" },
  { id: 3, name: "AstroFiction", image: "3.png" },
  { id: 4, name: "CryptoCity", image: "4.png" },
  { id: 5, name: "ColorfulDog 0524", image: "5.png" },
  { id: 6, name: "Space Tales", image: "6.png" },
  { id: 7, name: "Cherry Blossom Girl 037", image: "7.png" },
  { id: 8, name: "Dancing Robots 0987", image: "8.png" },
  { id: 9, name: "IceCream Ape", image: "9.png" },
];

function nftMaker(id, name, image, favorite) {
  if (favorite) {
    return `<div id="${id}" class="nft">
    <img src="./${image}" alt="" />
    <div class="bottom">
      <div class="info">
        <h5>${name}</h5>
        <div class="account">
          <img src="./images/AvatarPlaceholder.png" alt="" />
          <p>MoonDancer</p>
        </div>
      </div>
      <div class="money">
        <div class="left">
          <p>Price</p>
          <p>1.63 ETH</p>
        </div>
        <div class="right">
          <p>Highest Bid</p>
          <p>0.33 wETH</p>
        </div>
      </div>
    </div>
  </div>`;
  } else {
    return `<div id="${id}" class="nft">
    <img src="./images/nftToFavorite/${image}" alt="" />
    <div class="bottom">
      <div class="info">
        <h5>${name}</h5>
        <div class="account">
          <img src="./images/AvatarPlaceholder.png" alt="" />
          <p>MoonDancer</p>
        </div>
      </div>
      <div class="money">
        <div class="left">
          <p>Price</p>
          <p>1.63 ETH</p>
        </div>
        <div class="right">
          <p>Highest Bid</p>
          <p>0.33 wETH</p>
        </div>
      </div>
    </div>
    <img id="${id}" class="heart" src="./icons/heart.svg" alt="" />
    <img id="${id}" class="heartHollow" src="./icons/heartHollow.svg" alt="" />
  </div>`;
  }
}

function nftAdder(data, favorite) {
  nfts.innerHTML = "";
  data.forEach((nft) => {
    nfts.innerHTML += nftMaker(nft.id, nft.name, nft.image, favorite);
  });
}

nftAdder(allNftData, false);

let cards = document.querySelectorAll(".nfts .nft");
let hearts = document.querySelectorAll(".nfts .nft .heart");
const tabs = document.querySelectorAll("#nsftsToFavorites .top .box .tab");

const allFavouritesData = [];

cardsFunc();

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("active")) {
      return;
    }
    tabs.forEach((tab2) => {
      tab2.classList.remove("active");
    });
    tab.classList.add("active");
    if (tab.textContent.includes("NFTs")) {
      nftAdder(allNftData, false);
      cards = document.querySelectorAll(".nfts .nft");
      hearts = document.querySelectorAll(".nfts .nft .heart");
      allFavouritesData.forEach((fav) => {
        hearts.forEach((heart) => {
          console.log(fav);
          console.log(heart);
          if (fav.id == heart.id) {
            heart.style.opacity = "1";
          }
        });
      });
    } else {
      nftAdder(allFavouritesData, true);
    }
    cardsFunc();
  });
});

function cardsFunc() {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      hearts.forEach((heart) => {
        if (card.id == heart.id && heart.style.opacity != "1") {
          heart.style.opacity = "1";
          let name = card.children[1].children[0].children[0].innerHTML;
          let image = card.children[0].getAttribute("src");
          allFavouritesData.push({ id: card.id, name: name, image: image });
        } else if (card.id == heart.id && heart.style.opacity == "1") {
          heart.style.opacity = "0.3";
          allFavouritesData.forEach((fav, idx) => {
            if (fav.id == heart.id) {
              allFavouritesData.splice(idx, 1);
            }
          });
        }
      });
      tabs[1].firstElementChild.innerHTML = allFavouritesData.length;
    });
  });
}
