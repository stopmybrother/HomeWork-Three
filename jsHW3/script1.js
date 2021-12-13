//task 1

let wrapper = document.querySelector(".wrapper");
let tittle = document.querySelector(".tittle");
let text = document.querySelector(".text");

console.log(wrapper);
console.log(tittle);
console.log(text);

// //task 2

let wrapper = document.querySelector(".wrapper");
let tittle = document.querySelector(".tittle");
let text = document.querySelector(".text");

let array = [];
array.push(wrapper, tittle, text);
console.log(array);

//task 3

const putInputValueInConsole = () => {
	let form = document.querySelector(".form");
	let input = document.querySelector(".input");
	let button = document.querySelector(".btn");

	button.addEventListener("click", (event) => {
		event.preventDefault();

		console.log(input.value);

		form.reset();
	});
};
putInputValueInConsole();

//task 4

const putTextFromInput = () => {
	let form = document.querySelector(".form");
	let input = document.querySelector(".input");
	let button = document.querySelector(".btn");
	let textFromInput = document.querySelector(".textFromInput");

	button.addEventListener("click", (event) => {
		event.preventDefault();

		textFromInput.innerHTML = input.value; // or +=

		form.reset();
	});
};
putTextFromInput();

//task 5

const putTextInModal = () => {
	let form = document.querySelector(".form");
	let input = document.querySelector(".input");
	let button = document.querySelector(".btn");

	let modal = document.querySelector(".modal");
	let modalText = document.querySelector(".modal__modalText");

	button.addEventListener("click", (event) => {
		event.preventDefault();

		modal.style.display = "block";
		modalText.innerHTML = input.value;

		form.reset();
	});
};
putTextInModal();

const closeModal = () => {
    let modal = document.querySelector(".modal");
	let buttonClose = document.querySelector(".modal__modalBtnClose");
    buttonClose.addEventListener("click", (event) => {
        event.preventDefault();

        modal.style.display = "none";
    });
}
closeModal();
