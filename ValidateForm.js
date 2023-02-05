//Use for photo upload

const fileInput = document.getElementById('fileInput');

const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {

const file = this.files[0];

const reader = new FileReader();

reader.addEventListener('load', function() {

preview.src = reader.result;

});

reader.readAsDataURL(file);

});

// validation for country,state and city

const states = {

autralia: ["Australian Capital Territory", "New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria"],

canada: ["Alberta", "British Colombia", "Newfoundland and Labrador", "Ontario", "Prince Edward Island"],

usa: ["California", "Florida", "New York", "New Jersey", "Pennsylvania", "Texas", "Virginia", "Washington"],

india: ["Andhra Pradesh", "Assam", "Bihar", "Gujarat", "Haryana", "Karnataka", "Maharashtra", "Punjab"],

france: ["Auvergne-Rhône-Alpes", "Brittany", "Paris Region", "French Guiana", "Mayotte"],

germany: ["Bayern", "Brandenburg"],

uk: ["England", "Northern Ireland", "Scotland", "Wales"],

};

const cities = {

"New York": ["New York City", "Buffalo", "Rochester"],

"Australian Capital Territory": ["Canberra", "Hall", "Tharwa", "Tuqqeranonq"],

"New South Wales": ["Sydney", "Broken Hill", "Albury", "Newcastle", "Orange"],

Queensland: ["Brisbane", "Gold Coast", "Logan City"],

"South Australia": ["Adelaide", "Port Pirie", "Ceduna", "Whyalla"],

Tasmania: ["Hobart", "Devonport", "Launceston", "George Town", "Evendale"],

Victoria: ["Melbourne", "Bendigo", "Ballarat", "Geelong"],

Alberta: ["Calgary", "Edmonton", "St. Albert", "Lethbridge"],

"British Colombia": ["Vancouver", "Kelowna", "Nanaimo"],

"Newfoundland and Labrador": ["St. John's", "Labrador City", "Corner Brook", "Paradise"],

Ontario: ["Toronto", "Kingston", "Windsor", "Ottawa", "Mississauga"],

"Prince Edward Island": ["Alberton", "Charlottetown", "Souris", "Georgetown"],

California: ["Los Angeles", "San Francisco", "San Diego"],

Florida: ["Jacksonville", "Miami", "Tampa"],

"New Jersey": ["Newark", "Jersey City", "Paterson"],

Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"],

Virginia: ["Richmond", "Virginia Beach", "Chesapeake"],

Washington: ["Seattle", "Spokane", "Tacoma"],

Texas: ["Houston", "Dallas", "Austin"],

Maharashtra: ["Mumbai", "Pune", "Nagpur"],

"Uttar Pradesh": ["Lucknow", "Kanpur", "Allahabad"],

Karnataka: ["Bengaluru", "Mysuru", "Belagavi"],

"Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],

Assam: ["Guwahati", "Silchar", "Dibrugarh"],

Bihar: ["Patna", "Muzaffarpur", "Gaya"],

Gujarat: ["Ahmedabad", "Surat", "Valsad", "Vadodra"],

Haryana: ["Faridabad", "Gurugram", "Panipat"],

Punjab: ["Ludhiana", "Amritsar", "Jalandh"],

"Auvergne-Rhône-Alpes": ["Lyon", "Annecy", "Grenoble"],

Brittany: ["Rennes", "Brest", "Vannes"],

"Paris Region": ["Achères", "Alfortville", "Antony"],

"French Guiana": ["Cayenne", "Mana", "Macouria"],

Mayotte: ["Mamoudzou", "Pamanzi", "Chirongui"],

Bayern: ["Berlin", "Munich", "Würzburg", "Passau"],

Brandenburg: ["Eberswalde", "Potsdam", "Cottbus"],

England: ["London", "Bristol", "Liverpool", "Manchester", "Nottingham", "Oxford"],

"Northern Ireland": ["Belfast", "Lisburn", "Enniskillen"],

Scotland: ["Edinburgh", "Glasgow", "Inverness", "Perth", "Dunfermline", "Fort William", "Stirling"],

Wales: ["Cardiff", "Newport", "Swansea", "St Davids", "Pembroke", "Wrexham"]

};

