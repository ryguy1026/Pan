//store URL of JSON we want to retrieve in a variable
var header = document.getElementsByClassName('character_nick');
var realname = document.getElementsByClassName('character_name');

var requestURL = 'characters.json';


//create new request object instance from from the XMLHttpRequest constructor
//new keyword
var request = new XMLHttpRequest();

//HTTP method, URL
request.open('GET', requestURL);

//set response type to json, XHR knows returning JSON, convert to Object
request.responseType = 'json';

//send request
request.send();

//wait for request
request.onload = function() {
	//window.alert("in function")
  //superHeroes stores response
  //will contain JSON
  var characters = request.response;
  //window.alert(music);

     console.dir(characters);
  //function to populate header
  populateHeader(characters);
  //function to show cards
  //showHeroes(music);
}

function populateHeader(jsonObj) {


	window.alert("in populate header");
  //create h1 tag
  var myH1 = document.createElement('h1');
  //find squadName in object, store in h1
  var character = jsonObj['characters'];
  console.log(JSON.stringify(character));
   console.log(character);
 window.alert(character);
//myH1.textContent = jsonObj['artist'];
  //append h1 to header

for (var i = 0, len = header.length; i < len; i++) {

	for (var i = 0; i < character.length; i++) {

       header[i].textContent = character[i].nickname;


	}

}

for (var i = 0, len = realname.length; i < len; i++) {

	for (var i = 0; i < character.length; i++) {

       realname[i].textContent = character[i].name;


	}

}



  //in paragraph, store hometown and date formed from JSON
  //myPara.textContent = 'Date Formed: ' + jsonObj['formed'] + ' // Active: ' + jsonObj['active'];
  //genre.textContent = 'Genre: ' + jsonObj['genre'];
  //header.appendChild(myPara);
  //header.appendChild(genre);


}
