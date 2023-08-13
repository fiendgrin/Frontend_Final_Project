let artistUrl = new URL(window.location);
let searchParams = artistUrl.searchParams;
paramName = searchParams.get("name");
paramImage = searchParams.get("image");
const artistAccountName = document.querySelector(
  "#artistAccount .bottom .box .left >h2"
);
const artistAccountImage = document.querySelector(
  "#artistAccount .top .avatar >img"
);
artistAccountName.textContent = paramName;

artistAccountImage.setAttribute("src", `./images/creators/${paramImage}`);