function populateStates() {

const country = document.querySelector("#country").value;

const stateSelect = document.querySelector("#state");

stateSelect.innerHTML = "";

if (country === "") {

stateSelect.innerHTML = "<option value=''>Select a state</option>";

return;

}

const statesList = states[country];

statesList.forEach((state) => {

const option = document.createElement("option");

option.value = state;

option.text = state;

stateSelect.appendChild(option);

});

}

function populateCities() {

const state = document.querySelector("#state").value;

const citySelect = document.querySelector("#city");

citySelect.innerHTML = "";

if (state === "") {

citySelect.innerHTML = "<option value=''>Select a city</option>";

return;

}

const citiesList = cities[state];

citiesList.forEach((city) => {

const option = document.createElement("option");

option.value = city;

option.text = city;

citySelect.appendChild(option);

});

}

function validateForm() {

var firstName = document.getElementById("firstName").value;

var lastName = document.getElementById("lastName").value;

var dob = document.getElementById("dob").value;

var caste = document.getElementById("caste").value;

var gender = document.querySelector('input[name="gender"]:checked').value;

var handicap = document.querySelector('input[name="handicap"]:checked').value;

var country = document.getElementById("country").value;

var state = document.getElementById("state").value;

var city = document.getElementById("city").value;

var pincode = document.getElementById("pincode").value;

var school = document.getElementById("school").value;

var education = document.getElementById("education").value;

var hsc = document.getElementById("hsc").value;

var stream = document.getElementById("stream").value;

var reading = document.getElementById("reading").checked;

var sports = document.getElementById("sports").checked;

var traveling = document.getElementById("traveling").checked;

var music = document.getElementById("music").checked;

if (firstName == "") {

/*document.getElementById('firstNames').innerHTML="First Name is required.";*/

alert("First Name is required");

return false;

} else {

/*document.getElementById('firstNames').innerHTML="";*/

var regex = /^[a-zA-Z\s]+$/;

if (regex.test(firstName) === false) {

alert("Please enter a valid Name");

return false;

}

}

if (lastName == "") {

/* document.getElementById('lastNames').innerHTML="Last Name is required.";*/

alert("Last Name is required");

return false;

} else {

/* document.getElementById('lastNames').innerHTML="";*/

var regex = /^[a-zA-Z\s]+$/;

if (regex.test(lastName) === false) {

alert("Please enter a valid Name");

return false;

}

}

if (dob == "") {

/*document.getElementById('dobs').innerHTML="Date of Birth is required.";*/

alert("Date of Birth is required");

return false;

} else {

/* document.getElementById('dobs').innerHTML="";*/

}

if (caste == "") {

alert("Caste is required");

return false;

}

if (country == "Select Country") {

alert("Country is required");

return false;

}

if (state == "") {

alert("State is required");

return false;

}

if (city == "") {

alert("City is required");

return false;

}

if (pincode == "") {

alert("Pincode is required");

return false;

} else {

var regex = /^\d{4}$|^\d{6}$/;

if (regex.test(pincode) === false) {

alert("Please enter a valid Pincode.");

return false;

}

}

if (school == "") {

alert("School name is required");

return false;

}

if (education == "") {

alert("Education board is required");

return false;

}

if (hsc == "") {

alert("HSC % is required");

return false;

} else {

var regex = /^\d{1,2}\.\d{1,2}$|^\d{1,3}$/;

if (regex.test(hsc) === false) {

alert("Please enter a valid HSC Percentage.");

return false;

}

}

if (stream == "") {

alert("Stream is required");

return false;

}

if (!reading && !sports && !traveling && !music) {

alert("Please select at least one hobby");

return false;

}

return true;

}