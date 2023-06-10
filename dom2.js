//get element by tag name
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[4]);
li[4].style.fontFamily="Bold";
li[4].textContent="5th Element";
li[4].style.backgroundColor="Yellow";

//shows undefined
//var item=document.getElementsByClassName('list-group-item');
//console.log(item);
//console.log(item[4]);