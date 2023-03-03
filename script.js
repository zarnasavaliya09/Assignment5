/*
    Assignment 05 Zarna Savaliya
*/

$(document).ready(function () {
  // your code here
  const contentItemList = $("#content-item-list");

  items.forEach(function (item) {
    const contentItemHtml = `<div class="content-item-wrapper" id="contentitem-${
      item.id
    }">
                                ${item.toString()}
                             </div>`;

    contentItemList.append(contentItemHtml);
    $(`#contentitem-${item.id}`).css({
      border: "2px solid gray",
      width: "90%",
      padding: "10px",
      margin: "20px auto",
    });
  });
});
class ContentItem {
  constructor(id, name, description, genre) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
  }
  updateContentItem(id, name, description, genre) {
    if (this.id == id) {
      if (name != null) {
        this.name = name;
      }
      if (description != null) {
        this.description = description;
      }
      if (genre != null) {
        this.genre = genre;
      }
    }
  }
  toString() {
    return `
                <div class="content-item-wrapper" id="contentitem-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.genre}</div> 
                </div>`;
  }
}
let items = [
  new ContentItem(0, "The Shawshank Redemption", "The king of the jungle", "Drama"),
  new ContentItem(1, "The Godfather", "reluctant youngest son", "Action"),
  new ContentItem(2, "The Dark Knight", "psychological and physical tests", "Drama"),
  new ContentItem(3,"Schindler's List","Flightless birds that live in Antarctica","Horror"),
  new ContentItem(4,"Pulp Fiction","basic compassion","Comedy"),
];
