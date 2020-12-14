
const listSpotted = document.getElementById("spotted-animals-list");
let newSpot = document.querySelectorAll(".big-five-list li");
let AllSpotted = document.getElementsByClassName(".spotted-animals-list-item");

for ( user of newSpot){
    user.addEventListener('click', newFunction)};
   function newFunction(){     
    let newItem = document.createTextNode(this.innerText);
    let newSPotted = document.createElement("LI");
    newSPotted.appendChild(newItem);
 listSpotted.appendChild(newSPotted);
    };
//     newSpot.addEventListener('click', addAnimalfunction); 
//  function addAnimalfunction(){
    // console.log(newSpot);

// const listRemove = document.getElementById("spotted-animals-list");
const firstSpotted = document.getElementsByClassName("spotted-animals-list-item");
const buttonRemove = document.getElementById("remove-first-item-button");
buttonRemove.addEventListener("click", Myfunction);
function Myfunction(){
listSpotted.removeChild(listSpotted.childNodes[0]);
};
// const remove all
const listRemoveAll = document.getElementById("spotted-animals-list-item");
const buttonRemoveAll = document.getElementById("remove-all-button");
buttonRemoveAll.addEventListener("click", Myfunction2);
function Myfunction2(){
listSpotted.remove(listSpotted.innerHTML);


}

