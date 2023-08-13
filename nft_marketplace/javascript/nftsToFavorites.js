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

function nftMaker(id, name, image) {
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

allNftData.forEach((nft) => {
  nfts.innerHTML += nftMaker(nft.id, nft.name, nft.image);
});

const cards = document.querySelectorAll(".nfts .nft");

let allFavouritesData = [];
