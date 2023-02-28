/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    const contentItemList = $('#content-item-list');

    items.forEach(function(item){
        const contentItemHtml = `<div class="content-item-wrapper" id="contentitem-${item.id}">
                                ${item.toString()}
                             </div>`;

        contentItemList.append(contentItemHtml);
         $(`#contentitem-${item.id}`).css({
                               'border': '1px solid black',
                               'width': '80%',
                               'padding': '10px',
                               'margin': '20px auto'
                             });

    });


    

});
class ContentItem{
    constructor(id,name,description,genre){
        this.id=id;
        this.name=name;
        this.description=description;
        this.genre=genre;
    }
    updateContentItem(id,name,description,genre){
       if(this.id==id){
            if(name!=null){
                this.name=name;
            }
            if(description!=null){
                this.description=description;
            }
            if(genre!=null){
                this.genre=genre;
            }
            
       }
    }
    toString(){
        return `
                <div class="content-item-wrapper" id="contentitem-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.genre}</div> 
                </div>`;
       }  

      
}
let items = [
    new ContentItem(0, 'Lion', 'The king of the jungle', 'Big Cats'),
    new ContentItem(1, 'Elephant', 'The largest land animal', 'Wildlife'),
    new ContentItem(2, 'Giraffe', 'The tallest land animal', 'Wildlife'),
    new ContentItem(3, 'Penguin', 'Flightless birds that live in Antarctica', 'Birds'),
    new ContentItem(4, 'Octopus', 'Smart and elusive creatures that live in the ocean', 'Marine Life')
  ];


