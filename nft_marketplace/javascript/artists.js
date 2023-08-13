const artistsData = [
  { id: 1, name: "Keepitreal", image: "creator1.png" },
  { id: 2, name: "DigiLab", image: "creator2.png" },
  { id: 3, name: "GravityOne", image: "creator3.png" },
  { id: 4, name: "Juanie", image: "creator4.png" },
  { id: 5, name: "BlueWhale", image: "creator5.png" },
  { id: 6, name: "Mr Fox", image: "creator6.png" },
  { id: 7, name: "Shroomie", image: "creator7.png" },
  { id: 8, name: "Robotica", image: "creator8.png" },
  { id: 9, name: "RustyRobot", image: "creator9.png" },
  { id: 10, name: "AnimaKid", image: "creator10.png" },
  { id: 11, name: "Dotgu", image: "creator11.png" },
  { id: 12, name: "Ghiblier", image: "creator12.png" },
];

const atristCardBox = document.querySelector("#topRatedArtists .cards");

function artisCardMaker(id, name, image) {
  return `<div id="${id}" class="card">
          <div class="top">
            <div class="number">${id}</div>
            <img src="./images/creators/${image}" alt="" />
          </div>
          <div class="bottom">
            <h5>${name}</h5>
            <div class="sales">
              <p>Total Sales:</p>
              <p>34.53 ETH</p>
            </div>
          </div>
        </div>`;
}

artistsData.forEach((artist) => {
  atristCardBox.innerHTML += artisCardMaker(
    artist.id,
    artist.name,
    artist.image
  );
});


