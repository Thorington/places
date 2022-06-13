// Business Logic

function Place(location, landmark, season, advice) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.advice = advice;
}

let portland = new Place("Oregon", "Welcome to Portland, Oregon sign", "Fall", "Avoid SE Powell");
let edinburgh = new Place("Scotland", "Edinburgh Castle", "Spring", "Avoid the haggis");
let munich = new Place("Germany", "Olympic Stadium", "Fall", "Avoid Oktoberfest");


// UI Logic