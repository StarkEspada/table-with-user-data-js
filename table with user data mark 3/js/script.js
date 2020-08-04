var search = document.querySelector(".search");
var boxId = document.querySelector(".box-id");
var boxFirsName = document.querySelector(".box-firs-name");
var boxLastName = document.querySelector(".box-last-name");
var boxEmail = document.querySelector(".box-email");
var boxPhone = document.querySelector(".box-phone");
var resultSearch = document.querySelector(".result-search");
var slaiderUp = document.querySelector(".slaider-up");
var slaiderDown = document.querySelector(".slaider-down");
var boxResult = document.querySelector(".box-result");
var containerTable = document.querySelector(".container-table");
var headerId = document.querySelector(".header-id");
var headerFirstName = document.querySelector(".header-first-name");
var headerLastName = document.querySelector(".header-last-name");
var headerEmail = document.querySelector(".header-email");
var headerPhone = document.querySelector(".header-phone");
var boxAddRow = document.querySelector(".box-add-row");
var loading = document.querySelector(".loading");
var boxInput = document.querySelectorAll(".box-input");
var inputStyle = document.querySelectorAll(".input-style");
var saveRow = document.querySelector(".save-row");
var hideMenu = document.querySelector(".hide-menu");
var showMenu = document.querySelector(".show-menu");
var headerMenu = document.querySelector(".header-menu");
var boxInputNumberLines = document.querySelector(".box-input-number-lines");
var inputStyleNumberLines = document.querySelector(".input-style-number-lines");
var saveNumberLines = document.querySelector(".save-number-lines");
var containerUserCard = document.querySelector(".container-user-card");

boxAddRow.style.display = "none";
boxInputNumberLines.style.display = "none";
saveNumberLines.style.display = "none";
loading.style.display = "none";
saveRow.style.display = "none";





var a = 0
var b = 2450
var count = 32

var dataId = [];
var dataFirstName = [];
var dataLastName = [];
var dataEmail = [];
var dataPhone = [];
var dataDescription = [];
var dataStreetAddress = [];
var dataCity = [];
var dataState = [];
var dataZip = [];

var dataInput = [];
var dataStyle = ["phone-user","email-user","last-name-user","first-name-user","id-user"];



for(var i = 0; i < boxInput.length; i++){
	boxInput[i].style.display = "none";
}

showMenu.addEventListener("click", function(){
	headerMenu.style.display = "none";
	saveRow.style.display = "inline-block";
	boxInputNumberLines.style.display = "inline-block";
	saveNumberLines.style.display = "inline-block";
	for(var i = 0; i < boxInput.length; i++){
		boxInput[i].style.display = "inline-block";
}
})

hideMenu.addEventListener("click", function(){
	headerMenu.style.display = "block";
	saveRow.style.display = "none";
	boxInputNumberLines.style.display = "none";
	saveNumberLines.style.display = "none";
	for(var i = 0; i < boxInput.length; i++){
		boxInput[i].style.display = "none";
}
})


saveNumberLines.addEventListener("click", function(){
	inputStyleNumberLinesValue = inputStyleNumberLines.value;
	count = inputStyleNumberLinesValue;
})



