 class Favorite {
  constructor() {
    this.arrFavorite = [];
    this.favoriteNumber = document.querySelector('.dropdown-trigger[data-target]').textContent;    
  }  

  addFavorite(ticket) {
    this.arrFavorite.push(ticket);     
  }
  deleteFavorite(ticket) {
    const newArr = this.arrFavorite.filter(el => el.id !== ticket);
    this.arrFavorite = newArr;   
  }
}

export const favorite = new Favorite();