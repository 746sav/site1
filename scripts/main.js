/*var myHeading = document.querySelector("h1");                                           //задание нужного заголовка
myHeading.textContent = "Hello world!";

function multiply(num1, num2) {                              //функция вывода предупреждения по нажатию в любом месте
    var result = num1 + num2;
    return result;
  }
  alert(multiply(1,3)); 
  document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };*/
  
  
// var myImage = document.querySelector("img");                           //изменение изображения при нажатии на него
// myImage.onclick = function () {
//   var mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/1.webp") {
//     myImage.setAttribute("src", "images/3.jpg");
//   } else {
//     myImage.setAttribute("src", "images/1.webp");
//   }
// };

var myButton = document.querySelector("button");                                                    //создание кнопки
var myHeading = document.querySelector("h1");

function setUserName() {                                   //функция задания имени и полуения ранее заданного из кэша
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName + ", it's my first site";
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello, " + storedName + ", it's my first site";
  }
  myButton.onclick = function () {                                                              //обработчик события
    setUserName();
  };

  const list = document.createElement('ul');

// const info = document.createElement('p');
// const html = document.querySelector('html');

// info.textContent = 'На данной странице работает скрипт, который работает по следующей логике: 1. при нажатии в любом месте появляется запрос на ввод текста, который выводит введеное в список, изменить введеный текст, можно нажав на него.';

// document.body.appendChild(info);
// document.body.appendChild(list);

// html.onclick = function() {
//   const listItem = document.createElement('li');
//   const listContent = prompt('What content do you want the list item to have?');
//   listItem.textContent = listContent;
//   list.appendChild(listItem);

//   listItem.onclick = function(e) {
//     e.stopPropagation();
//     const listContent = prompt('Enter new content for your list item');
//     this.textContent = listContent;
//   }
// }


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
 