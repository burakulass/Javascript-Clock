let userName= prompt('İsminizi giriniz!')

let myName = document.querySelector('#myName')

myName.innerHTML= userName;


let myClock = document.querySelector('#myClock')

function displayClock(){
  var display = new Date().toLocaleTimeString();
  const options = { weekday: 'long'}

 var day = new Date().toLocaleDateString('tr-TR', options);
 // day.getVarDate
  myClock.innerHTML =`${display} ${day}`;
  console.log(display)
  setTimeout(displayClock, 1000); 
}
displayClock()