search.addEventListener("click", function(){
containerUserCard.innerHTML = "";
resultSearch.innerHTML = "";
loading.style.display = "block";
containerTable.style.display = "none";
loading.innerHTML = "Ожидайте идет процесс сбора данных..."	;

var url = "http://www.filltext.com/?rows=" + count + "&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

	var dataTable = new XMLHttpRequest()
		dataTable.open("GET", url)
 		dataTable.responseType = "json"
 		dataTable.onload = () => {
 			var data = dataTable["response"]
 			console.log(data)
 			for(var i = 0; i < data.length; i++){
				dataId.push(dataTable["response"][i]["id"]);
 				dataFirstName.push(dataTable["response"][i]["firstName"]);
 				dataLastName.push(dataTable["response"][i]["lastName"]);
 				dataEmail.push(dataTable["response"][i]["email"]);
 				dataPhone.push(dataTable["response"][i]["phone"]);
 				dataDescription.push(dataTable["response"][i]["description"]);
 				dataStreetAddress.push(dataTable["response"][i]["address"]["streetAddress"]);
 				dataCity.push(dataTable["response"][i]["address"]["city"]);
 				dataState.push(dataTable["response"][i]["address"]["state"]);
 				dataZip.push(dataTable["response"][i]["address"]["zip"]);
			}	

				for(var i = 0; i < data.length; i++){

 					var idUser = document.createElement("div");
 					idUser.classList.add("id-user");
 					resultSearch.append(idUser);
 					idUser.innerHTML = dataTable["response"][i]["id"];
 					idUser.setAttribute("name", dataFirstName[i] + " " + dataLastName[i]);
 					idUser.setAttribute("description", dataDescription[i]);
 					idUser.setAttribute("adress", dataStreetAddress[i]);
 					idUser.setAttribute("town", dataCity[i]);
 					idUser.setAttribute("state", dataState[i]);
 					idUser.setAttribute("zip", dataZip[i]);


 					var firstNameUser = document.createElement("div");
 					firstNameUser.classList.add("first-name-user")
 					resultSearch.append(firstNameUser)
 					firstNameUser.innerHTML = dataTable["response"][i]["firstName"]


 					var lastNameUser = document.createElement("div");
 					lastNameUser.classList.add("last-name-user")
 					resultSearch.append(lastNameUser)
 					lastNameUser.innerHTML = dataTable["response"][i]["lastName"]


 					var emailUser = document.createElement("div");
 					emailUser.classList.add("email-user")
 					resultSearch.append(emailUser)
 					emailUser.innerHTML = dataTable["response"][i]["email"]


 					var phoneUser = document.createElement("div");
 					phoneUser.classList.add("phone-user")
 					resultSearch.append(phoneUser)
 					phoneUser.innerHTML = dataTable["response"][i]["phone"]
 	


 					idUser.addEventListener("click", function(){
 						containerUserCard.innerHTML = ""
 						 user = event.target
 						 userName = user.getAttribute("name")
 						 userDescription = user.getAttribute("description")
 						 userAdress = user.getAttribute("adress")
 						 userTwon = user.getAttribute("town")
 						 userState = user.getAttribute("state")
 						 userZip = user.getAttribute("zip")

 						var userCard = document.createElement("div")
 						userCard.classList.add("user-card");
 						containerUserCard.append(userCard)

 						var boxNameUser = document.createElement("div")
 						boxNameUser.classList.add("box-name-user")
 						boxNameUser.innerHTML = "Выбран пользователь: " + "<br>" + userName
 						userCard.append(boxNameUser)

 						var boxDescriptionUser = document.createElement("div")
 						boxDescriptionUser.classList.add("box-description-user")
 						boxDescriptionUser.innerHTML = "Описание: " + userDescription
 						userCard.append(boxDescriptionUser)

 						var boxAdressUser = document.createElement("div")
 						boxAdressUser.classList.add("box-adress-user")
 						boxAdressUser.innerHTML = "Адрес проживания: " + userAdress
 						userCard.append(boxAdressUser)

 						var boxTwonUser = document.createElement("div")
 						boxTwonUser.classList.add("box-twon-user")
 						boxTwonUser.innerHTML = "Город: " + userTwon
 						userCard.append(boxTwonUser)

 						var boxStateUser = document.createElement("div")
 						boxStateUser.classList.add("box-state-user")
 						boxStateUser.innerHTML = "Провинция/штат: " + userState
 						userCard.append(boxStateUser)

 						var boxZipUser = document.createElement("div")
 						boxZipUser.classList.add("box-zip-user")
 						boxZipUser.innerHTML = "Индекс: " + userZip
 						userCard.append(boxZipUser)
 					})

 				}

 			loading.style.display = "none"
 			containerTable.style.display = "block"
 			boxResult.style.height = 2445 + "px"
 					
 			}

 	dataTable.send()
 	
 })


saveRow.addEventListener("click", function(){
	for(var i = 0; i < inputStyle.length; i++){
		inputStyle.innerHTML = ""
		console.log(dataStyle[i])
		var inputStyleValue = inputStyle[i].value
		console.log(inputStyleValue)
		var boxInputValue = document.createElement("div")
		boxInputValue.classList.add(dataStyle[i])
		resultSearch.prepend(boxInputValue)
		boxInputValue.innerHTML = inputStyleValue
	}
})



slaiderUp.onclick = function(){

	var test = dataId
	test.sort((a, b) => b - a)

	var count = 10
	a = a - b
	resultSearch.style.marginTop = a + "px"

}

slaiderDown.onclick = function(){
	var testTwo = dataId
	testTwo.sort((a, b) => a - b)
	a = a + b
	resultSearch.style.marginTop = a + "px"
}





