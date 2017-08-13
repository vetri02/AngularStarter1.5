function MoviesController() {
  this.favorites = [{
    "id": "forrest-gump",
    "title": "Forrest Gump",
    "year": 1994,
    "popular": true,
    "category": 'drama',
    "img": 'http://iccfilm110.pbworks.com/f/wes-anderson-style-forrest-gump-opening-title-sequence.jpeg',
    "imdbId": 'tt0109830',
    "actors": ["tom-hanks", "robin-wright", "gary-sinise"]
  },
  {
    "id": "saving-private-ryan",
    "title": "Saving Private Ryan",
    "year": 1998,
    "popular": true,
    "category": 'action',
    "img": 'https://img.haikudeck.com/mg/5023B391-ABA3-45D1-B2A4-69E091DCD7E4.jpg',
    "imdbId": 'tt0120815',
    "actors": ["tom-hanks", "matt-damon", "tom-sizemore"]
  },
  {
    "id": "the-bourne-identity",
    "title": "The Bourne Identity",
    "year": 2002,
    "popular": false,
    "category": 'thriller',
    "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoLlMHhW1Kz03C4SgnaYdmCeHyYqWm5jyRnyCiicuYTRaOEar',
    "imdbId": 'tt0258463',
    "actors": ["franka-potente", "matt-damon", "chris-cooper"]
  }];

  this.likesList = [];

  this.addToLikes = function(movie){
    this.likesList.push(movie);
  };

  this.unlike = function(index){
    this.likesList.splice(index, 1);
  };
}

angular
  .module('app')
  .controller('MoviesController', MoviesController)
