const allArtistsTags = document.querySelectorAll(
  "#topRatedArtists .cards .card"
);
const baseUrl = window.location.protocol + "//" + window.location.host + "/";
const artistPageeUrl = baseUrl + "artistPage.html";
let urlWithParams;
let paramName;
let paramImage;
allArtistsTags.forEach((artistTag) => {
  artistTag.addEventListener("click", () => {
    artistsData.forEach((data) => {
      if (data.id == artistTag.id) {
        urlWithParams =
          artistPageeUrl +
          "?" +
          encodeURIComponent("id") +
          "=" +
          encodeURIComponent(data.id) +
          "&" +
          encodeURIComponent("name") +
          "=" +
          encodeURIComponent(data.name) +
          "&" +
          encodeURIComponent("image") +
          "=" +
          encodeURIComponent(data.image);
      }
    });

    let url = new URL(urlWithParams);

    window.location.href = url;
  });
});
