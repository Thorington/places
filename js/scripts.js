// Business Logic
class Places {
  constructor(location, landmark, season, advice) {
    this.location = location;
    this.landmark = landmark;
    this.season = season;
    this.advice = advice;
  }

    // let placeArray = [this.location,this.landmark,this.season,this.advice]
  display() {
    let placeString = this.location + " " + this.landmark + " " + this.season + " " + this.advice;
    return placeString;
  }
}

let portland = new Places("Oregon", "Welcome to Portland, Oregon sign", "Fall", "Avoid SE Powell");
let edinburgh = new Places("Scotland", "Edinburgh Castle", "Spring", "Avoid the haggis");
let munich = new Places("Germany", "Olympic Stadium", "Fall", "Avoid Oktoberfest");

// UI Logic

$(document).ready(function() {

  const listPlace = document.getElementById("place");
  
  document.getElementById("place").addEventListener('click', function() {
    document.getElementById("location").innerHTML = portland.display(); 
  });
})

// '<ul><li>' + placeArray.join("</li><li>"); + '</li></ul>';

// function displayContactDetails(addressBookToDisplay) {
//   let contactsList = $("ul#contacts");
//   let htmlForContactInfo = "";
//   Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
//     const contact = addressBookToDisplay.findContact(key);
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// }

// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     const inputtedFirstName = $("input#new-first-name").val();
//     const inputtedLastName = $("input#new-last-name").val();
//     const inputtedPhoneNumber = $("input#new-phone-number").val();
//     let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
//     addressBook.addContact(newContact);
//     displayContactDetails(addressBook)
//   });
// });




// $(document).ready(function(){
//   $("form#counter").submit(function(event){
//     event.preventDefault();
//     const number = $("#number").val ();
//     const result = output(number);
//     $("#output").toggle(Place);
//   });
// });
