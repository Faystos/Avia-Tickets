 class Favorite {
  constructor() {
    this.arrFavorite = [];
    this.favoriteNumber = document.querySelector('.dropdown-trigger[data-target]').textContent;    
  }  

  addFavorite(ticket) {
    this.arrFavorite.push(ticket);     
  }  
}

export const favorite = new Favorite();