/*
Objectives
1 - Click char button, mark the selected button
    1.1 - Took all buttons to verify when user click them
    1.2 - Add selected class in the clicked button
    1.3 - Verify if exist a selected button, if yes,
        remove it

2 - When click in char, show his info
    2.1 - Took all chars to show or hide them
    2.2 - Add selected class in the clicked char
    2.3 - Verify if exist a selected char, if yes,
        remove it
*/

const buttons = document.querySelectorAll('.button');  //1.1
const characters = document.querySelectorAll('.character');  //2.1

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        deselectButton();  //1.3
        deselectCharacter();  //2.3
        
        button.classList.add("selected");  //1.2
        characters[index].classList.add("selected");  //2.2
    });
});

function deselectCharacter() {
    const selectedCharacter = document.querySelector(".character.selected");
    selectedCharacter.classList.remove("selected");
}

function deselectButton() {
    const selectedButton = document.querySelector(".button.selected");
    selectedButton.classList.remove("selected");
}
